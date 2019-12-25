/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FollowButton_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
declare export opaque type User_user$fragmentType: User_user$ref;
export type User_user = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +bio: ?string,
  +username: ?string,
  +profilePicture: ?string,
  +profilePictureName: ?string,
  +discussionCount: ?number,
  +followerCount: ?number,
  +followingCount: ?number,
  +isViewer: ?boolean,
  +$fragmentRefs: FollowButton_user$ref,
  +$refType: User_user$ref,
|};
export type User_user$data = User_user;
export type User_user$key = {
  +$data?: User_user$data,
  +$fragmentRefs: User_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "User_user",
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
      "name": "bio",
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
      "name": "profilePicture",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 250
        }
      ],
      "storageKey": "profilePicture(size:250)"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profilePictureName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "discussionCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "followerCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "followingCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isViewer",
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
(node/*: any*/).hash = 'c19b9eb5f9c0c3c6a9fbad654c0ad032';
module.exports = node;
