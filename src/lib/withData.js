import { ViewerProvider } from './withViewer'
import React, { useState, useEffect } from 'react'
import createEnvironment from 'relay-environment'
import { fetchQuery } from 'react-relay'
import RelayProvider from './RelayProvider'
import { NotFound } from 'views/user/NotFound'
import { withRouter } from 'next/router'

export function withData(ComposedComponent, options = {}) {
  function WithData(props) {
    const { variables, viewer, queryRecords } = props

    const [environment, setEnvironment] = useState(
      createEnvironment({ records: queryRecords })
    )

    useEffect(() => {
      setEnvironment(createEnvironment({ records: queryRecords }))
    }, [props.router.asPath])

    function pageFufillsExpectation(expectation) {
      if (expectation === 'viewer' && !(viewer && viewer.username)) return -1
      if (expectation && !props[expectation]) return false
      return true
    }

    let expectViewer

    if (Array.isArray(options.expect)) {
      for (let expectation of options.expect) {
        const result = pageFufillsExpectation(expectation)
        if (result === -1) expectViewer = true
        else if (!result) return <NotFound />
      }
    } else {
      const result = pageFufillsExpectation(options.expect)
      if (result === -1) expectViewer = true
      else if (!result) return <NotFound />
    }

    return (
      <RelayProvider environment={environment} variables={variables}>
        <ViewerProvider expectViewer={expectViewer} viewer={props}>
          <ComposedComponent {...props} />
        </ViewerProvider>
      </RelayProvider>
    )
  }

  const { displayName, name } = ComposedComponent

  WithData.displayName = `withData(${displayName || name})`

  WithData.getInitialProps = async ctx => {
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
          ...ctx.req.headers
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

  return withRouter(WithData)
}

export default withData
