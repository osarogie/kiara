/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JoinButton_group = {
    readonly _id: string;
    readonly viewerIsAMember: boolean | null;
    readonly isPrivate: boolean | null;
    readonly " $refType": "JoinButton_group";
};
export type JoinButton_group$data = JoinButton_group;
export type JoinButton_group$key = {
    readonly " $data"?: JoinButton_group$data;
    readonly " $fragmentRefs": FragmentRefs<"JoinButton_group">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JoinButton_group",
  "selections": [
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
      "name": "viewerIsAMember",
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
(node as any).hash = '122371b07e38843e9b8d2d13daae76ed';
export default node;
