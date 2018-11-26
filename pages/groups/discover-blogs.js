import { AppBar } from './../../src/components/AppBar'
import React from 'react'
import 'groups.scss'
import { PageContainer } from 'components/_partials/pageContainer'

export default function() {
  return (
    <PageContainer>
      <div className="container bg-white elevate" style={{ borderTop: 0 }}>
        <h3 className="s-head">
          <span className="underline">Discover Blogs</span>
        </h3>
        <div id="groups">
          <div id="control" className="control">
            <div className="l-group">
              <h3 style={{ margin: 0 }} fontSize="20px">
                Hi
              </h3>
              <div>
                <span>Testitn</span>
              </div>
            </div>
            <div className="l-group">
              <h3 style={{ margin: 0 }} fontSize="20px">
                Hi
              </h3>
              <div>
                <span>Testitn</span>
              </div>
            </div>
            <div className="l-group">
              <h3 style={{ margin: 0 }} fontSize="20px">
                Hi
              </h3>
              <div>
                <span>Testitn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
