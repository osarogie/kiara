/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type JoinButton_group$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Group_group$ref: FragmentReference;
declare export opaque type Group_group$fragmentType: Group_group$ref;
export type Group_group = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +permalink: ?string,
  +body: ?string,
  +tagline: ?string,
  +viewerIsAMember: ?boolean,
  +viewerIsOwner: ?boolean,
  +headerImage: ?{|
    +name: ?string,
    +height: ?number,
    +width: ?number,
    +url: ?string,
  |},
  +user: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +username: ?string,
    +profilePictureName: ?string,
  |},
  +createdAt: ?number,
  +updatedAt: ?number,
  +$fragmentRefs: JoinButton_group$ref,
  +$refType: Group_group$ref,
|};
export type Group_group$data = Group_group;
export type Group_group$key = {
  +$data?: Group_group$data,
  +$fragmentRefs: Group_group$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
      "name": "tagline",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerIsAMember",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerIsOwner",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "headerImage",
      "storageKey": null,
      "args": null,
      "concreteType": "Photo",
      "plural": false,
      "selections": [
        (v2/*: any*/),
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
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
          "name": "profilePictureName",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "updatedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "JoinButton_group",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '321801e549d523ad5402779252db3af4';

module.exports = node;
