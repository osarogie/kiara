/**
 * @generated SignedSource<<9bd8a261b339fcc6299013f3691e257f>>
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
  readonly createdAt: number | null;
  readonly excerpt: string | null;
  readonly group: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null;
    readonly permalink: string | null;
  } | null;
  readonly id: string;
  readonly name: string | null;
  readonly user: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null;
    readonly profilePictureName: string | null;
    readonly username: string | null;
  } | null;
  readonly wordCount: number | null;
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
