import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'
import { CustomHead } from './CustomHead'

export function PageContainer({ children, title = '' }) {
  return (
    <>
      <CustomHead title={title} />
      <Affix offsetTop={0}>
        <AppBar className="elevated" />
      </Affix>

      {children}
    </>
  )
}
