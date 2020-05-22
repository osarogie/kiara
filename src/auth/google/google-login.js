import React, { useState } from 'react'
import useGoogleLogin from './use-google-login'
import ButtonContent from './button-content'
import Icon from './icon'

export const GoogleLogin = ({
  onSuccess,
  onAutoLoadFinished,
  onRequest = () => {},
  onFailure,
  tag = 'button',
  type = 'button',
  className,
  disabledStyle = {
    opacity: 0.6
  },
  buttonText = 'Sign in with Google',
  children,
  render,
  theme = 'light',
  icon = true,
  disabled: disabledProp,
  clientId,
  cookiePolicy = 'single_host_origin',
  loginHint,
  hostedDomain,
  autoLoad,
  isSignedIn,
  fetchBasicProfile = true,
  redirectUri,
  discoveryDocs,
  uxMode = 'popup',
  scope = 'profile email',
  accessType = 'online',
  responseType,
  jsSrc,
  prompt = ''
}) => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    onAutoLoadFinished,
    onRequest,
    onFailure,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    autoLoad,
    isSignedIn,
    fetchBasicProfile,
    redirectUri,
    discoveryDocs,
    uxMode,
    scope,
    accessType,
    responseType,
    jsSrc,
    prompt
  })
  const disabled = disabledProp || !loaded

  if (render) {
    return render({ onClick: signIn, disabled })
  }

  const initialStyle = {
    backgroundColor: theme === 'dark' ? 'rgb(66, 133, 244)' : '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, .54)',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)',
    padding: 0,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif'
  }

  const hoveredStyle = {
    cursor: 'pointer',
    opacity: 0.9
  }

  const activeStyle = {
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#3367D6' : '#eee',
    color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, .54)',
    opacity: 1
  }

  const defaultStyle = (() => {
    if (disabled) {
      return Object.assign({}, initialStyle, disabledStyle)
    }

    if (active) {
      if (theme === 'dark') {
        return Object.assign({}, initialStyle, activeStyle)
      }

      return Object.assign({}, initialStyle, activeStyle)
    }

    if (hovered) {
      return Object.assign({}, initialStyle, hoveredStyle)
    }

    return initialStyle
  })()
  const googleLoginButton = React.createElement(
    tag,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false)
        setActive(false)
      },
      onMouseDown: () => setActive(true),
      onMouseUp: () => setActive(false),
      onClick: signIn,
      style: defaultStyle,
      type,
      disabled,
      className
    },
    [
      icon && <Icon key={1} active={active} />,
      <ButtonContent icon={icon} key={2}>
        {children || buttonText}
      </ButtonContent>
    ]
  )

  return googleLoginButton
}
