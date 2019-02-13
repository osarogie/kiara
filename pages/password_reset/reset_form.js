import message from 'antd/lib/message'
import { commitMutation } from 'react-relay'
import { graphql } from 'graphql.js'
import withData from 'lib/withData'
import { PageContainer } from 'components/_partials/pageContainer'
import { useState } from 'react'
import { registerLink } from 'helpers/links'
import createEnvironment from 'relay-environment'
import { resolve } from 'bluebird'
import ProgressBar from 'helpers/ProgressBar'

const mutation = graphql`
  mutation resetFormMutation($input: RequestPasswordResetTokenInput!) {
    requestPasswordResetToken(input: $input) {
      message
    }
  }
`

export default function Reset() {
  const [identifier, setIdentifier] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    ProgressBar.start()
    commitMutation(createEnvironment(), {
      mutation,
      variables: {
        input: {
          identifier
        }
      },
      onError() {
        ProgressBar.done()
      },
      updater(store) {
        const payload = store.getRootField('requestPasswordResetToken')
        const _message = payload.getValue('message')
        ProgressBar.done()
        if (_message) {
          setEmailSent(true)
          message.info(_message)
        } else {
          message.error('An error occured while resetting your password')
        }
      }
    })
  }

  function handleChange(e) {
    setIdentifier(e.target.value)
  }

  return (
    <PageContainer title="Recover Your Password - TheCommunity">
      <div
        id="login_area"
        className="section d-embed register container text-center center"
        style={{ padding: 20, marginTop: 40, maxWidth: 400, color: '#000' }}
      >
        {emailSent ? (
          <h3 style={{ color: '#000' }}>
            A link to reset your password has been sent to your email
          </h3>
        ) : (
          <>
            <h1 style={{ color: '#000' }}>Lost your password?</h1>
            <br />
            <span>We've got you covered. 😎</span>
            <br />
            <span>
              Just type in the email your account i registered with and I'll
              send you a link
            </span>
            <br />
            <form
              onSubmit={handleSubmit}
              className="new_user"
              id="new_user"
              accept-charset="UTF-8"
              method="post"
            >
              <input
                placeholder="Enter your email or username"
                required="required"
                style={{ textAlign: 'center' }}
                onChange={handleChange}
                value={identifier}
                type="text"
                name="user[email]"
                id="user_email"
              />
              <input
                type="submit"
                onSubmit
                name="commit"
                value="Send me a link"
                className="center"
                data-disable-with="Send me a link"
              />
              <span>
                Not yet a member?{' '}
                <a
                  href={registerLink(
                    process.browser ? window.location.host : ''
                  )}
                  className="u"
                >
                  Create a free account
                </a>
              </span>
            </form>
          </>
        )}
      </div>
    </PageContainer>
  )
}

Reset = withData(Reset)
