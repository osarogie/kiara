import React from 'react'
import { BrowserLink } from 'components/BrowserLink'
import { ScrollView } from 'react-native'
export const SubHeader = $ => (
  <div className="fill-bg-base">
    <div className="text-center">
      <div className="menu-parent-box">
        {/* <!-- header-menu --> */}
        <ScrollView horizontal>
          <nav className="header-menu">
            <ul>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/preorder"
                  style={{
                    padding: '9px 13px 9px 12px',
                    borderColor: '#2f292914',
                    borderWidth: 0,
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                    borderLeftWidth: 1
                  }}
                >
                  Pre-Order Meal
                </BrowserLink>
              </li>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/customize"
                  style={styles.link}
                >
                  Customise your Meal
                </BrowserLink>
              </li>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/drinks"
                  style={styles.link}
                >
                  Drinks
                </BrowserLink>
              </li>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/spices"
                  style={styles.link}
                >
                  Spices
                </BrowserLink>
              </li>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/vegan"
                  style={styles.link}
                >
                  Vegan Meals
                </BrowserLink>
              </li>
              <li className="dropdown">
                <BrowserLink
                  activeStyle={styles.active}
                  to="/subscribe"
                  style={styles.link}
                >
                  Subscription Packages
                </BrowserLink>
              </li>
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
)
const styles = {
  link: {
    paddingLeft: 12,
    paddingRight: 13,
    paddingBottom: 9,
    paddingTop: 9,
    borderWidth: 0,
    borderColor: '#2f292914',
    borderRightWidth: 1,
    borderStyle: 'solid'
  },
  active: { backgroundColor: '#00000014' }
}
