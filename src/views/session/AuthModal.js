import {
  googleAuthLink,
  facebookAuthLink,
  emailAuthLink
} from './../../helpers/links'
import './socialsignin.scss'
import Feather from 'react-native-vector-icons/Feather'
// import { GoogleLogin } from '../../auth/google'
import { useCallback } from 'react'
import { View } from 'react-native'

function GoogleButton({ href }) {
  return (
    <a href={href} className="signin-button s__main__bg bd elevated">
      <span className="signin-button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#555"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.8,10h-2.6l0,0H12v4h5.7c-0.8,2.3-3,4-5.7,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.2,0.7,4.2,1.8l2.8-2.8C17.3,3.1,14.8,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,11.3,21.9,10.6,21.8,10z" />
        </svg>
      </span>
      <span className="signin-button__text s__content__main">
        Continue with Google
      </span>
    </a>
  )
}

function SocialLoginButton({ icon, label, href, svgIcon }) {
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
          <Feather
            name={icon}
            size={24}
            color="#555"
            style={{ marginEnd: 10, marginVertical: 5 }}
          />
        )}
        <span className="s__content__main">{label}</span>
      </View>
    </a>
  )
}

export function AuthModal({ message = 'Login' }) {
  const responseGoogle = useCallback(
    response => {
      console.log(response)
    },
    [console]
  )

  const googleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#555"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.8,10h-2.6l0,0H12v4h5.7c-0.8,2.3-3,4-5.7,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.7,0,3.2,0.7,4.2,1.8l2.8-2.8C17.3,3.1,14.8,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,11.3,21.9,10.6,21.8,10z" />
    </svg>
  )

  return (
    <div id="login_area" className="section register">
      <div className="banner">
        {/* <img className="logo" src="/images/logo3.png" alt="Logo3" /> */}
        <h2 className="logo_name s__content__main">{message}</h2>
        <div className="logo_name s__content__main subtitle">
          Here everybody is somebody
        </div>
      </div>
      <SocialLoginButton
        href={googleAuthLink()}
        svgIcon
        icon={googleIcon}
        label="Continue with Google"
      />
      {/* <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        // render={GoogleButton}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
      <SocialLoginButton
        href={facebookAuthLink()}
        label="Continue with Facebook"
        icon="facebook"
      />
      <SocialLoginButton
        href={emailAuthLink()}
        label="Or use your email"
        icon="mail"
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
