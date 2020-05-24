import { IPost } from '../contracts/IPost'
import { createLinkTag } from './createLinkTag'

export const EditPostLink = createLinkTag<IPost>(
  '/d/[id]/edit',
  obj => `/d/${obj._id}/edit`
)
