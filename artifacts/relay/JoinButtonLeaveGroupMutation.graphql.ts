/**
 * @generated SignedSource<<70fde8b310baa63b8ed792bf217fbb57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LeaveGroupInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type JoinButtonLeaveGroupMutation$variables = {
  input: LeaveGroupInput;
};
export type JoinButtonLeaveGroupMutation$data = {
  readonly leaveGroup: {
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"JoinButton_group">;
    } | null | undefined;
  } | null | undefined;
};
export type JoinButtonLeaveGroupMutation = {
  response: JoinButtonLeaveGroupMutation$data;
  variables: JoinButtonLeaveGroupMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JoinButtonLeaveGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "kind": "LinkedField",
        "name": "leaveGroup",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "JoinButton_group"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JoinButtonLeaveGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "kind": "LinkedField",
        "name": "leaveGroup",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d3947e21e1186f297d91d0f26f69e598",
    "id": null,
    "metadata": {},
    "name": "JoinButtonLeaveGroupMutation",
    "operationKind": "mutation",
    "text": "mutation JoinButtonLeaveGroupMutation(\n  $input: LeaveGroupInput!\n) {\n  leaveGroup(input: $input) {\n    group {\n      ...JoinButton_group\n      id\n    }\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewerIsAMember\n  isPrivate\n}\n"
  }
};
})();

(node as any).hash = "9137dafaf683b0f4df4d9964b55365ba";

export default node;
