import { IPost } from '../contracts/IPost'
import { createLinkTag } from './createLinkTag'

export const PostLink = createLinkTag<IPost>(
  '/[userId]/[discussionId]/[discussionSlug]',
  obj => `/${obj.user.username}/${obj._id}/${obj.permalink}`
)
