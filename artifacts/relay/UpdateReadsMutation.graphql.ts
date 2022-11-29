/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateReadsInput = {
    id: string;
    clientMutationId?: string | null;
};
export type UpdateReadsMutationVariables = {
    input: UpdateReadsInput;
};
export type UpdateReadsMutationResponse = {
    readonly updateReads: {
        readonly discussion: {
            readonly id: string;
        } | null;
    } | null;
};
export type UpdateReadsMutation = {
    readonly response: UpdateReadsMutationResponse;
    readonly variables: UpdateReadsMutationVariables;
};



/*
mutation UpdateReadsMutation(
  $input: UpdateReadsInput!
) {
  updateReads(input: $input) {
    discussion {
      id
    }
  }
}
*/

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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateReadsPayload",
    "kind": "LinkedField",
    "name": "updateReads",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Discussion",
        "kind": "LinkedField",
        "name": "discussion",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateReadsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateReadsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "961f4cf9cc43c0a724a5f415509b33e4",
    "id": null,
    "metadata": {},
    "name": "UpdateReadsMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateReadsMutation(\n  $input: UpdateReadsInput!\n) {\n  updateReads(input: $input) {\n    discussion {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f38f7a5c68a61047604604073adfd0df';
export default node;
