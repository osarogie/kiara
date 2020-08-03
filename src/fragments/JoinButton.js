import React from 'react'
import { Alert } from 'react-native'
import ActivityButton from 'components/ActivityButton'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { withViewer } from 'lib/withViewer'

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

class JoinButton extends React.Component {
  state = { isLoading: false }
  toggleJoin = () => {
    const { group, requireViewer } = this.props
    if (!requireViewer('Login to join this blog')) return

    const { environment } = this.props.relay
    const { viewerIsAMember, isPrivate } = group

    if (!viewerIsAMember && isPrivate) {
      Alert.alert(
        'Cannot join',
        'You cannot join this unless you are added by the admin'
      )
      return
    }

    this.setState({ isLoading: true })

    viewerIsAMember
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
    const { viewerIsAMember, isPrivate } = this.props.group
    const color = viewerIsAMember ? '#fff' : '#05f'
    const backgroundColor = viewerIsAMember ? '#05f' : '#0000'
    const title = viewerIsAMember
      ? 'Joined'
      : isPrivate
      ? 'Private Blog'
      : 'Join'
    return (
      <ActivityButton
        onPress={this.toggleJoin}
        disabled={isPrivate}
        indicatorColor={color}
        title={title}
        {...this.props}
        textStyle={{ color, ...this.props.textStyle }}
        buttonStyle={{
          backgroundColor,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: '#05f',
          ...this.props.buttonStyle
        }}
        isLoading={this.state.isLoading}
      />
    )
  }
}

export default createFragmentContainer(withViewer(JoinButton), {
  group: graphql`
    fragment JoinButton_group on Group {
      _id
      viewerIsAMember
      isPrivate
    }
  `
})
