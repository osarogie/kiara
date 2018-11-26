import React from 'react'
import { View, Text, Linking } from 'react-native'
import { connect } from 'react-redux'
import styles from 'styles'
import auth from 'auth'
import { setUser } from 'redux/actions'
import { Form } from 'components/Form'
import Router from 'next/router'
import { BrowserLink } from 'components/BrowserLink'

import message from 'antd/lib/message'
import { devLog } from 'lib/devLog'

class Authenticator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      action: props.action
    }
  }

  openForgotPassword = () => Linking.openURL('/account/recover')

  notify = (...$) => {
    console.log($)
    // ;(Platform.OS === 'web' ? this._addNotification : Alert.alert)(...$)
    message.info($[0] + ' ' + $[1])
  }

  storeSession = response => {
    const { dispatch } = this.props
    dispatch(setUser(response.user, response.api_key))
    Router.router.push('/')
  }

  _notificationSystem = null

  _addNotification = (event, desc, level = 'success') => {
    // event && event.preventDefault()
    this._notificationSystem.addNotification({
      message: `${event} ${desc}`,
      level,
      position: 'br'
    })
  }

  componentDidMount = () => {
    this._notificationSystem = this.refs.notificationSystem
  }

  login = async ({ phone, password }) => {
    if (phone && password) {
      try {
        const response = await auth.login(phone, password)
        if (response && response.success) {
          this.storeSession(response)
        } else {
          this.notify(
            'Sorry',
            (response && response.message) || 'Login failed',
            'error'
          )
        }
      } catch (error) {
        this.notify('Login failed', '', 'error')
        console.warn(error)
      }
    } else {
      this.notify('Please input your phone and password', '', 'error')
    }
  }

  register = async ({ fullname, email, password, username }) => {
    if (email && password && fullname) {
      try {
        const response = await auth.register({
          email,
          password,
          fullname,
          username
        })
        devLog(response)
        if (response && response.success === true) {
          // console.log(response);
          this.storeSession(response)
        } else {
          // this.setState({ isRegisterLoading: false })
          this.notify(
            'Sorry',
            (response && response.message) || 'Sign Up failed'
          )
          if (response.errors)
            this.setState({ registerErrors: response.errors })
        }
      } catch (error) {
        this.notify('Sign Up failed')
        console.warn(error)
      }
    } else {
      this.notify('Please fill all boxes', '', 'error')
    }
  }

  renderLogin() {
    return (
      <Form
        key="login"
        onSubmit={this.login}
        fields={{
          phone: {
            type: 'text',
            label: 'Email Address',
            icon: 'mail',

            required: true
          },

          password: {
            type: 'text',
            label: 'Password',
            icon: 'lock',
            required: true,
            secure: true
          }
        }}
        errors={this.state.loginErrors}
        submitText="Login"
        bottomContent={
          <View style={styles.bottomControl}>
            <Text
              style={[
                styles.altText,
                {
                  color: '#000',
                  // marginTop: 20,
                  opacity: this.state.isLoginLoading ? 0 : 1
                }
              ]}
              onPress={() => this.setState({ action: 'register' })}
            >
              {'Are you new? '}
              <Text style={{ textDecorationLine: 'underline' }}>
                {'Create an account'}
              </Text>
            </Text>

            <BrowserLink
              to="/account/recover"
              onPress={this.openForgotPassword}
            >
              <Text
                style={[
                  this.infoStyles,
                  {
                    color: '#000',
                    marginTop: 10,
                    padding: 10,
                    textDecorationLine: 'underline'
                  }
                ]}
              >
                Forgot password
              </Text>
            </BrowserLink>
          </View>
        }
      />
    )
  }

  renderRegister() {
    return (
      <Form
        key="register"
        onSubmit={this.register}
        fields={{
          fullname: {
            type: 'text',
            icon: 'user',
            label: 'Full Name',
            required: true
          },
          email: {
            type: 'text',
            icon: 'mail',
            label: 'Email Address',
            required: true
            // title: 'minimum is 6 character'
          },
          // email: {
          //   type: 'text',
          //   label: 'Email',
          //   required: true
          // },
          password: {
            type: 'text',
            icon: 'lock',
            label: 'Password',
            required: true,
            secure: true,
            characterRestriction: 32,
            title: 'minimum is 8 characters'
          }
        }}
        errors={this.state.registerErrors}
        submitText="Sign Up"
        bottomContent={
          <View style={styles.bottomControl}>
            <Text
              style={[
                styles.altText,
                {
                  color: '#000',
                  // marginTop: 20,
                  opacity: this.state.isRegisterLoading ? 0 : 1
                }
              ]}
              onPress={() => {
                this.setState({ action: 'login' })
              }}
            >
              {'Existing member? '}
              <Text style={{ textDecorationLine: 'underline' }}>
                {'Sign in'}
              </Text>
            </Text>
          </View>
        }
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.state.action === 'register'
          ? this.renderRegister()
          : this.renderLogin()}
        {/* <NotificationSystem ref="notificationSystem" /> */}
      </React.Fragment>
    )
  }
}

export default connect()(Authenticator)
