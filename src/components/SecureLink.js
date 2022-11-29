import React, { useCallback } from 'react'
import BrowserLink from './BrowserLink'
import Router from 'next/router'
import { useViewer, withViewer } from '../lib/withViewer'

export function SecureLink({ message, ...props }) {
  const { viewer, refetchViewer, hasViewer, requireViewer } = useViewer()
  const onClick = useCallback((e) => {
    e.preventDefault()
    if (hasViewer) Router.push(props.href).then(() => window.scrollTo(0, 0))
    else requireViewer(message || 'Login')
  }, [])

  return <BrowserLink {...props} onClick={onClick} />
}
