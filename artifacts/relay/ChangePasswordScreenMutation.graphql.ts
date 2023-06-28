/**
 * @generated SignedSource<<d62222017702319eb79fba1778a80e65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangePasswordInput = {
  clientMutationId?: string | null;
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation?: string | null;
};
export type ChangePasswordScreenMutation$variables = {
  input: ChangePasswordInput;
};
export type ChangePasswordScreenMutation$data = {
  readonly changePassword: {
    readonly errors: ReadonlyArray<{
      readonly message: string;
    }>;
    readonly success: boolean | null;
  } | null;
};
export type ChangePasswordScreenMutation = {
  response: ChangePasswordScreenMutation$data;
  variables: ChangePasswordScreenMutation$variables;
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
    "concreteType": "ChangePasswordPayload",
    "kind": "LinkedField",
    "name": "changePassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserError",
        "kind": "LinkedField",
        "name": "errors",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangePasswordScreenMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangePasswordScreenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c8c30a659e506d4d7ab5693eccd3ccb0",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordScreenMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordScreenMutation(\n  $input: ChangePasswordInput!\n) {\n  changePassword(input: $input) {\n    success\n    errors {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5d6c0bc866979eed5001beb9110f7e0";

export default node;
