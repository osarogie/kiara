/**
 * @generated SignedSource<<e3a2c5dda9e69bafd5f17673c2760f0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowButton_user$data = {
  readonly _id: string;
  readonly followsViewer: boolean | null;
  readonly name: string | null;
  readonly viewerFollows: boolean | null;
  readonly " $fragmentType": "FollowButton_user";
};
export type FollowButton_user$key = {
  readonly " $data"?: FollowButton_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"FollowButton_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FollowButton_user",
  "selections": [
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerFollows",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followsViewer",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f83e729e901059a9b362786d718045a6";

export default node;
