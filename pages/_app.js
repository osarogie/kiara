import React from 'react'
import App from 'next/app'
import { Container } from 'components/_partials/container'
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
