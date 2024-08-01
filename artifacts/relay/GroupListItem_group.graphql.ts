/**
 * @generated SignedSource<<6544e22ca0afbda9f2de279434b1ba35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupListItem_group$data = {
  readonly _id: string;
  readonly headerImage: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly permalink: string | null | undefined;
  readonly publicUrl: string | null | undefined;
  readonly " $fragmentType": "GroupListItem_group";
};
export type GroupListItem_group$key = {
  readonly " $data"?: GroupListItem_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupListItem_group">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupListItem_group",
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "permalink",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publicUrl",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};
})();

(node as any).hash = "9f9a90b987af19948a018e4c04eb6199";

export default node;
