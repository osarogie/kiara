// module.exports = {
//   USER_ID: '@_USER_ID',
//   API_KEY: '@_API_KEY',
//   USER: '@_USER',
//   DARK: '@_DARK'
//   // CABLE_URL: 'ws://localhost:3000/_/cable',
//   // NEW_MESSAGES: 'new-messages',
//   // OLD_MESSAGES: 'old-messages',
// }

export const DATA_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://data.thecommunity.ng/'
