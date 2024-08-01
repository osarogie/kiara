/**
 * @generated SignedSource<<e7e3676ccb18853a998dca9021cb2806>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StartCulture_group$data = {
  readonly _id: string;
  readonly body: string | null | undefined;
  readonly headerImage: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly isPrivate: boolean | null | undefined;
  readonly name: string | null | undefined;
  readonly tagline: string | null | undefined;
  readonly " $fragmentType": "StartCulture_group";
};
export type StartCulture_group$key = {
  readonly " $data"?: StartCulture_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"StartCulture_group">;
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

(node as any).hash = "e6b3c6539872075d7d7d6a83946c05e9";

export default node;
