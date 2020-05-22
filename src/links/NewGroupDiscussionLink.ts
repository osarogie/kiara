import { IGroup } from '../contracts/IGroup'
import { createLinkTag } from './createLinkTag'

export const NewGroupDiscussionLink = createLinkTag<IGroup>(
  '/c/[id]/new-discussion',
  obj => `/c/${obj.permalink}/new-discussion`
)
