import { commitMutation } from 'react-relay'
import withData from 'lib/withData'
import { PageContainer } from 'components/_partials/pageContainer'
import createEnvironment from 'relay-environment'
import { loginLink } from 'helpers/links'
import { resetPasswordMutation } from '../../../src/relay/mutation/resetPasswordMutation'
import { resetPasswordQuery } from '../../../src/relay/query/resetPasswordQuery'
import { AntForm } from '../../../src/components/AntForm'
import { useState } from 'react'
import { notification } from 'antd'

const Error = () => (
  <h3 className="center">Invalid token. Perhaps it has already been used</h3>
)

export default function ResetPassword({ checkPasswordResetToken, variables }) {
  const [saving, setSaving] = useState(false)

  async function reset({ password }) {
    setSaving(true)
    return new Promise(resolve =>
      commitMutation(createEnvironment(), {
        mutation: resetPasswordMutation,
        variables: {
          input: {
            token: variables.token,
            password
          }
        },
        onError() {
          setSaving(false)
          resolve(false)
        },
        updater(store) {
          const payload = store.getRootField('resetPassword')
          const success = payload.getValue('success')
          setSaving(false)
          resolve(success)
          if (success) {
            window.location.href = loginLink(
              `${window.location.protocol}//${window.location.host}`
            )
          } else {
            notification.error({
              message: 'Oops',
              description: 'An error occured while resetting your password'
            })
          }
        }
      })
    )
  }

  function renderResetForm() {
    return (
      <div
        style={{
          marginTop: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'table'
        }}
      >
        <AntForm
          loading={saving}
          title="Set a new password"
          submitText="Save"
          onSubmit={reset}
          fields={{
            password: {
              name: 'password',
              type: 'text',
              label: 'New Password',
              icon: 'lock',
              rules: [{ required: true, message: 'Password is required' }],
              secureEntry: true
            }
          }}
        />
      </div>
    )
  }

  return (
    <PageContainer title="Set a new password">
      {checkPasswordResetToken ? renderResetForm() : <Error />}
    </PageContainer>
  )
}

ResetPassword = withData(ResetPassword, { query: resetPasswordQuery })
