import { BrowserLink } from '../src/components/BrowserLink'
import Head from 'next/head'
import React from 'react'

export default function AppError({ statusCode }) {
  return (
    <>
      <Head>
        <title>
          {statusCode == 404
            ? 'Wrong Turn'
            : 'Chai...Something just happend right now'}
        </title>
        <link href="/error.css" rel="stylesheet" type="text/css" />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
        />
      </Head>

      <div className="center error">
        <BrowserLink href="/">
          <img
            className="logo mx-auto"
            src="/images/logo2.png"
            alt="TheCommunity"
            title="TheCommunity"
          />
        </BrowserLink>

        <div>
          {statusCode == 404 ? (
            <>
              <b className="extra">There's Nothing Here</b>
              <p>
                Perhaps the page has been deleted OR you're spelling is wrong.
              </p>
            </>
          ) : (
            <>
              <b className="extra">There's been a problem</b>
              <p>
                It's not you, it's us, and we're doing everything possible to
                fix it
              </p>
            </>
          )}
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
