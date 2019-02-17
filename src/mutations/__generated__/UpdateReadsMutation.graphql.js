/**
 * @flow
 * @relayHash 41830281812e37add107e0ef2bfc3882
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateReadsInput = {
  clientMutationId?: ?string,
  id: string,
};
export type UpdateReadsMutationVariables = {|
  input: UpdateReadsInput
|};
export type UpdateReadsMutationResponse = {|
  +updateReads: ?{|
    +discussion: ?{|
      +id: string
    |}
  |}
|};
export type UpdateReadsMutation = {|
  variables: UpdateReadsMutationVariables,
  response: UpdateReadsMutationResponse,
|};
*/


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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateReadsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateReads",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateReadsInput!"
      }
    ],
    "concreteType": "UpdateReadsPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": null,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
  "operationKind": "mutation",
  "name": "UpdateReadsMutation",
  "id": null,
  "text": "mutation UpdateReadsMutation(\n  $input: UpdateReadsInput!\n) {\n  updateReads(input: $input) {\n    discussion {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateReadsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateReadsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f38f7a5c68a61047604604073adfd0df';
module.exports = node;
