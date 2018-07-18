import React from 'react'
const navigation = {
  navigate() {},
  gaBack() {},
  state: {}
}

export function withNavigation(Component) {
  return class extends React.Component {
    static displayName = `withNaigation(${Component.displayName})`

    render() {
      return <Component navigation={navigation} {...this.props} />
    }
  }
}

export const NavigationActions = {
  reset() {}
}
