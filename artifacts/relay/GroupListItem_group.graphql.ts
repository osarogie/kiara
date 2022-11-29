/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GroupListItem_group = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly permalink: string | null;
    readonly publicUrl: string | null;
    readonly headerImage: {
        readonly name: string | null;
    } | null;
    readonly " $refType": "GroupListItem_group";
};
export type GroupListItem_group$data = GroupListItem_group;
export type GroupListItem_group$key = {
    readonly " $data"?: GroupListItem_group$data;
    readonly " $fragmentRefs": FragmentRefs<"GroupListItem_group">;
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
(node as any).hash = '9f9a90b987af19948a018e4c04eb6199';
export default node;
