/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DiscussionLike_discussion = {
    readonly id: string;
    readonly _id: string;
    readonly viewerDoesLike: boolean | null;
    readonly likeCount: number | null;
    readonly " $refType": "DiscussionLike_discussion";
};
export type DiscussionLike_discussion$data = DiscussionLike_discussion;
export type DiscussionLike_discussion$key = {
    readonly " $data"?: DiscussionLike_discussion$data;
    readonly " $fragmentRefs": FragmentRefs<"DiscussionLike_discussion">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DiscussionLike_discussion",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerDoesLike",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    }
  ],
  "type": "Discussion",
  "abstractKey": null
};
(node as any).hash = '571e4c8bc85729af86f36eee79e5f4de';
export default node;
