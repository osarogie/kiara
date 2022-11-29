/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditUser_viewer = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly bio: string | null;
    readonly username: string | null;
    readonly profilePictureName: string | null;
    readonly profilePicture: string | null;
    readonly " $refType": "EditUser_viewer";
};
export type EditUser_viewer$data = EditUser_viewer;
export type EditUser_viewer$key = {
    readonly " $data"?: EditUser_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"EditUser_viewer">;
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
(node as any).hash = 'de3eb86c62c521a88f9b87909846839c';
export default node;
