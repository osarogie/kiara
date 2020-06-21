import React from 'react'
import { Container } from 'components/_partials/container'
import * as Sentry from '@sentry/node'

// import 'antd/dist/antd.css'
import 'global.scss'
import 'app.scss'
import 'overrides.scss'
import 'search.scss'
import 'colours.scss'

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
})

export default function App({ Component, pageProps, err }) {
  return (
    <Container>
      <Component {...pageProps} err={err} />
    </Container>
  )
}
