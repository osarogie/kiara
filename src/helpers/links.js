export const userLink = user => `/${user.username}`
export const commentsLink = d =>
  `/${d.user.username}/${d._id}/${d.permalink}/comments`
export const stroyLink = d => `/${d.user.username}/${d._id}/${d.permalink}`
export const groupLink = g => `/c/${g.permalink}`
