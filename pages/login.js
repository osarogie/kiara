import { BrowserLink } from 'components/BrowserLink'
import React from 'react'
import Authenticator from 'components/Authenticator'

export default class LoginScreen extends React.PureComponent {
  render() {
    console.log(this.props)

    return (
      <div>
        <BrowserLink className="navbar-brand" href="/">
          <img className="logo" src="/static/images/logo3.png" alt="TC" />
        </BrowserLink>
        <div className="center">
          <Authenticator />
        </div>
        <style jsx>
          {`
            .logo {
              height: 50px;
              margin: 20px;
              padding: 6px;
            }
            .navbar-brand {
              margin-left: 0;
            }
          `}
        </style>
      </div>
    )
  }
}
