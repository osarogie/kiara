import { persistCombineReducers } from 'redux-persist'

import user from './user'

// import storage from 'redux-persist/lib/storage' // or whatever storage you are using

// const config = {
//   key: 'tc',
//   storage
// }

// export default persistCombineReducers(config, {
//   user
// })

export default user
