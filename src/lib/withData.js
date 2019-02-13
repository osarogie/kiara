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
      if (expectation && !this.props[expectation]) return false
      if (expectation === 'viewer' && !viewer.username) return false
      return true
    }

    render() {
      const { variables, viewer } = this.props

      if (Array.isArray(options.expect)) {
        for (let expectation of options.expect) {
          if (!this.pageFufillsExpectation(expectation)) return <NotFound />
        }
      } else {
        if (!this.pageFufillsExpectation(options.expect)) return <NotFound />
      }

      return (
        <RelayProvider environment={this.environment} variables={variables}>
          <ViewerProvider viewer={this.props}>
            <ComposedComponent {...this.props} />
          </ViewerProvider>
        </RelayProvider>
      )
    }
  }
}
