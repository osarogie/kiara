import React from 'react'
import { createViewerFragmentContainer } from 'fragments/Viewer'

export const ViewerContext = React.createContext({})

export function ViewerProvider({ viewer, children, relay }) {
  return (
    <ViewerContext.Provider value={{ viewer, relay }}>
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
          {({ viewer, relay }) => (
            <Component
              viewer={viewer.viewer}
              refetchViewer={relay.refetch}
              hasViewer={viewer && viewer.viewer && viewer.viewer.username}
              {...this.props}
            />
          )}
        </ViewerContext.Consumer>
      )
    }
  }
}
