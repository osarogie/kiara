import Icon from 'react-native-vector-icons/Ionicons'
// import { GoogleLogin } from '../../auth/google'
// import { useCallback } from 'react'
import { View } from 'react-native'
import { secureBaseUrl } from '../../../tc.config'

const loc = ''
// const googleAuthLink = (next = loc) =>
// `${secureBaseUrl}/${next ? `login/google?next=${next}` : 'login/google'}`

// const facebookAuthLink = (next = loc) =>
//   `${secureBaseUrl}/${next ? `login/facebook?next=${next}` : 'login/facebook'}`

// const emailAuthLink = (next = loc) =>
//   `${secureBaseUrl}/${next ? `enter?next=${next}` : 'enter'}`

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
  // const responseGoogle = useCallback(
  //   (response) => {
  //     console.log(response)
  //   },
  //   [console]
  // )

  // const googleIcon = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   >
  //     <path d="M21.8,10h-2.6l0,0H12v4h5.7c-0.8,2.3-3,4-5.7,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.2,0.7,4.2,1.8l2.8-2.8C17.3,3.1,14.8,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,11.3,21.9,10.6,21.8,10z" />
  //   </svg>
  // )

  return (
    <div id="login_area" className="section register">
      <div className="banner">
        {/* <img className="logo" src="/images/logo3.png" alt="Logo3" /> */}
        <h2 className="logo_name s__content__main">{message}</h2>
        <div className="logo_name s__content__main subtitle">
          Here everybody is somebody
        </div>
      </div>
      {/* <SocialLoginButton
        href={googleAuthLink()}
        icon="logo-google"
        label="Continue with Google"
      /> */}
      <SocialLoginButton
        href={`${secureBaseUrl}/login`}
        icon="md-mail"
        label="Continue with Login"
      />
      {/* <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        // render={GoogleButton}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
      {/* <SocialLoginButton
        href={facebookAuthLink()}
        label="Continue with Facebook"
        icon="logo-facebook"
      />
      <SocialLoginButton
        href={emailAuthLink()}
        label="Or use your email"
        icon="md-mail"
      /> */}
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
