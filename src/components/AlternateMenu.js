import { GroupStreamLink } from './../links/GroupStreamLink'
import React from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { ScrollView } from 'react-native'
import Affix from 'antd/lib/affix'
import 'altmenu.scss'

export function AlternateMenu({ list = [] }) {
  return (
    <Affix offsetTop={0}>
      <div className="altmenu bdb">
        <div className="text-center groups">
          <div className="">
            <ScrollView horizontal>
              <nav className="header-menu">
                <ul>
                  <li className="dropdown link">
                    <BrowserLink href="/">Your feed</BrowserLink>
                  </li>

                  {list.map(({ node }) => (
                    <li className="dropdown link" key={node.permalink}>
                      <GroupStreamLink for={node}>{node.name}</GroupStreamLink>
                    </li>
                  ))}
                  <li className="dropdown link">
                    <BrowserLink href="/discover-blogs">More</BrowserLink>
                  </li>
                </ul>
              </nav>
            </ScrollView>
          </div>
        </div>
      </div>
    </Affix>
  )
}
