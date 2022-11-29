/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChangePassword_viewer = {
    readonly id: string;
    readonly _id: string;
    readonly " $refType": "ChangePassword_viewer";
};
export type ChangePassword_viewer$data = ChangePassword_viewer;
export type ChangePassword_viewer$key = {
    readonly " $data"?: ChangePassword_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ChangePassword_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangePassword_viewer",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '00359a6473a75e61668667e343a4173b';
export default node;
