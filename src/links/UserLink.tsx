import { IUser } from '../contracts/IUser'
import { createLinkTag } from './createLinkTag'

export const UserLink = createLinkTag<IUser>('/[userId]', obj => `/${obj.username}`)
