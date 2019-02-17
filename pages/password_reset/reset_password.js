import message from 'antd/lib/message'
import { commitMutation } from 'react-relay'
import { Form } from 'components/Form'
import { graphql } from 'react-relay'
import withData from 'lib/withData'
import { PageContainer } from 'components/_partials/pageContainer'
import createEnvironment from 'relay-environment'
import { loginLink } from 'helpers/links'

const query = graphql`
  query resetPasswordQuery($token: String!) {
    ...Viewer_viewer
    checkPasswordResetToken(token: $token) {
      id
    }
  }
`

const mutation = graphql`
  mutation resetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
    }
  }
`

const Error = () => (
  <h3 className="center">Invalid token. Perhaps it has already been used</h3>
)

export default function Reset({ checkPasswordResetToken, variables }) {
  async function reset({ password }) {
    return new Promise(resolve =>
      commitMutation(createEnvironment(), {
        mutation,
        variables: {
          input: {
            token: variables.token,
            password
          }
        },
        onError() {
          resolve(false)
        },
        updater(store) {
          const payload = store.getRootField('resetPassword')
          const success = payload.getValue('success')
          resolve(success)
          if (success) {
            window.location.href = loginLink(window.location.host)
          } else {
            message.error('An error occured while resetting your password')
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
        <Form
          submitText="Change Password"
          onSubmit={reset}
          fields={{
            password: {
              type: 'text',
              label: 'New Password',
              icon: 'lock',
              required: true,
              secure: true
            }
          }}
        />
      </div>
    )
  }

  return (
    <PageContainer>
      {checkPasswordResetToken ? renderResetForm() : <Error />}
    </PageContainer>
  )
}

Reset = withData(Reset, { query })
