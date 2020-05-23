import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from '../../providers/ThemeProvider'

// import 'antd/dist/antd.css'
import 'global.scss'
import 'app.scss'
import 'overrides.scss'
import 'search.scss'
import 'colours.scss'

NProgress.configure({
  template: `
    <div class="bar" role="bar"></div>
    <div class="slider">
      <div class="line"></div>
      <div class="subline inc"></div>
      <div class="subline dec"></div>
    </div>
  `
})

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export class Container extends React.Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="stylesheet" href="/font/icont-fonts.min.css" /> */}

          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script"
            rel="stylesheet"
          />

          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-80914354-1', 'auto');
              ga('send', 'pageview');`
              }}
            />
          )}
        </Head>

        {/* <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} /> */}
        <ThemeProvider>{this.props.children}</ThemeProvider>
      </>
    )
  }
}
