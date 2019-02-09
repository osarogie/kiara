import Document, { Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native-web'
import { nookies } from 'lib/nookies'

export default class extends Document {
  static getInitialProps({ renderPage, req }) {
    AppRegistry.registerComponent('Main', () => Main)
    const { stylesheet, getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = (
      <>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {getStyleElement()}
      </>
    )
    const { theme } = nookies.get({ req })
    const themeColor = '#2d0d46'

    return { ...page, styles, theme, themeColor }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="What\'s your story? Tell it on TheCommunity Discover some of the world\'s most powerful written voices."
          />
          <meta name="keywords" content="read, share, stories, write" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/apple-icon-57x57.png"
          />
          <link rel="dns-prefetch" href="//data.thecommunity.ng" />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta
            name="msapplication-TileColor"
            content={this.props.themeColor}
          />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content={this.props.themeColor} />
          {/* <link
            rel="stylesheet"
            href="//cdn.quilljs.com/1.2.6/quill.snow.css"
            key="quill"
          /> */}
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.6.4/antd.min.css"
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Karla"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,500|Source+Sans+Pro:300,400,500,600"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/style.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js" />
        </Head>
        <body className={this.props.theme || ''}>
          <Main />
          <NextScript />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-80914354-1', 'auto');
              ga('send', 'pageview');
            }}
          /> */}
        </body>
      </html>
    )
  }
}
