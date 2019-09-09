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
  +viewerDoesLike: ?boolean,
  +likeCount: ?number,
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
      "name": "viewerDoesLike",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "likeCount",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '571e4c8bc85729af86f36eee79e5f4de';
module.exports = node;
