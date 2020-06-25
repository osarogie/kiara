import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import LoaderBox from '../../components/LoaderBox'
import EmptyList from '../../components/EmptyList'

const keyExtractor = item => item.node.id

export function VerticalPaginationList({
  relay,
  propName,
  fieldName,
  listName,
  [propName]: fragment,
  renderItem,
  renderHeader,
  emptyListMessage,
  ...props
}) {
  const [isFetchingTop, setIsFetchingTop] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  const list = fragment?.[fieldName] || { edges: [] }
  const nativeId = useMemo(() => `${Math.random() * 100}`, [])

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling)

    return () => {
      document.removeEventListener('scroll', trackScrolling)
    }
  }, [trackScrolling])

  const trackScrolling = useCallback(() => {
    const wrappedElement = document.getElementById(nativeId)
    const isBottom =
      wrappedElement.getBoundingClientRect().bottom - 20 <= window.innerHeight
    if (isBottom) {
      onEndReached(nativeId)
    }
  }, [nativeId])

  const onRefresh = useCallback(() => {
    if (relay.isLoading()) return
    setIsFetchingTop(true)
    relay.refetchConnection(list?.edges?.length, err => {
      setIsFetchingTop(false)
    })
  }, [relay, list?.edges?.length])

  const onEndReached = useCallback(() => {
    if (list?.edges?.length === 0) return

    const hasMore = relay.hasMore()
    const isLoading = relay.isLoading()

    if (!hasMore || isLoading) {
      setHasMore(hasMore)
      setIsLoading(isLoading)
      return
    }

    relay.loadMore(10, err => {
      setHasMore(relay.hasMore())
      setIsLoading(relay.isLoading())
    })

    setHasMore(relay.hasMore())
    setIsLoading(relay.isLoading())
  }, [relay, list?.edges?.length])

  const renderFooter = useCallback(() => {
    if (!list?.edges?.length) {
      return <EmptyList message={emptyListMessage} />
    }

    if (hasMore) {
      return <LoaderBox isLoading={isLoading} onPress={onEndReached} />
    }

    return null
  }, [list?.edges?.length, hasMore, isLoading])

  return (
    <div id={nativeId}>
      <FlatList
        style={{ flex: 1 }}
        data={list?.edges}
        renderItem={renderItem}
        keyboardShouldPersistTaps={'handled'}
        keyExtractor={keyExtractor}
        // onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={isFetchingTop}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
        {...props}
      />
    </div>
  )
}
