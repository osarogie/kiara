import { IUser } from '../contracts/IUser'
import { createLinkTag } from './createLinkTag'

export const UserLink = createLinkTag<IUser>('/[id]', obj => `/${obj.username}`)
