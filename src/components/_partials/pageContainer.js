import Head from 'next/head'
import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'

export function PageContainer({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Affix offsetTop={0}>
        <AppBar className="elevated" />
      </Affix>

      {children}
    </>
  )
}
