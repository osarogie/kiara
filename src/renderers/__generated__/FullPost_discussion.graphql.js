/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DiscussionLike_discussion$ref = any;
type Poll_discussion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FullPost_discussion$ref: FragmentReference;
export type FullPost_discussion = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +body: ?string,
  +created_at: ?number,
  +updated_at: ?number,
  +reads: ?string,
  +excerpt: ?string,
  +comment_count: ?number,
  +feature_photo: ?{|
    +url: ?string,
    +height: ?number,
    +width: ?number,
  |},
  +public_url: ?string,
  +group: ?{|
    +_id: string,
    +id: string,
    +name: ?string,
    +permalink: ?string,
  |},
  +user: ?{|
    +id: string,
    +_id: string,
    +username: ?string,
    +name: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +bio: ?string,
    +public_url: ?string,
  |},
  +parsed_body: ?string,
  +has_poll: ?boolean,
  +$fragmentRefs: DiscussionLike_discussion$ref & Poll_discussion$ref,
  +$refType: FullPost_discussion$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "public_url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FullPost_discussion",
  "type": "Discussion",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "excerpt",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 10,
          "type": "Int"
        }
      ],
      "storageKey": "excerpt(size:10)"
    },
    v0,
    v1,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "created_at",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "updated_at",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "reads",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion",
      "args": null
    },
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "comment_count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "feature_photo",
      "storageKey": null,
      "args": null,
      "concreteType": "Photo",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "height",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "width",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "group",
      "storageKey": null,
      "args": null,
      "concreteType": "Group",
      "plural": false,
      "selections": [
        v2,
        v0,
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "permalink",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "username",
          "args": null,
          "storageKey": null
        },
        v1,
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
          "name": "profile_picture_name",
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
        v3
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "parsed_body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "has_poll",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Poll_discussion",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b286ca971fa5bc712675c6baa173abc';
module.exports = node;
