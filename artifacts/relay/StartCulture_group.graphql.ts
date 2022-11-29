/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StartCulture_group = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly body: string | null;
    readonly tagline: string | null;
    readonly headerImage: {
        readonly url: string | null;
    } | null;
    readonly isPrivate: boolean | null;
    readonly " $refType": "StartCulture_group";
};
export type StartCulture_group$data = StartCulture_group;
export type StartCulture_group$key = {
    readonly " $data"?: StartCulture_group$data;
    readonly " $fragmentRefs": FragmentRefs<"StartCulture_group">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StartCulture_group",
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
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tagline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Photo",
      "kind": "LinkedField",
      "name": "headerImage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
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
(node as any).hash = 'e6b3c6539872075d7d7d6a83946c05e9';
export default node;
