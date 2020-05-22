import { BrowserLink } from './../src/components/BrowserLink'
import Head from 'next/head'
import React from 'react'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Wrong Turn</title>
        <link href="/error.css" rel="stylesheet" type="text/css" />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
        />
      </Head>

      <div className="center error">
        <BrowserLink href="/">
          <img
            className="logo"
            src="/images/logo2.png"
            alt="TheCommunity"
            title="TheCommunity"
          />
        </BrowserLink>

        <div>
          <>
            <b className="extra">There's Nothing Here</b>
            <p>
              Perhaps the page has been deleted OR you're spelling is wrong.
            </p>
          </>
          <div>
            Go back{' '}
            <BrowserLink href="/">
              <u>Home</u>
            </BrowserLink>
            . Or try Reloading the page
          </div>
        </div>
      </div>
    </>
  )
}
