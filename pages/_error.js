import Head from 'next/head'
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <>
        <Head>
          <title>Wrong Turn!</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="/static/error.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css?family=Bitter"
            rel="stylesheet"
          />
        </Head>

        <div className="center error">
          <a href="/" className="left">
            <img
              className="logo"
              src="/static/images/logo2.png"
              alt="TheCommunity"
              title="TheCommunity"
            />
          </a>

          <div>
            <div className="extra">
              Sorry, you requested a page that
              <span> does not exist</span>
            </div>
            <p>
              Perhaps the page has been deleted OR you're spelling is wrong.
            </p>
            <div>
              Go back <a href="/">Home</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
