import React from 'react'
import createEnvironment from 'relay-environment'
import { fetchQuery } from 'react-relay'
import RelayProvider from './RelayProvider'
import Error from '../../pages/_error'

export default (ComposedComponent, options = {}) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`

    static async getInitialProps(ctx) {
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

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

    render() {
      const { variables } = this.props
      if (options.expect && !this.props[options.expect]) return <Error />

      return (
        <RelayProvider environment={this.environment} variables={variables}>
          <ComposedComponent {...this.props} />
        </RelayProvider>
      )
    }
  }
}
