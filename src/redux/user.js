import { Constants } from 'constants'
const initialState = {
  user: {},
  token: null,
  loggedIn: false,
  api_key: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      if (action.user) {
        Constants.user = action.user
        Constants.loggedIn = true
        const new_state = {
          user: action.user,
          loggedIn: true
        }
        if (action.api_key) {
          new_state.api_key = action.api_key
        }
        return Object.assign({}, state, new_state)
      } else {
        Constants.user = {}
        Constants.loggedIn = false
        return initialState
      }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

export default user
