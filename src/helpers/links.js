import { DATA_URL } from 'constants'

const loc = process.browser ? window.location.href : 'https://thecommunnity.ng'

export const userLink = user => `/${user.username}`

export const loginLink = (next = loc) =>
  `${DATA_URL}${next ? `login?next=${next}` : 'login'}`

export const registerLink = (next = loc) =>
  `${DATA_URL}${next ? `register?next=${next}` : 'register'}`

export const logoutLink = (next = loc) =>
  `${DATA_URL}${next ? `logout?next=${next}` : 'logout'}`

export const commentsLink = d =>
  `/${d.user.username}/${d._id}/${d.permalink}#comments`

export const storyLink = d => `/${d.user.username}/${d._id}/${d.permalink}`

export const discussionLink = storyLink

export const groupLink = g => `/c/${g.permalink}`

export const editGroupLink = g => `${DATA_URL}/c/${g.permalink}/edit`

export const groupWriteLink = g => `${DATA_URL}/c/${g.permalink}/new-discussion`

export const groupNewStoryLink = groupWriteLink

export const newStoryLink = () => `${DATA_URL}/new-discussion`

export const editStoryLink = d => `${DATA_URL}/d/${d._id}/edit`

export const newGroup = () => `${DATA_URL}/new-culture`

export const newPoll = () => `/new-poll`

export const settingsLink = () => `${DATA_URL}/settings`

export const editProfileLink = () => `${DATA_URL}/settings/profile`
