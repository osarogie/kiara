import { AppBar } from './../AppBar'
import React from 'react'
import Affix from 'antd/lib/affix'

export function PageContainer({ children, title }) {
  return (
    <>
      <div className="t">
        <div className="elevated">
          <Affix offsetTop={0}>
            <AppBar />
          </Affix>
        </div>
        <style jsx>
          {`
            .t {
              position: relative;
              z-index: 1010;
              box-shadow: 0 0 6px -2px rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
      </div>

      {children}
    </>
  )
}
