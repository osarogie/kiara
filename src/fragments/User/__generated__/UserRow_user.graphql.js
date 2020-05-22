/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FollowButton_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserRow_user$ref: FragmentReference;
declare export opaque type UserRow_user$fragmentType: UserRow_user$ref;
export type UserRow_user = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +username: ?string,
  +bio: ?string,
  +profilePictureName: ?string,
  +$fragmentRefs: FollowButton_user$ref,
  +$refType: UserRow_user$ref,
|};
export type UserRow_user$data = UserRow_user;
export type UserRow_user$key = {
  +$data?: UserRow_user$data,
  +$fragmentRefs: UserRow_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserRow_user",
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
(node/*: any*/).hash = 'b61e99c4cf468fe558ab3731fc0c2618';

module.exports = node;
