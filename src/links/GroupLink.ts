import { IGroup } from '../contracts/IGroup'
import { createLinkTag } from './createLinkTag'

export const GroupLink = createLinkTag<IGroup>(
  '/c/[id]',
  obj => `/c/${obj.permalink}`
)
