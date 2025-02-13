/**
 * @generated SignedSource<<f17c4e4754826a9691b600d3924b7d03>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DiscussionLike_discussion$data = {
  readonly _id: string;
  readonly id: string;
  readonly likeCount: number | null | undefined;
  readonly viewerDoesLike: boolean | null | undefined;
  readonly " $fragmentType": "DiscussionLike_discussion";
};
export type DiscussionLike_discussion$key = {
  readonly " $data"?: DiscussionLike_discussion$data;
  readonly " $fragmentSpreads": FragmentRefs<"DiscussionLike_discussion">;
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

(node as any).hash = "571e4c8bc85729af86f36eee79e5f4de";

export default node;
