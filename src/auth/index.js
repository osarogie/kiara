import Base64 from './base-64'
import { apiBaseUrl } from '../tc.config'

export default {
  async login(username, l_password) {
    const credentials = `${username}:${l_password}`
    const basic = 'Basic ' + Base64.encode(credentials)

    return fetch(`${apiBaseUrl}v1/login`, {
      method: 'POST',
      headers: {
        Authorization: basic,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(r => r.json())
  },

  async register({ fullname, username, email, password }) {
    const credentials = `${email}:${password}`
    const basic = 'Basic ' + Base64.encode(credentials)
    return fetch(`${apiBaseUrl}v1/register`, {
      method: 'POST',
      headers: {
        Authorization: basic,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: fullname,
        username: username
      })
    }).then(r => r.json())
  }
}
