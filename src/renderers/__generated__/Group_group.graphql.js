/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type JoinButton_group$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Group_group$ref: FragmentReference;
export type Group_group = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +permalink: ?string,
  +body: ?string,
  +viewer_is_a_member: ?boolean,
  +viewer_is_owner: ?boolean,
  +header_image: ?{|
    +name: ?string,
    +height: ?number,
    +width: ?number,
  |},
  +user: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +username: ?string,
    +profile_picture_name: ?string,
  |},
  +$fragmentRefs: JoinButton_group$ref,
  +$refType: Group_group$ref,
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
  "name": "_id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Group_group",
  "type": "Group",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    v1,
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "permalink",
      "args": null,
      "storageKey": null
    },
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
      "name": "viewer_is_a_member",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewer_is_owner",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "JoinButton_group",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "header_image",
      "storageKey": null,
      "args": null,
      "concreteType": "Photo",
      "plural": false,
      "selections": [
        v2,
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
        v1,
        v2,
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
          "name": "profile_picture_name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '71f32400a91734b7c6d1ac3e9dc19b71';
module.exports = node;
