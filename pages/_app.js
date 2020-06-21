import React from 'react'
import App from 'next/app'
import { Container } from 'components/_partials/container'
import * as Sentry from '@sentry/node'

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
