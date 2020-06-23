import createEnvironment from 'relay-environment'
import { QueryRenderer } from 'react-relay'
import LoaderBox from 'components/LoaderBox'
import Error from '../../pages/_error'
import React, { useMemo } from 'react'
import { useCallback } from 'react'

export function QueryRendererProxy(props) {
  const environment = useMemo(() => createEnvironment({}))

  const renderPage = useCallback(
    ({ error, props: pageProps, retry }) => {
      if (error) return null

      if (pageProps) {
        if (props.label && !pageProps[props.label]) return <Error />
        return props.render({
          error,
          props: pageProps,
          retry,
          environment
        })
      }

      if (!process.browser) return null

      return (
        <LoaderBox isLoading={!error} error={error?.message} onPress={retry} />
      )
    },
    [props.render, props.label]
  )

  return (
    <QueryRenderer environment={environment} {...props} render={renderPage} />
  )
}
export default QueryRendererProxy
