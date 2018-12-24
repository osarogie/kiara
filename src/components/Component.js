import React from 'react'
import { loginLink } from 'helpers/links'

export class Component extends React.Component {
  confirmSession = () => {
    if (!this.props.loggedIn) window.location.href = loginLink()
    return this.props.loggedIn
  }
}
