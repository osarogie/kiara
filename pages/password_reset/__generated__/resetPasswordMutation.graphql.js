/**
 * @flow
 * @relayHash b89c90281d2db3ac9a816b05769c6d1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordInput = {
  clientMutationId?: ?string,
  token: string,
  password: string,
  password_confirmation?: ?string,
};
export type resetPasswordMutationVariables = {|
  input: ResetPasswordInput
|};
export type resetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +success: ?boolean
  |}
|};
export type resetPasswordMutation = {|
  variables: resetPasswordMutationVariables,
  response: resetPasswordMutationResponse,
|};
*/


/*
mutation resetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ResetPasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ResetPasswordInput!"
      }
    ],
    "concreteType": "ResetPasswordPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "resetPasswordMutation",
  "id": null,
  "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    success\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf08468edc66efb5a99a9df20de2295b';
module.exports = node;
