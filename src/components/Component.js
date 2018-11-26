import React from 'react'
import { Router } from '../../routes'

export class Component extends React.Component {
  confirmSession = () => {
    if (!this.props.loggedIn)
      Router.pushRoute(`/login?next=${window.location.href}`)
    return this.props.loggedIn
  }
}
