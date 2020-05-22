import { IGroup } from '../contracts/IGroup'
import { createLinkTag } from './createLinkTag'

export const EditGroupLink = createLinkTag<IGroup>(
  '/c/[id]/edit',
  obj => `/c/${obj.permalink}/edit`
)
