import React from 'react'
import App, { Container as AppContainer } from 'next/app'
import { Container } from 'components/_partials/container'
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <AppContainer>
        <Container>
          <Component {...pageProps} />
        </Container>
      </AppContainer>
    )
  }
}
