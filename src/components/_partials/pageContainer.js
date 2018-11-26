import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'

export function PageContainer({ children, title }) {
  return (
    <>
      <div className="t">
        <Affix offsetTop={0}>
          <AppBar title={title} />
        </Affix>
        <style jsx>
          {`
            .t {
              position: relative;
              z-index: 1010;
              box-shadow: 0 0 6px -2px rgba(0, 0, 0, 0.2);
              border-bottom: 1px solid #e2e2e2;
            }
          `}
        </style>
      </div>

      {children}
    </>
  )
}
