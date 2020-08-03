import { ViewerProvider } from './withViewer'
import React, { useMemo } from 'react'
import createEnvironment from 'relay-environment'
import { fetchQuery } from 'react-relay'
import RelayProvider from './RelayProvider'
import { NotFound } from 'views/user/NotFound'
import { useRouter } from 'next/router'
import { createOperationDescriptor, getRequest } from 'relay-runtime'

export function withData(ComposedComponent, optionProvider = {}) {
  function WithData(props) {
    const { variables, viewer, queryRecords } = props
    const router = useRouter()
    const options = useMemo(() => {
      if (typeof optionProvider === 'function') {
        return optionProvider({ query: router.query })
      }
      return optionProvider
    }, [router.query])
    const graphqlQuery = options.query || options.graphqlQuery

    const environment = useMemo(
      () => createEnvironment({ records: queryRecords }),
      [router.asPath]
    )

    const pageData = useMemo(() => {
      const queryConcreteRequest = getRequest(graphqlQuery)
      const requestIdentifier = createOperationDescriptor(
        queryConcreteRequest,
        variables
      )
      return environment.lookup(requestIdentifier.fragment)
    }, [graphqlQuery, variables])

    const { notFound, expectViewer } = useMemo(() => {
      function doesMeetExpectation(expectation) {
        if (expectation === 'viewer' && !viewer?.username) return -1
        return !(expectation && !props[expectation])
      }

      let expectViewer, notFound

      if (Array.isArray(options.expect)) {
        for (let expectation of options.expect) {
          const result = doesMeetExpectation(expectation)
          if (result === -1) expectViewer = true
          else if (!result) notFound = true
        }
      } else {
        const result = doesMeetExpectation(options.expect)
        if (result === -1) expectViewer = true
        else if (!result) notFound = true
      }

      return { notFound, expectViewer }
    }, [options.expect])

    if (notFound) return <NotFound />

    return (
      <RelayProvider environment={environment}>
        <ViewerProvider
          expectViewer={expectViewer}
          forceLogin={options.forceLogin}
          viewer={props}
        >
          <ComposedComponent {...props} {...pageData.data} />
        </ViewerProvider>
      </RelayProvider>
    )
  }

  const { displayName, name } = ComposedComponent

  WithData.displayName = `withData(${displayName || name})`

  WithData.getInitialProps = async ctx => {
    let composedInitialProps = {}
    let options = optionProvider

    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx)
    }

    if (typeof options === 'function') {
      options = await optionProvider({ query: ctx.query })
    }

    const graphqlQuery = options.query || options.graphqlQuery
    if (!graphqlQuery) return composedInitialProps

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

    const variables = { ...ctx.query, ...options.variables }
    const queryProps = await fetchQuery(environment, graphqlQuery, variables)

    const queryRecords = environment
      .getStore()
      .getSource()
      .toJSON()

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
