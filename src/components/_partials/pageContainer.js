import Head from 'next/head'
import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'

export function PageContainer({ children, title = '', viewer }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Affix offsetTop={0}>
        <AppBar viewer={viewer} className="elevated" />
      </Affix>

      {children}
    </>
  )
}
