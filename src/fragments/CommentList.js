import React from 'react'
import LoadMoreBox from 'components/LoadMoreBox'
import EmptyList from 'components/EmptyList'
import CommentListItem from 'fragments/CommentListItem'

export default function CommentList({
  comments,
  itemProps,
  hasNext,
  isLoadingNext,
  loadNext
}) {
  const onEndReached = () => {
    if (!comments.edges.length) return
    if (!hasNext || isLoadingNext) {
      return
    }

    // fetch more
    loadNext(10)
  }
  const renderFooter = () => {
    if (!comments?.edges?.length) {
      return <EmptyList message="No comments yet" />
    }

    if (hasNext) {
      return <LoadMoreBox isLoading={isLoading} onPress={this.onEndReached} />
    }

    return null
  }

  return (
    <>
      {comments?.edges?.map(({ node }) => (
        <React.Fragment key={node.id}>
          <CommentListItem comment={node} {...itemProps} />
        </React.Fragment>
      ))}
      {renderFooter()}
    </>
  )
}
