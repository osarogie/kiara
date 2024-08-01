/**
 * @generated SignedSource<<c0756320556017c18a04a2094a803618>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostThumb_discussion$data = {
  readonly _id: string;
  readonly createdAt: number | null | undefined;
  readonly excerpt: string | null | undefined;
  readonly group: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly permalink: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly user: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly profilePictureName: string | null | undefined;
    readonly username: string | null | undefined;
  } | null | undefined;
  readonly wordCount: number | null | undefined;
  readonly " $fragmentType": "PostThumb_discussion";
};
export type PostThumb_discussion$key = {
  readonly " $data"?: PostThumb_discussion$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostThumb_discussion">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
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
  "name": "PostThumb_discussion",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 10
        }
      ],
      "kind": "ScalarField",
      "name": "excerpt",
      "storageKey": "excerpt(size:10)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "wordCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "group",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "permalink",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Discussion",
  "abstractKey": null
};
})();

(node as any).hash = "2f8101cb283ad188ca1c4c8a7b6d439e";

export default node;
