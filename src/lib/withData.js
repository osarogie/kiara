import { ViewerProvider } from './withViewer'
import React from 'react'
import createEnvironment from 'relay-environment'
import { fetchQuery } from 'react-relay'
import RelayProvider from './RelayProvider'
import { NotFound } from 'views/user/NotFound'

export default (ComposedComponent, options = {}) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`

    static async getInitialProps(ctx) {
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      if (!options.query) return composedInitialProps

      let queryProps = {}
      let queryRecords = {}
      let variables = {}
      let config = {}

      if (!process.browser) {
        config = {
          cache: 'no-cache',
          headers: {
            cookie: ctx.req.headers.cookie
          }
        }
      }

      const environment = createEnvironment(config)

      if (options.query) {
        const url = { query: ctx.query, pathname: ctx.pathname }
        variables = { ...url.query, ...options.variables }
        queryProps = await fetchQuery(environment, options.query, variables)

        queryRecords = environment
          .getStore()
          .getSource()
          .toJSON()
      }

      return {
        ...composedInitialProps,
        ...queryProps,
        variables,
        queryRecords
      }
    }

    constructor(props) {
      super(props)
      this.environment = createEnvironment({
        records: props.queryRecords
      })
    }

    pageFufillsExpectation(expectation) {
      const { viewer } = this.props
      if (expectation === 'viewer' && !(viewer && viewer.username)) return -1
      if (expectation && !this.props[expectation]) return false
      return true
    }

    render() {
      const { variables, viewer } = this.props
      let expectViewer

      if (Array.isArray(options.expect)) {
        for (let expectation of options.expect) {
          const result = this.pageFufillsExpectation(expectation)
          if (result === -1) expectViewer = true
          else if (!result) return <NotFound />
        }
      } else {
        const result = this.pageFufillsExpectation(options.expect)
        if (result === -1) expectViewer = true
        else if (!result) return <NotFound />
      }

      return (
        <RelayProvider environment={this.environment} variables={variables}>
          <ViewerProvider expectViewer={expectViewer} viewer={this.props}>
            <ComposedComponent {...this.props} />
          </ViewerProvider>
        </RelayProvider>
      )
    }
  }
}
