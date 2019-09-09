/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FollowButton_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserListItem_user$ref: FragmentReference;
declare export opaque type UserListItem_user$fragmentType: UserListItem_user$ref;
export type UserListItem_user = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +username: ?string,
  +bio: ?string,
  +profilePictureName: ?string,
  +$fragmentRefs: FollowButton_user$ref,
  +$refType: UserListItem_user$ref,
|};
export type UserListItem_user$data = UserListItem_user;
export type UserListItem_user$key = {
  +$data?: UserListItem_user$data,
  +$fragmentRefs: UserListItem_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserListItem_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "username",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bio",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profilePictureName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FollowButton_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '64025500ba422db05f85924d3c0ba8b4';
module.exports = node;
