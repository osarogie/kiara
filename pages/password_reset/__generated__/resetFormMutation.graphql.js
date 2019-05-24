/**
 * @flow
 * @relayHash d1ebe5e69276edb82f8c2ae1839f3357
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestPasswordResetTokenInput = {|
  clientMutationId?: ?string,
  identifier: string,
|};
export type resetFormMutationVariables = {|
  input: RequestPasswordResetTokenInput
|};
export type resetFormMutationResponse = {|
  +requestPasswordResetToken: ?{|
    +message: ?string
  |}
|};
export type resetFormMutation = {|
  variables: resetFormMutationVariables,
  response: resetFormMutationResponse,
|};
*/


/*
mutation resetFormMutation(
  $input: RequestPasswordResetTokenInput!
) {
  requestPasswordResetToken(input: $input) {
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RequestPasswordResetTokenInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "requestPasswordResetToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RequestPasswordResetTokenPayload",
    "plural": false,
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "resetFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "resetFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "resetFormMutation",
    "id": null,
    "text": "mutation resetFormMutation(\n  $input: RequestPasswordResetTokenInput!\n) {\n  requestPasswordResetToken(input: $input) {\n    message\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7889085049c72f3c78dbbb22f1fc87fd';
module.exports = node;
