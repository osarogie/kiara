import React, { useState } from 'react'
import { createViewerFragmentContainer } from 'fragments/Viewer'
import { LoginRequired } from 'views/user/LoginRequired'

export const ViewerContext = React.createContext({})

export function ViewerProvider({ expectViewer, viewer, children, relay }) {
  const hasViewer = viewer && viewer.viewer && viewer.viewer.username
  const [refetched, setRefetched] = useState(false)

  // TODO: use this for sites on external domains
  // if (process.browser && !refetched) {
  //   relay.refetch()
  //   setRefetched(true)
  // }
  if (expectViewer && !hasViewer) return <LoginRequired />

  return (
    <ViewerContext.Provider value={{ expectViewer, viewer, relay }}>
      {children}
    </ViewerContext.Provider>
  )
}

ViewerProvider = createViewerFragmentContainer(ViewerProvider)

export function withViewer(Component) {
  return class extends React.Component {
    // static displayName = `withViewer(${Component.displayName})`

    render() {
      return (
        <ViewerContext.Consumer>
          {({ viewer, relay }) => {
            const hasViewer = viewer && viewer.viewer && viewer.viewer.username

            return (
              <Component
                viewer={viewer.viewer}
                refetchViewer={relay.refetch}
                hasViewer={hasViewer}
                {...this.props}
              />
            )
          }}
        </ViewerContext.Consumer>
      )
    }
  }
}
