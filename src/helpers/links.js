export const userLink = user => `/${user.username}`
export const loginLink = (next = window.location.href) =>
  `//web.thecommunity.ng/${next ? `login?next=${next}` : 'login'}`
export const commentsLink = d =>
  `/${d.user.username}/${d._id}/${d.permalink}/comments`
export const storyLink = d => `/${d.user.username}/${d._id}/${d.permalink}`
export const discussionLink = storyLink
export const groupLink = g => `/c/${g.permalink}`
export const groupNewStoryLink = g => `/c/${g.permalink}/new-story`
export const groupWriteLink = g => `/c/${g.permalink}/new-story`
