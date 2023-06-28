/**
 * @generated SignedSource<<06f0b50bc7a19a09002dc26f027ccfc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditUser_viewer$data = {
  readonly _id: string;
  readonly bio: string | null;
  readonly id: string;
  readonly name: string | null;
  readonly profilePicture: string | null;
  readonly profilePictureName: string | null;
  readonly username: string | null;
  readonly " $fragmentType": "EditUser_viewer";
};
export type EditUser_viewer$key = {
  readonly " $data"?: EditUser_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditUser_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditUser_viewer",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profilePictureName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 50
        }
      ],
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": "profilePicture(size:50)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "de3eb86c62c521a88f9b87909846839c";

export default node;
