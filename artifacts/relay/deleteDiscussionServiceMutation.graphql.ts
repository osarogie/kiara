/**
 * @generated SignedSource<<46b371a75466f026a16035ac15ac9297>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteDiscussionInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type deleteDiscussionServiceMutation$variables = {
  input: DeleteDiscussionInput;
};
export type deleteDiscussionServiceMutation$data = {
  readonly deleteDiscussion: {
    readonly deletedDiscussionId: string;
    readonly discussion: {
      readonly _id: string;
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type deleteDiscussionServiceMutation = {
  response: deleteDiscussionServiceMutation$data;
  variables: deleteDiscussionServiceMutation$variables;
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
    "name": "deleteDiscussionServiceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteDiscussionServiceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8edb7d6c4977ffd00451f0e8a95504c6",
    "id": null,
    "metadata": {},
    "name": "deleteDiscussionServiceMutation",
    "operationKind": "mutation",
    "text": "mutation deleteDiscussionServiceMutation(\n  $input: DeleteDiscussionInput!\n) {\n  deleteDiscussion(input: $input) {\n    deletedDiscussionId\n    discussion {\n      _id\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e518cfd25753f0bc4b2ed6b182e4793d";

export default node;
