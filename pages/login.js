import { AuthModal } from 'views/session/AuthModal'
import { CustomHead } from 'components/_partials/CustomHead'

export default function Login() {
  return (
    <>
      <CustomHead title="Login to TheCommunity" />
      <AuthModal />
    </>
  )
}
