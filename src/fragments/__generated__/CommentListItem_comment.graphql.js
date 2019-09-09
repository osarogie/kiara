/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CommentListItem_comment$ref: FragmentReference;
declare export opaque type CommentListItem_comment$fragmentType: CommentListItem_comment$ref;
export type CommentListItem_comment = {|
  +id: string,
  +_id: string,
  +body: ?string,
  +createdAt: ?number,
  +discussionId: string,
  +excerpt: ?string,
  +discussion: ?{|
    +id: string,
    +_id: string,
  |},
  +user: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +username: ?string,
    +profilePicture: ?string,
    +profilePictureName: ?string,
  |},
  +$refType: CommentListItem_comment$ref,
|};
export type CommentListItem_comment$data = CommentListItem_comment;
export type CommentListItem_comment$key = {
  +$data?: CommentListItem_comment$data,
  +$fragmentRefs: CommentListItem_comment$ref,
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
};
return {
  "kind": "Fragment",
  "name": "CommentListItem_comment",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "discussionId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "excerpt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "discussion",
      "storageKey": null,
      "args": null,
      "concreteType": "Discussion",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
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
          "name": "profilePicture",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5fb8b24735dad1df42cad978ec9cfeb';
module.exports = node;
