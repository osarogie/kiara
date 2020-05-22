import Modal from 'antd/lib/modal'
import { useState, useContext } from 'react'
import { createViewerFragmentContainer } from 'fragments/Viewer'
import { LoginRequired } from 'views/user/LoginRequired'
import { AuthModal } from 'views/session/AuthModal'

export const ViewerContext = React.createContext({})

export function ViewerProvider({ expectViewer, viewer, children, relay }) {
  const hasViewer = viewer && viewer.viewer && viewer.viewer.username
  const [refetched, setRefetched] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [message, setMessage] = useState('')

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
  return function(props) {
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
