import React, { useEffect } from 'react'

import createEnvironment from 'relay-environment'
import { QueryRenderer } from 'react-relay'
import LoaderBox from 'components/LoaderBox'
import Error from '../../pages/_error'

export function QueryRendererProxy(props) {
  let environment = createEnvironment({})

  function reloadRenderer() {}

  function renderPage({ error, props: pageProps, retry }) {
    if (error) return null

    if (pageProps) {
      if (props.label && !pageProps[props.label]) return <Error />
      return props.render({
        error,
        props: pageProps,
        retry,
        environment: environment || createEnvironment()
      })
    }

    // return (
    // <div style={{ width: 400 }}>
    //   <ContentLoader
    //     height={160}
    //     width={400}
    //     speed={2}
    //     style={{ margin: 20 }}
    //     primaryColor="#f3f3f3"
    //     secondaryColor="#ecebeb"
    //   >
    //     <rect x="0" y="15" rx="4" ry="4" width="117" height="10.4" />
    //     <rect x="0" y="35" rx="3" ry="3" width="85" height="10.4" />
    //     <rect x="0" y="80" rx="3" ry="3" width="350" height="10.4" />
    //     <rect x="0" y="100" rx="3" ry="3" width="380" height="10.4" />
    //     <rect x="0" y="120" rx="3" ry="3" width="201" height="10.4" />
    //     {/* <circle cx="30" cy="30" r="30" /> */}
    //   </ContentLoader>
    // </div>
    // )

    if (!process.browser) return null

    return (
      <LoaderBox
        isLoading={!error}
        error={error && error.message}
        onPress={retry}
      />
    )
  }

  return (
    <QueryRenderer environment={environment} {...props} render={renderPage} />
  )
}
export default QueryRendererProxy
