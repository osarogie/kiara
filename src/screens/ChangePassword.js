import { BrowserLink } from './../components/BrowserLink'
import { PageContainer } from 'components/_partials/pageContainer'

import withData from 'lib/withData'
import { useRelay } from 'hooks/useRelay'
import React from 'react'
import { View } from 'react-native'

import { createFragmentContainer, graphql, commitMutation } from 'react-relay'
import { AntForm } from 'components/AntForm'
import { notification } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'

const query = graphql`
  query ChangePasswordQuery {
    ...Viewer_viewer
    viewer {
      ...ChangePassword_viewer
    }
  }
`

function updatePassword(input, environment, config) {
  const variables = {
    input: input
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation ChangePasswordScreenMutation($input: ChangePasswordInput!) {
        changePassword(input: $input) {
          success
          errors {
            message
          }
        }
      }
    `,
    ...config
  })
}

const fields = {
  currentPassword: {
    type: 'text',
    name: 'currentPassword',
    secureEntry: true,
    label: 'Current Password',
    rules: [
      {
        required: true,
        message: 'Please input your current password'
      }
    ]
  },
  newPassword: {
    type: 'text',
    name: 'newPassword',
    secureEntry: true,
    label: 'New Password',
    rules: [
      {
        required: true,
        message: 'Please input your New Password'
      }
    ]
  },
  newPasswordConfirmation: {
    type: 'text',
    name: 'newPasswordConfirmation',
    secureEntry: true,
    label: 'Confirm New Password',
    rules: [
      {
        required: true,
        message: 'Password confirmation is required'
      }
    ]
  }
}

function ChangePassword() {
  const [saving, setSaving] = useState(false)
  const { environment } = useRelay()

  const save = useCallback(
    ({ currentPassword, newPassword, newPasswordConfirmation }) => {
      if (newPassword === newPasswordConfirmation) {
        setSaving(true)
        updatePassword(
          { currentPassword, newPassword, newPasswordConfirmation },
          environment,
          {
            onCompleted: ({ changePassword }) => {
              setSaving(false)
              if (changePassword?.errors?.length) {
                notification.error({
                  message: 'Oops',
                  description: (
                    <div>
                      {changePassword.errors.map(({ message }, i) => (
                        <div key={i}>{message}</div>
                      ))}
                    </div>
                  )
                })
              } else if (changePassword?.success) {
                notification.success({
                  message: 'Successful',
                  description: 'Password updated successfully'
                })
              } else {
                notification.error({
                  message: 'Oops',
                  description: 'Password update failed'
                })
              }
            },
            onError: error => {
              console.error(error)
              setSaving(false)
              notification.error({
                message: 'Oops',
                description: 'Password update failed'
              })
            }
          }
        )
      } else {
        notification.error({
          message: 'Oops',
          description: 'Password and password confirmation do not match'
        })
      }
    },
    [environment]
  )

  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', minWidth: 350 }}>
      <AntForm
        style={{ width: '100%' }}
        fields={fields}
        onSubmit={save}
        loading={saving}
        submitText="Save"
      />
    </View>
  )
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
  forceLogin: true
})
