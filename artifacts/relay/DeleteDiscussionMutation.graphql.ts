/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteDiscussionInput = {
    id: string;
    clientMutationId?: string | null;
};
export type deleteDiscussionMutationVariables = {
    input: DeleteDiscussionInput;
};
export type deleteDiscussionMutationResponse = {
    readonly deleteDiscussion: {
        readonly deletedDiscussionId: string;
        readonly discussion: {
            readonly _id: string;
            readonly id: string;
        } | null;
    } | null;
};
export type deleteDiscussionMutation = {
    readonly response: deleteDiscussionMutationResponse;
    readonly variables: deleteDiscussionMutationVariables;
};



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
    "concreteType": "DeleteDiscussionPayload",
    "kind": "LinkedField",
    "name": "deleteDiscussion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedDiscussionId",
        "storageKey": null
      },
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
            "name": "_id",
            "storageKey": null
          },
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
    "name": "deleteDiscussionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteDiscussionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f587859b9bca866afa7337eff23a339",
    "id": null,
    "metadata": {},
    "name": "deleteDiscussionMutation",
    "operationKind": "mutation",
    "text": "mutation deleteDiscussionMutation(\n  $input: DeleteDiscussionInput!\n) {\n  deleteDiscussion(input: $input) {\n    deletedDiscussionId\n    discussion {\n      _id\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f24c411a0aaf7e349a40f16f35d7ef73';
export default node;
