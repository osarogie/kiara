import React from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { ScrollView } from 'react-native'
import Affix from 'antd/lib/affix'
import 'altmenu.scss'

export class AlternateMenu extends React.Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <div className="altmenu elevated">
          <div className="text-center groups">
            <div className="">
              <ScrollView horizontal>
                <nav className="header-menu">
                  <ul>
                    <li className="dropdown link">
                      <BrowserLink href="/">Your feed</BrowserLink>
                    </li>

                    {(this.props.list || []).map(l => (
                      <li className="dropdown link" key={l.node.permalink}>
                        <BrowserLink
                          href={`/c/${l.node.permalink}/stream`}
                          params={{ permalink: l.node.permalink }}
                        >
                          {l.node.name}
                        </BrowserLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollView>
            </div>
          </div>
        </div>
      </Affix>
    )
  }
}
