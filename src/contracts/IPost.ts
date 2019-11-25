import { IRelayObject } from './IRelayObject'
import { IUser } from './IUser'

export interface IPost extends IRelayObject {
  name: string
  permalink: string
  user: IUser
  commentCount
}
