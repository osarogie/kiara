/**
 * @generated SignedSource<<b8e7029322184cc895a3dbf5d6d7dfc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ResetPasswordInput = {
  clientMutationId?: string | null;
  password: string;
  passwordConfirmation?: string | null;
  token: string;
};
export type resetPasswordMutation$variables = {
  input: ResetPasswordInput;
};
export type resetPasswordMutation$data = {
  readonly resetPassword: {
    readonly success: boolean | null;
  } | null;
};
export type resetPasswordMutation = {
  response: resetPasswordMutation$data;
  variables: resetPasswordMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ResetPasswordPayload",
    "kind": "LinkedField",
    "name": "resetPassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "resetPasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resetPasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "789d45cc5d06148b14b4e4596353a88e",
    "id": null,
    "metadata": {},
    "name": "resetPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "bf08468edc66efb5a99a9df20de2295b";

export default node;
