import React from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { ScrollView } from 'react-native'
import Affix from 'antd/lib/affix'

export class AlternateMenu extends React.Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <div className="altmenu">
          <div className="text-center groups">
            <div className="">
              <ScrollView horizontal>
                <nav className="header-menu">
                  <ul>
                    <li className="dropdown link">
                      <BrowserLink activeStyle={styles.active} route="/">
                        Your feed
                      </BrowserLink>
                    </li>

                    {(this.props.list || []).map(l => (
                      <li className="dropdown link" key={l.node.permalink}>
                        <BrowserLink
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
                // color: #fffc;
                // border-right-width: 1px;
                border-style: solid;
                padding: 9px 13px 9px 12px;
                display: block;
                text-transform: uppercase;
                // font-weight: 300;
              }

              .altmenu {
                position: relative;
                z-index: 1000;
                // border-bottom: 1px solid #ddd;
                background-color: #fff;
                box-shadow: 0 1px 0px 0px #00000024;
              }
            `}
          </style>
        </div>
      </Affix>
    )
  }
}
const styles = {
  active: { color: '#fff', fontWeight: 'bold' }
}
