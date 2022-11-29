/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Viewer_viewer = {
    readonly viewer: {
        readonly name: string | null;
        readonly username: string | null;
        readonly profilePicture: string | null;
        readonly profilePictureName: string | null;
        readonly _id: string;
        readonly id: string;
    } | null;
    readonly " $refType": "Viewer_viewer";
};
export type Viewer_viewer$data = Viewer_viewer;
export type Viewer_viewer$key = {
    readonly " $data"?: Viewer_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"Viewer_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Viewer_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
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
          "name": "username",
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
          "args": null,
          "kind": "ScalarField",
          "name": "_id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '59891cd83ff2bf11afba56a80d1ce2fb';
export default node;
