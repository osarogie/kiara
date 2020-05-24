/**
 * @flow
 * @relayHash cf76a5091ae286a4c89dae0075edfd95
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangePasswordInput = {|
  currentPassword: string,
  newPassword: string,
  newPasswordConfirmation?: ?string,
  clientMutationId?: ?string,
|};
export type ChangePasswordScreenMutationVariables = {|
  input: ChangePasswordInput
|};
export type ChangePasswordScreenMutationResponse = {|
  +changePassword: ?{|
    +success: ?boolean,
    +errors: $ReadOnlyArray<{|
      +message: string
    |}>,
  |}
|};
export type ChangePasswordScreenMutation = {|
  variables: ChangePasswordScreenMutationVariables,
  response: ChangePasswordScreenMutationResponse,
|};
*/


/*
mutation ChangePasswordScreenMutation(
  $input: ChangePasswordInput!
) {
  changePassword(input: $input) {
    success
    errors {
      message
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ChangePasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changePassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ChangePasswordPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "errors",
        "storageKey": null,
        "args": null,
        "concreteType": "UserError",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangePasswordScreenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangePasswordScreenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangePasswordScreenMutation",
    "id": null,
    "text": "mutation ChangePasswordScreenMutation(\n  $input: ChangePasswordInput!\n) {\n  changePassword(input: $input) {\n    success\n    errors {\n      message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5d6c0bc866979eed5001beb9110f7e0';

module.exports = node;
