import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError && !this.props.disabled) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
