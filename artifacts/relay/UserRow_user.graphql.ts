/**
 * @generated SignedSource<<47127155d3a8bc935869bba17496549e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserRow_user$data = {
  readonly _id: string;
  readonly bio: string | null;
  readonly id: string;
  readonly name: string | null;
  readonly profilePictureName: string | null;
  readonly username: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"FollowButton_user">;
  readonly " $fragmentType": "UserRow_user";
};
export type UserRow_user$key = {
  readonly " $data"?: UserRow_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserRow_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserRow_user",
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
      "name": "username",
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
      "name": "profilePictureName",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FollowButton_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b61e99c4cf468fe558ab3731fc0c2618";

export default node;
