import Modal from 'antd/lib/modal'
import React, { useState, useContext } from 'react'
import { createViewerFragmentContainer } from 'fragments/Viewer'
import { LoginRequired } from 'views/user/LoginRequired'
import { AuthModal } from 'views/session/AuthModal'
import { Logo } from '../components/Logo'
import { View } from 'react-native'
import { useEffect } from 'react'
import { loginLink } from '../helpers/links'
import * as Sentry from '@sentry/nextjs'

export const ViewerContext = React.createContext({})

export function ViewerProvider({
  expectViewer,
  viewer,
  children,
  relay = undefined,
  forceLogin
}) {
  const hasViewer = viewer?.viewer?.username
  const [refetched, setRefetched] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (forceLogin && !hasViewer) {
      location.href = loginLink(location.href)
    }
    if (hasViewer) {
      Sentry.setContext('user_attributes', {
        name: viewer?.name,
        username: viewer?.username,
        id: viewer?._id
      })
      Sentry.configureScope((scope) => {
        scope.setTag('user_mode', 'user')
        scope.setUser({
          name: viewer?.name,
          username: viewer?.username,
          id: viewer?._id
        })
        // scope.clear();
      })
    }
  }, [hasViewer])

  if (forceLogin && !hasViewer) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'fixed'
        }}
      >
        <Logo size={100} />
      </View>
    )
  }

  if (expectViewer && !hasViewer) return <LoginRequired />

  function onModalCancel() {
    setModalVisible(false)
  }

  function showModal(message) {
    setMessage(message)
    setModalVisible(true)
  }

  return (
    <ViewerContext.Provider value={{ expectViewer, viewer, relay, showModal }}>
      <>
        {children}
        <Modal
          centered
          footer={null}
          width={550}
          visible={modalVisible}
          onCancel={onModalCancel}
          destroyOnClose
        >
          <AuthModal message={message} />
        </Modal>
      </>
    </ViewerContext.Provider>
  )
}

ViewerProvider = createViewerFragmentContainer(ViewerProvider)

export function withViewer(Component) {
  return function (props) {
    const viewerProps = useViewer()

    return <Component {...viewerProps} {...props} />
  }
}

export function useViewer() {
  const { viewer, relay, showModal } = useContext(ViewerContext)
  const hasViewer = viewer && viewer.viewer && viewer.viewer.username

  function requireViewer(message = 'Login') {
    if (hasViewer) return true
    showModal(message)
    return false
  }

  return {
    viewer: viewer.viewer,
    refetchViewer: relay.refetch,
    hasViewer: hasViewer,
    requireViewer: requireViewer
  }
}
