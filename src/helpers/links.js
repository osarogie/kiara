import { secureBaseUrl, baseUrl } from '../../tc.config'

const loc = process.browser ? window.location.href : baseUrl

export const userLink = user => `/${user.username}`

export const loginLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `login?next=${next}` : 'login'}`

export const googleAuthLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `login/google?next=${next}` : 'login/google'}`

export const facebookAuthLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `login/facebook?next=${next}` : 'login/facebook'}`

export const emailAuthLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `enter?next=${next}` : 'enter'}`

export const registerLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `register?next=${next}` : 'register'}`

export const logoutLink = (next = loc) =>
  `${secureBaseUrl}/${next ? `logout?next=${next}` : 'logout'}`

export const commentsLink = d =>
  `/${d.user.username}/${d._id}/${d.permalink}#comments`

export const storyLink = d => `/${d.user.username}/${d._id}/${d.permalink}`

export const discussionLink = storyLink

export const groupLink = ({ permalink }) => `/c/${permalink}`

export const editGroupLink = g => `/c/${g.permalink}/edit`

export const groupWriteLink = g => `/c/${g.permalink}/new-discussion`

export const groupNewStoryLink = groupWriteLink

export const newStoryLink = () => `/new-discussion`

export const editStoryLink = d => `/d/${d._id}/edit`

export const newGroup = () => `/new-blog`

export const newPoll = () => `/new-poll`

export const settingsLink = () => `/settings/profile`

export const editProfileLink = () => `/settings/profile`
