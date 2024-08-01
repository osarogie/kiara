import Icon from 'react-native-vector-icons/Ionicons'
// import { GoogleLogin } from '../../auth/google'
import { View } from 'react-native'
import { secureBaseUrl } from '../../../tc.config'

const loc = ''
const googleAuthLink = (next = loc) =>
  `${secureBaseUrl}/users/auth/google_oauth2${next ? `?next=${next}` : ''}`

const facebookAuthLink = (next = loc) =>
  `${secureBaseUrl}/users/auth/facebook${next ? `?next=${next}` : ''}`

const emailAuthLink = (next = loc) =>
  `${secureBaseUrl}/enter${next ? `?next=${next}` : ''}`

function SocialLoginButton({ icon, label, href, svgIcon = undefined }) {
  return (
    <a href={href} className="signin-button s__main__bg bd elevated">
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 35,
          marginVertical: 5,
          justifyContent: 'center'
        }}
      >
        {svgIcon ? (
          <View style={{ marginEnd: 10, marginVertical: 5 }}>{icon}</View>
        ) : (
          <Icon
            name={icon}
            size={24}
            style={{ marginEnd: 10, marginVertical: 5 }}
          />
        )}
        <span className="s__content__main">{label}</span>
      </View>
    </a>
  )
}

export function AuthModal({ message = 'Login' }) {
  return (
    <div id="login_area" className="section register">
      <div className="banner">
        {/* <img className="logo" src="/images/logo3.png" alt="Logo3" /> */}
        <h2 className="logo_name s__content__main text-2xl">{message}</h2>
        <div className="logo_name s__content__main subtitle">
          Here everybody is somebody
        </div>
      </div>
      <SocialLoginButton
        href={emailAuthLink()}
        icon="logo-google"
        label="Continue with Google"
      />
      <SocialLoginButton
        href={emailAuthLink()}
        label="Continue with Facebook"
        icon="logo-facebook"
      />
      <SocialLoginButton
        href={emailAuthLink()}
        label="Or use your email"
        icon="md-mail"
      />
      <img
        className="logo"
        src="/images/logo3.png"
        alt="Logo3"
        style={{
          display: 'table',
          margin: 'auto',
          height: 31
        }}
      />
    </div>
  )
}
