import React from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { isSameOrigin } from 'utils'

export function BrowserLink({
  className,
  style,
  activeStyle,
  href,

  params,
  onClick,
  ...props
}) {
  const router = useRouter()

  function go(e) {
    e.preventDefault()

    if (!isSameOrigin(href)) return (location.href = href)

    Router.push(href).then(() => window.scrollTo(0, 0))
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
        // href={href}
        className={mergedClassNames}
        onClick={onClick || go}
        {...props}
        style={newStyle}
      />
    </Link>
  )
}

export default BrowserLink
