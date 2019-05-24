/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DiscussionLike_discussion$ref: FragmentReference;
declare export opaque type DiscussionLike_discussion$fragmentType: DiscussionLike_discussion$ref;
export type DiscussionLike_discussion = {|
  +id: string,
  +_id: string,
  +viewer_does_like: ?boolean,
  +like_count: ?number,
  +$refType: DiscussionLike_discussion$ref,
|};
export type DiscussionLike_discussion$data = DiscussionLike_discussion;
export type DiscussionLike_discussion$key = {
  +$data?: DiscussionLike_discussion$data,
  +$fragmentRefs: DiscussionLike_discussion$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DiscussionLike_discussion",
  "type": "Discussion",
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
      "name": "viewer_does_like",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "like_count",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ed66a8a29c79c7691a1d57c940e63dc7';
module.exports = node;
