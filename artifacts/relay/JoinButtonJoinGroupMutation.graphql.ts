/**
 * @generated SignedSource<<85c6c998287a0acdd6d0e3680114cd0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JoinGroupInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type JoinButtonJoinGroupMutation$variables = {
  input: JoinGroupInput;
};
export type JoinButtonJoinGroupMutation$data = {
  readonly joinGroup: {
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"JoinButton_group">;
    } | null | undefined;
  } | null | undefined;
};
export type JoinButtonJoinGroupMutation = {
  response: JoinButtonJoinGroupMutation$data;
  variables: JoinButtonJoinGroupMutation$variables;
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
    "name": "JoinButtonJoinGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "JoinGroupPayload",
        "kind": "LinkedField",
        "name": "joinGroup",
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
    "name": "JoinButtonJoinGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "JoinGroupPayload",
        "kind": "LinkedField",
        "name": "joinGroup",
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
    "cacheID": "7381bd7d5b180e46a76dbcdea1121f0b",
    "id": null,
    "metadata": {},
    "name": "JoinButtonJoinGroupMutation",
    "operationKind": "mutation",
    "text": "mutation JoinButtonJoinGroupMutation(\n  $input: JoinGroupInput!\n) {\n  joinGroup(input: $input) {\n    group {\n      ...JoinButton_group\n      id\n    }\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewerIsAMember\n  isPrivate\n}\n"
  }
};
})();

(node as any).hash = "06dd10ef3dfec09b6ee3949fba2a8058";

export default node;
