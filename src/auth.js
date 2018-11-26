import Base64 from './base-64'
import { DATA_URL } from 'constants'
import { devLog } from 'lib/devLog'

const apiBaseUrl = DATA_URL
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
    }).then(r => devLog(r.json()))
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
    }).then(r => devLog(r.json()))
  }
}
