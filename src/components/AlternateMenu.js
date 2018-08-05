import React from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { ScrollView } from 'react-native'
import { YELLOW, NUBLUE } from 'ui'
import Affix from 'antd/lib/affix'
// var axios = require('axios')

export class AlternateMenu extends React.Component {
  render() {
    // console.log(window.list)

    return (
      <div className="altmenu">
        <Affix offsetTop={0}>
          <div
            style={{
              background: NUBLUE
              // borderBottom: '1px solid #f5f5f5'
              // borderTop: '1px solid #ddd',
              // boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 3px -3px'
            }}
          >
            <div className="text-center groups">
              <div className="menu-parent-box">
                {/* <!-- header-menu --> */}
                <ScrollView horizontal>
                  <nav className="header-menu">
                    <ul>
                      <li className="dropdown link">
                        <BrowserLink
                          activeStyle={styles.active}
                          route="/"
                          // style={styles.link}
                        >
                          Your feed
                        </BrowserLink>
                      </li>
                      {/* <li className="dropdown">
                      <BrowserLink
                        activeStyle={styles.active}
                        to="/c/the-candy-baron-scribbles/stream"
                        style={styles.link}
                      >
                        The Candy Baron Scribbles
                      </BrowserLink>
                    </li>
                    <li className="dropdown">
                      <BrowserLink
                        activeStyle={styles.active}
                        to="/c/new-series/stream"
                        style={styles.link}
                      >
                        the "Hold-up"
                      </BrowserLink>
                    </li>
                    <li className="dropdown">
                      <BrowserLink
                        activeStyle={styles.active}
                        to="/c/dim-ingle/stream"
                        style={styles.link}
                      >
                        Dim Ingle
                      </BrowserLink>
                    </li> */}
                      {(this.props.list || []).map(l => (
                        <li className="dropdown link">
                          <BrowserLink
                            className="link"
                            key={l.node.permalink}
                            activeStyle={styles.active}
                            route={`/c/${l.node.permalink}/stream`}
                            params={{ permalink: l.node.permalink }}
                            // style={styles.link}
                          >
                            {l.node.name}
                          </BrowserLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </ScrollView>
                {/* <!-- /header-menu --> */}
              </div>
              {/* <!--	<div className="pull-right">
				<div className="search">
					<a href="#" style={{padding:"23px 21px 22px 20px"}}  className="search-open"><span className="icon icon-search"></span></a>
					<div className="search-dropdown">
						<form action="#" method="get">
							<div className="input-outer">
								<input type="search" name="search" value="" maxlength="128" placeholder="Enter keyword">
								<button type="submit" className="btn-search">SEARCH</button>
							</div>
							<a href="#" className="search-close"><span className="icon icon-close"></span></a>
						</form>
					</div>
				</div>
      </div> --> */}
            </div>
          </div>
        </Affix>
        <style jsx>
          {`
            li.dropdown {
              float: left;
            }
            .groups {
              max-width: 1100px;
              margin: auto;
            }
            .link {
              padding-left: 12px;
              padding-right: 13px;
              padding-bottom: 10px;
              padding-top: 10px;
              border-width: 0;
              border-color: #2f292914;
              color: #fffc;
              // border-right-width: 1px;
              border-style: solid;
              padding: 9px 13px 9px 12px;
              display: block;
              text-transform: uppercase;
              // font-weight: 300;
            }
            .menu-parent-box {
              margin: auto;
              display: table;
            }
            .altmenu {
              position: relative;
              z-index: 1000;
            }
          `}
        </style>
      </div>
    )
  }
}
const styles = {
  active: { color: '#fff', fontWeight: 'bold' }
}
