import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Router } from '../../routes'
import { isBlog, isSameOrigin } from 'utils'
import NextRouter from 'next/router'

export function BrowserLink({
  className,
  style,
  activeStyle,
  href,
  router,
  params,
  onClick,
  ...props
}) {
  function go(e) {
    e.preventDefault()

    if (isBlog()) {
      if (href === '/' || href === location.origin)
        return NextRouter.push('/blog', '/').then(() => window.scrollTo(0, 0))
    }
    if (!isSameOrigin(href)) return (location.href = href)

    Router.pushRoute(href).then(() => window.scrollTo(0, 0))
  }

  const isCurrent = router.asPath === href
  let mergedClassNames = ''

  if (className) mergedClassNames = `${className}`
  if (isCurrent) mergedClassNames = `current ${mergedClassNames}`
  mergedClassNames = mergedClassNames.trimRight()

  let newStyle = { ...style }
  if (isCurrent) newStyle = { ...newStyle, ...activeStyle }

  return (
    <Link href={href} passHref>
      <a
        className={mergedClassNames}
        onClick={onClick || go}
        {...props}
        style={newStyle}
      />
    </Link>
  )
}

BrowserLink = withRouter(BrowserLink)

export default BrowserLink
