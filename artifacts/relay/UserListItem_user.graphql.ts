/**
 * @generated SignedSource<<9130e0819b62aa2ab3b126890454fd85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserListItem_user$data = {
  readonly _id: string;
  readonly bio: string | null;
  readonly id: string;
  readonly name: string | null;
  readonly profilePictureName: string | null;
  readonly username: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"FollowButton_user">;
  readonly " $fragmentType": "UserListItem_user";
};
export type UserListItem_user$key = {
  readonly " $data"?: UserListItem_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserListItem_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListItem_user",
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

(node as any).hash = "64025500ba422db05f85924d3c0ba8b4";

export default node;
