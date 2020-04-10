import { IGroup } from '../contracts/IGroup'
import { createLinkTag } from './createLinkTag'

export const GroupLink = createLinkTag<IGroup>(
  '/c/[permalink]',
  obj => `/c/${obj.permalink}`
)
