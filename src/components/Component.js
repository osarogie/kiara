import React from 'react'
import { Constants } from './../constants'
import { loginLink } from 'helpers/links'

export class Component extends React.Component {
  confirmSession = () => {
    if (!Constants.user) window.location.href = loginLink()
    return !!Constants.user
  }
}
