import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'

export function PageContainer({ children }) {
  return (
    <>
      <Affix offsetTop={0}>
        <AppBar className="elevated" />
      </Affix>

      {children}
    </>
  )
}
