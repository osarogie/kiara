import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Router } from '../../routes'

export class BrowserLink extends React.Component {
  go = e => {
    e.preventDefault()
    Router.pushRoute(this.props.href)
  }

  render() {
    const { className, style, activeStyle, href, router, ...props } = this.props

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
          onClick={this.go}
          {...props}
          style={newStyle}
        />
      </Link>
    )
  }
}

BrowserLink = withRouter(BrowserLink)

export default BrowserLink
