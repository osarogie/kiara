/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RequestPasswordResetTokenInput = {
    identifier: string;
    clientMutationId?: string | null;
};
export type resetFormMutationVariables = {
    input: RequestPasswordResetTokenInput;
};
export type resetFormMutationResponse = {
    readonly requestPasswordResetToken: {
        readonly message: string | null;
    } | null;
};
export type resetFormMutation = {
    readonly response: resetFormMutationResponse;
    readonly variables: resetFormMutationVariables;
};



/*
mutation resetFormMutation(
  $input: RequestPasswordResetTokenInput!
) {
  requestPasswordResetToken(input: $input) {
    message
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
    "concreteType": "RequestPasswordResetTokenPayload",
    "kind": "LinkedField",
    "name": "requestPasswordResetToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
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
    "name": "resetFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resetFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dab526b301df6189dbfb79503e753ebe",
    "id": null,
    "metadata": {},
    "name": "resetFormMutation",
    "operationKind": "mutation",
    "text": "mutation resetFormMutation(\n  $input: RequestPasswordResetTokenInput!\n) {\n  requestPasswordResetToken(input: $input) {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '7889085049c72f3c78dbbb22f1fc87fd';
export default node;
