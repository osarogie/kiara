import { IRelayObject } from './IRelayObject'
import { IUser } from './IUser'

export interface IGroup extends IRelayObject {
  name: string
  permalink: string
  user: IUser
}
