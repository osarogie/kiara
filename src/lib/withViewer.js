import React from 'react'

export const ViewerContext = React.createContext({})

export function ViewerProvider({ viewer, children }) {
  return (
    <ViewerContext.Provider value={viewer}>{children}</ViewerContext.Provider>
  )
}

export function withViewer(Component) {
  return class extends React.Component {
    // static displayName = `withViewer(${Component.displayName})`

    render() {
      return (
        <ViewerContext.Consumer>
          {viewer => (
            <Component
              viewer={viewer}
              hasViewer={viewer && viewer.username}
              {...this.props}
            />
          )}
        </ViewerContext.Consumer>
      )
    }
  }
}
