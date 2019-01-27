import { PageContainer } from 'components/_partials/pageContainer'
// @flow

import React from 'react'

import ChangePassword from 'renderers/ChangePassword'
import getNavigation from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'

export default class ChangePasswordScreen extends React.Component {
  render() {
    return (
      <PageContainer title="Password Setting - TheCommunity">
        <ChangePassword {...getNavigation(this.props.navigation)} />
      </PageContainer>
    )
  }
}

ChangePasswordScreen = withNavigation(ChangePasswordScreen)
