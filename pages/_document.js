import Document, { Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native-web'
import { nookies } from 'lib/nookies'
import { Html } from 'next/document'
import { Children } from 'react'
import { backendUrl } from '../tc.config'

const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage, req } = ctx
    const initialProps = await Document.getInitialProps(ctx)
    AppRegistry.registerComponent('Main', () => Main)
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = Children.toArray([
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement()
    ])
    const { theme } = nookies.get({ req })
    const themeColor = '#2d0d46'

    return { ...initialProps, ...page, styles, theme, themeColor }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="read, share, stories, write" />
          <link rel="dns-prefetch" href={backendUrl} />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="msapplication-TileColor"
            content={this.props.themeColor}
          />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content={this.props.themeColor} />
          <link
            href="https://fonts.googleapis.com/css?family=Karla"
            rel="stylesheet"
          />
        </Head>
        <body className={this.props.theme || ''}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
