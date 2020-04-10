import { ViewerProvider } from './withViewer'
import React, { useEffect, useState } from 'react'
import createEnvironment from 'relay-environment'
import { fetchQuery } from 'react-relay'
import RelayProvider from './RelayProvider'
import { NotFound } from 'views/user/NotFound'
import { useRouter } from 'next/router'
import { createOperationDescriptor, getRequest } from 'relay-runtime'

export function withData(ComposedComponent, options = {}) {
  function WithData(props) {
    const { variables, viewer, queryRecords } = props

    const [environment, setEnvironment] = useState(() => {
      return createEnvironment({ records: queryRecords })
    })
    const queryConcreteRequest = getRequest(options.query)
    const requestIdentifier = createOperationDescriptor(
      queryConcreteRequest,
      variables
    )
    const pageData = environment.lookup(requestIdentifier.fragment)

    const router = useRouter()

    useEffect(() => {
      setEnvironment(createEnvironment({ records: queryRecords }))
    }, [router.asPath])

    function doesMeetExpectation(expectation) {
      if (expectation === 'viewer' && !(viewer && viewer.username)) return -1
      return !(expectation && !props[expectation])
    }

    let expectViewer

    if (Array.isArray(options.expect)) {
      for (let expectation of options.expect) {
        const result = doesMeetExpectation(expectation)
        if (result === -1) expectViewer = true
        else if (!result) return <NotFound />
      }
    } else {
      const result = doesMeetExpectation(options.expect)
      if (result === -1) expectViewer = true
      else if (!result) return <NotFound />
    }

    return (
      <RelayProvider environment={environment} variables={variables}>
        <ViewerProvider expectViewer={expectViewer} viewer={props}>
          <ComposedComponent {...props} {...pageData.data} />
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

  return WithData
}

export default withData
