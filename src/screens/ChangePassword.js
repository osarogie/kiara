import { BrowserLink } from './../components/BrowserLink'
import { PageContainer } from 'components/_partials/pageContainer'

import withData from 'lib/withData'
import message from 'antd/lib/message'
import React from 'react'
import { View, ScrollView } from 'react-native'
import ActivityButton from 'components/ActivityButton'
import styles from 'styles'
import TextInput from 'components/TextInput'

import { createFragmentContainer, graphql, commitMutation } from 'react-relay'
import { AntForm } from 'components/AntForm'

const query = graphql`
  query ChangePasswordQuery {
    ...Viewer_viewer
    viewer {
      ...ChangePassword_viewer
    }
  }
`

function UpdatePassword(input, environment, config) {
  const variables = {
    input: input
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation ChangePasswordScreenMutation($input: ChangePasswordInput!) {
        changePassword(input: $input) {
          success
        }
      }
    `,
    ...config
  })
}
class ChangePassword extends React.Component {
  state = {
    current_password: null,
    new_password: null,
    new_password_confirmation: null
  }
  inputProps = {
    style: {
      flex: 1,
      width: '100%',
      // height: 50,
      marginTop: 15,
      // opacity: 0.9,
      borderRadius: 0,
      marginBottom: 20,
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderColor: '#888'
    },
    inputProps: {
      placeholderTextColor: '#888'
    },
    inputStyle: {}
  }

  buttonProps = {
    // buttonStyle: [styles.button, { marginTop: 20 }],
    buttonStyle: {
      backgroundColor: 'initial',
      marginTop: 20,
      width: 120
    },
    loadingBackground: '#b2b2b2',
    textStyle: {
      textAlign: 'center',
      color: '#fff'
      // fontSize: 16
    }
  }
  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    // console.log(props)
  }

  save() {
    const {
      current_password,
      new_password,
      new_password_confirmation
    } = this.state

    if (current_password && new_password && new_password_confirmation) {
      this.setState({ isSaving: true })
      UpdatePassword(
        { current_password, new_password, new_password_confirmation },
        this.props.relay.environment,
        {
          onCompleted: ({ changePassword, ...props }) => {
            this.setState({ isSaving: false })
            // console.log(props)
            if (changePassword && changePassword.success) {
              message.success('Password updated successfully')
            } else {
              message.error('Password update failed')
            }
          },
          onError: _ => {
            this.setState({ isSaving: false })
            message.error('Password update failed')
          }
        }
      )
    } else {
      message.error('Fill all boxes')
    }
  }

  render() {
    const backgroundColor = '#fff'

    // const fields = {
    //   current_password: {
    //     type: 'text',
    //     label: 'Current Password',
    //     rules: [
    //       {
    //         required: true,
    //         message: 'Please input your current password'
    //       }
    //     ]
    //   },
    //   new_password: {
    //     type: 'text',
    //     label: 'New Password',
    //     rules: [
    //       {
    //         required: true,
    //         message: 'Please input your New Password'
    //       }
    //     ]
    //   },
    //   new_password_confirmation: {
    //     type: 'text',
    //     label: 'Confirm New Password',
    //     rules: [
    //       {
    //         required: true,
    //         message: 'Password confirmation is required'
    //       }
    //     ]
    //   }
    // }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, padding: 40, alignItems: 'center' }}>
          <TextInput
            {...this.inputProps}
            secureTextEntry={true}
            placeholder="Your Current Password"
            onChangeText={current_password =>
              this.setState({ current_password })
            }
            value={this.state.current_password}
            onSubmitEditing={() => this._new_password_confirmation.focus()}
          />
          <TextInput
            {...this.inputProps}
            secureTextEntry={true}
            placeholder="New Password"
            ref={component => (this._new_password_confirmation = component)}
            onChangeText={new_password_confirmation =>
              this.setState({ new_password_confirmation })
            }
            value={this.state.new_password_confirmation}
            onSubmitEditing={() => this._new_password.focus()}
          />
          <TextInput
            {...this.inputProps}
            secureTextEntry={true}
            placeholder="Confirm New Password"
            ref={component => (this._new_password = component)}
            onChangeText={new_password => this.setState({ new_password })}
            value={this.state.new_password}
            onSubmitEditing={this.save}
          />
          <ActivityButton
            buttonClassName="button"
            {...this.buttonProps}
            title="Save"
            isLoading={this.state.isSaving}
            onPress={this.save}
          />
          {/* 
          <AntForm
            fields={fields}
            style={{ paddingVertical: 40 }}
            onSubmit={this.save}
            submitText="Save"
          /> */}
        </View>
      </View>
    )
  }
}

const ChangePasswordFragmentContainer = createFragmentContainer(
  ChangePassword,
  {
    viewer: graphql`
      fragment ChangePassword_viewer on User {
        id
        _id
      }
    `
  }
)

export default class ChangePasswordScreen extends React.Component {
  render() {
    return (
      <PageContainer title="Password Setting - TheCommunity">
        <div className="mt20 center">
          <BrowserLink href="/settings/profile">
            <span className="mr20 s__content__main80">Profile Settings</span>
          </BrowserLink>
          <span className="bdb">Password</span>
        </div>
        <ChangePasswordFragmentContainer viewer={this.props.viewer} />
      </PageContainer>
    )
  }
}

ChangePasswordScreen = withData(ChangePasswordScreen, {
  query,
  expect: 'viewer'
})
