/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FollowButton_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
export type User_user = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +bio: ?string,
  +username: ?string,
  +profile_picture: ?string,
  +profile_picture_name: ?string,
  +discussion_count: ?number,
  +follower_count: ?number,
  +following_count: ?number,
  +is_viewer: ?boolean,
  +$fragmentRefs: FollowButton_user$ref,
  +$refType: User_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "User_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profile_picture_name",
      "args": null,
      "storageKey": null
    },
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
      "name": "profile_picture",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 250,
          "type": "Int"
        }
      ],
      "storageKey": "profile_picture(size:250)"
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
      "name": "discussion_count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "follower_count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "following_count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_viewer",
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
(node/*: any*/).hash = '32af904b230d3a55887311052497da39';
module.exports = node;
