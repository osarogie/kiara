import { commitMutation } from 'react-relay'
import { PageContainer } from 'components/_partials/pageContainer'
import { useState } from 'react'
import { registerLink } from 'helpers/links'
import createEnvironment from 'relay-environment'
import ProgressBar from 'helpers/ProgressBar'
import { resetFormMutation } from '../../src/relay/mutation/resetFormMutation'
import RelayProvider from '../../src/lib/RelayProvider'
import { ViewerProvider } from '../../src/lib/withViewer'

export default function RecoverPasswordRequest() {
  const [identifier, setIdentifier] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [message, setMessage] = useState('')
  const [environment] = useState(() => createEnvironment())

  function handleSubmit(e) {
    e.preventDefault()
    ProgressBar.start()
    commitMutation(environment, {
      mutation: resetFormMutation,
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
          setMessage(_message)
          // message.info(_message)
        } else {
          message.error(
            'An error occured while resetting your password. Please try again'
          )
        }
      }
    })
  }

  function handleChange(e) {
    setIdentifier(e.target.value)
  }

  return (
    <RelayProvider environment={environment}>
      <ViewerProvider viewer={{}}>
        <PageContainer title="Recover Your Password - TheCommunity">
          <div
            id="login_area"
            className="section d-embed register container text-center center"
            style={{ padding: 20, marginTop: 40, maxWidth: 400, color: '#000' }}
          >
            {emailSent ? (
              <h3 style={{ color: '#000', fontSize: 30 }}>{message}</h3>
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
      </ViewerProvider>
    </RelayProvider>
  )
}
