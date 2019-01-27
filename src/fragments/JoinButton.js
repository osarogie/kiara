import React from 'react'
import { View, Text, Alert } from 'react-native'
import Icon from 'components/vector-icons/Ionicons'
import excerptStyles from 'styles/excerptStyles'
import ActivityButton from 'components/ActivityButton'
import { connect } from 'react-redux'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { navHelper } from 'helpers/getNavigation'
import { withNavigation } from 'react-navigation'
import { Component } from 'components/Component'
import { confirmSession } from 'helpers/confirmSession'

const mapStateToProps = state => ({
  night_mode: state.night_mode
})

function joinMutation({ _id }, environment, config) {
  const variables = {
    input: {
      id: _id
    }
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation JoinButtonJoinGroupMutation($input: JoinGroupInput!) {
        joinGroup(input: $input) {
          group {
            ...JoinButton_group
          }
        }
      }
    `,
    ...config
  })
}

function leaveMutation({ _id }, environment, config) {
  const variables = {
    input: {
      id: _id
    }
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation JoinButtonLeaveGroupMutation($input: LeaveGroupInput!) {
        leaveGroup(input: $input) {
          group {
            ...JoinButton_group
          }
        }
      }
    `,
    ...config
  })
}

class JoinButton extends Component {
  state = { isLoading: false }
  toggleJoin = () => {
    const { group } = this.props
    const { environment } = this.props.relay
    const { viewer_is_a_member, is_private } = group

    if (!viewer_is_a_member && is_private) {
      Alert.alert(
        'Cannot join',
        'You cannot join this unless you are added by the admin'
      )
      return
    }

    // if (!confirmSession()) return
    this.setState({ isLoading: true })

    viewer_is_a_member
      ? leaveMutation(group, environment, {
          onCompleted: _ => {
            this.setState({ isLoading: false })
          }
        })
      : joinMutation(group, environment, {
          onCompleted: _ => {
            this.setState({ isLoading: false })
          }
        })
  }
  render() {
    const { viewer_is_a_member, is_private } = this.props.group
    const color = viewer_is_a_member ? '#fff' : '#05f'
    const backgroundColor = viewer_is_a_member ? '#05f' : '#0000'
    const title = viewer_is_a_member
      ? 'Joined'
      : is_private
      ? 'Private Culture'
      : 'Join'
    return (
      <ActivityButton
        onPress={this.toggleJoin}
        disabled={is_private}
        indicatorColor={color}
        title={title}
        {...this.props}
        textStyle={{ color, ...this.props.textStyle }}
        buttonStyle={{
          backgroundColor,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#05f',
          ...this.props.buttonStyle
        }}
        isLoading={this.state.isLoading}
      />
    )
  }
}

export default createFragmentContainer(
  withNavigation(connect(mapStateToProps)(JoinButton)),
  graphql`
    fragment JoinButton_group on Group {
      _id
      viewer_is_a_member
      is_private
    }
  `
)
