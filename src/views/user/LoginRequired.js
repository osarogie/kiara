import { BrowserLink } from './../../components/BrowserLink'
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
          <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="/static/error.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css?family=Bitter"
            rel="stylesheet"
          />
        </Head>

        <div className="center error">
          <BrowserLink href="/" className="">
            <img
              className="logo"
              src="/static/images/logo2.png"
              alt="TheCommunity"
              title="TheCommunity"
            />
          </BrowserLink>

          <div>
            <b className="extra">Pardon me</b>
            {hasViewer ? null : (
              <p>
                You might need to{' '}
                {process.browser ? (
                  <BrowserLink href={loginLink()}>
                    <u>login</u>
                  </BrowserLink>
                ) : (
                  <u>login</u>
                )}{' '}
                🙂
              </p>
            )}
            <div>
              Go back <BrowserLink href="/">Home</BrowserLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}
