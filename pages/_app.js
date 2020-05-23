import React from 'react'
import App from 'next/app'
import { Container } from 'components/_partials/container'
import '../src/assets/styles/antd-custom.less'

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
