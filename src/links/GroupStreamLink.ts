import { IGroup } from '../contracts/IGroup'
import { createLinkTag } from './createLinkTag'

export const GroupStreamLink = createLinkTag<IGroup>(
  '/c/[id]/stream',
  obj => `/c/${obj.permalink}/stream`
)
