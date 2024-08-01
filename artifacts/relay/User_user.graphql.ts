/**
 * @generated SignedSource<<1d76c6c94fd7a47012179414274a598f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type User_user$data = {
  readonly _id: string;
  readonly bio: string | null | undefined;
  readonly discussionCount: number | null | undefined;
  readonly followerCount: number | null | undefined;
  readonly followingCount: number | null | undefined;
  readonly id: string;
  readonly isViewer: boolean | null | undefined;
  readonly name: string | null | undefined;
  readonly profilePicture: string | null | undefined;
  readonly profilePictureName: string | null | undefined;
  readonly username: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"FollowButton_user">;
  readonly " $fragmentType": "User_user";
};
export type User_user$key = {
  readonly " $data"?: User_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"User_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "User_user",
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
      "name": "bio",
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
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 250
        }
      ],
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": "profilePicture(size:250)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profilePictureName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "discussionCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followingCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isViewer",
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

(node as any).hash = "c19b9eb5f9c0c3c6a9fbad654c0ad032";

export default node;
