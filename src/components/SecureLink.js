import React from 'react'
import BrowserLink from './BrowserLink'
import routes from '../../routes'
import { withViewer } from '../lib/withViewer'

export function SecureLink({
  viewer,
  refetchViewer,
  hasViewer,
  requireViewer,
  message,
  ...props
}) {
  function onClick(e) {
    e.preventDefault()
    if (hasViewer)
      routes.Router.pushRoute(props.href).then(() => window.scrollTo(0, 0))
    else requireViewer(message || 'Login')
  }

  return <BrowserLink {...props} onClick={onClick} />
}

SecureLink = withViewer(SecureLink)
