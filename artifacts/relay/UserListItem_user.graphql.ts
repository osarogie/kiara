/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserListItem_user = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly username: string | null;
    readonly bio: string | null;
    readonly profilePictureName: string | null;
    readonly " $fragmentRefs": FragmentRefs<"FollowButton_user">;
    readonly " $refType": "UserListItem_user";
};
export type UserListItem_user$data = UserListItem_user;
export type UserListItem_user$key = {
    readonly " $data"?: UserListItem_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserListItem_user">;
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
(node as any).hash = '64025500ba422db05f85924d3c0ba8b4';
export default node;
