/**
 * @flow
 * @relayHash af06b123f322f95fe794635bf87eb620
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordInput = {|
  token: string,
  password: string,
  passwordConfirmation?: ?string,
  clientMutationId?: ?string,
|};
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
        "variableName": "input"
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
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "resetPasswordMutation",
    "id": null,
    "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf08468edc66efb5a99a9df20de2295b';
module.exports = node;
