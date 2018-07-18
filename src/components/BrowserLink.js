import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Link from 'next/link'
import { withRouter } from 'next/router'

import { Router } from '../../routes'

export class BrowserLink extends React.Component {
  onPress = e => {
    if (this.props.route) {
      e.preventDefault()
      // e.stopPropagation()
      Router.pushRoute(this.props.route)
    }
  }
  render() {
    const {
      onPress,
      // className,
      style,
      activeStyle,
      to,
      href,
      router,
      route,
      ...props
    } = this.props

    if (onPress && !to && !href)
      return (
        <TouchableOpacity onPress={this.onPress}>
          <div
            {...props}
            style={[style, router.route === (to || href) && activeStyle]}
          >
            {props.children}
          </div>
        </TouchableOpacity>
      )

    return (
      <Link href={to || href || route} passHref>
        <Text
          accessibilityRole="link"
          // className={className}
          onPress={this.props.route ? this.onPress : null}
          {...props}
          style={[style, router.route === (to || href || route) && activeStyle]}
        >
          {props.children}
        </Text>
      </Link>
    )
  }
}

BrowserLink = withRouter(BrowserLink)

export default BrowserLink
