import { loginLink } from './../../helpers/links'
import Head from 'next/head'
import React from 'react'

export class NotFound extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Wrong Turn!</title>
          <link href="/static/error.css" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css?family=Bitter"
            rel="stylesheet"
          />
        </Head>

        <div className="center error">
          <a href="/" className="">
            <img
              className="logo"
              src="/static/images/logo2.png"
              alt="TheCommunity"
              title="TheCommunity"
            />
          </a>

          <div>
            <b className="extra">404</b>
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
