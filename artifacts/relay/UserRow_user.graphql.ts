/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserRow_user = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly username: string | null;
    readonly bio: string | null;
    readonly profilePictureName: string | null;
    readonly " $fragmentRefs": FragmentRefs<"FollowButton_user">;
    readonly " $refType": "UserRow_user";
};
export type UserRow_user$data = UserRow_user;
export type UserRow_user$key = {
    readonly " $data"?: UserRow_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserRow_user">;
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
(node as any).hash = 'b61e99c4cf468fe558ab3731fc0c2618';
export default node;
