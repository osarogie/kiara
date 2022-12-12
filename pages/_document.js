import Document, { Head, Html, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native-web'
import { nookies } from 'lib/nookies'

export default class extends Document {
  // static getInitialProps({ renderPage, req }) {
  //   AppRegistry.registerComponent('Main', () => Main)
  //   const { stylesheet, getStyleElement } = AppRegistry.getApplication('Main')
  //   const page = renderPage()
  //   const styles = (
  //     <>
  //       <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  //       {getStyleElement()}
  //     </>
  //   )
  //   const { theme } = nookies.get({ req })
  //   const themeColor = '#2d0d46'

  //   return { ...page, styles, theme, themeColor }
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="read, share, stories, write" />
          <link rel="dns-prefetch" href="https://hq.thecommunity.ng" />
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
