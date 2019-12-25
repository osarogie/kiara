import { withViewer } from './../../lib/withViewer'
import { loginLink } from './../../helpers/links'
import Head from 'next/head'
import React from 'react'

export class LoginRequired extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const hasViewer = false

    return (
      <>
        <Head>
          <title>Wrong Turn!</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="/error.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css?family=Bitter"
            rel="stylesheet"
          />
        </Head>

        <div className="center error">
          {/* <a href="/" className="">
            <img
              className="logo"
              src="/images/logo2.png"
              alt="TheCommunity"
              title="TheCommunity"
            />
          </a> */}

          <div>
            <b className="extra">404</b>
            {hasViewer ? null : (
              <p>
                You might need to{' '}
                {process.browser ? (
                  <a href={loginLink()}>
                    <u>login</u>
                  </a>
                ) : (
                  <u>login</u>
                )}{' '}
                🙂
              </p>
            )}
            <div style={{ marginTop: 70 }}>
              Go back <a href="/">Home</a>
            </div>
          </div>
          <a href="/">
            <img
              className="logo mt20 center"
              src="/images/logo3.png"
              alt="Logo3"
              style={{
                height: 31,
                width: 31
              }}
            />
          </a>
        </div>
      </>
    )
  }
}
