/**
 * @generated SignedSource<<9a30b56c1860f2d0adcfeaa04d9e6421>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JoinButton_group$data = {
  readonly _id: string;
  readonly isPrivate: boolean | null | undefined;
  readonly viewerIsAMember: boolean | null | undefined;
  readonly " $fragmentType": "JoinButton_group";
};
export type JoinButton_group$key = {
  readonly " $data"?: JoinButton_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"JoinButton_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JoinButton_group",
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
      "name": "viewerIsAMember",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPrivate",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "122371b07e38843e9b8d2d13daae76ed";

export default node;
