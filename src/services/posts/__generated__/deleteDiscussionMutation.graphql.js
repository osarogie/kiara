/**
 * @flow
 * @relayHash 80cad1ee8f569822d3adea91ea44641f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteDiscussionInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type deleteDiscussionMutationVariables = {|
  input: DeleteDiscussionInput
|};
export type deleteDiscussionMutationResponse = {|
  +deleteDiscussion: ?{|
    +deletedDiscussionId: string,
    +discussion: ?{|
      +_id: string,
      +id: string,
    |},
  |}
|};
export type deleteDiscussionMutation = {|
  variables: deleteDiscussionMutationVariables,
  response: deleteDiscussionMutationResponse,
|};
*/


/*
mutation deleteDiscussionMutation(
  $input: DeleteDiscussionInput!
) {
  deleteDiscussion(input: $input) {
    deletedDiscussionId
    discussion {
      _id
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
    "type": "DeleteDiscussionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteDiscussion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteDiscussionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedDiscussionId",
        "args": null,
        "storageKey": null
      },
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
            "name": "_id",
            "args": null,
            "storageKey": null
          },
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
  "fragment": {
    "kind": "Fragment",
    "name": "deleteDiscussionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteDiscussionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteDiscussionMutation",
    "id": null,
    "text": "mutation deleteDiscussionMutation(\n  $input: DeleteDiscussionInput!\n) {\n  deleteDiscussion(input: $input) {\n    deletedDiscussionId\n    discussion {\n      _id\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f24c411a0aaf7e349a40f16f35d7ef73';

module.exports = node;
