import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from 'redux/reducers'
const config = {
  key: 'tc',
  storage
}

const reducer = persistReducer(config, rootReducer)

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
})

const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))

// let store = createStore(reducer, {}, enhancer)
// let persistor = persistStore(store)

// export default () => {
//   return { store, persistor }
// }

export function initializeStore(initialState = {}) {
  let store = createStore(reducer, initialState, enhancer)
  store.persistor = persistStore(store)

  return store
}
