/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UnlikeDiscussionInput = {
    id: string;
    clientMutationId?: string | null;
};
export type DiscussionLikeUnlikeDiscussionMutationVariables = {
    input: UnlikeDiscussionInput;
};
export type DiscussionLikeUnlikeDiscussionMutationResponse = {
    readonly unlikeDiscussion: {
        readonly discussion: {
            readonly " $fragmentRefs": FragmentRefs<"DiscussionLike_discussion">;
        } | null;
    } | null;
};
export type DiscussionLikeUnlikeDiscussionMutation = {
    readonly response: DiscussionLikeUnlikeDiscussionMutationResponse;
    readonly variables: DiscussionLikeUnlikeDiscussionMutationVariables;
};



/*
mutation DiscussionLikeUnlikeDiscussionMutation(
  $input: UnlikeDiscussionInput!
) {
  unlikeDiscussion(input: $input) {
    discussion {
      ...DiscussionLike_discussion
      id
    }
  }
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewerDoesLike
  likeCount
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlikeDiscussionPayload",
        "kind": "LinkedField",
        "name": "unlikeDiscussion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Discussion",
            "kind": "LinkedField",
            "name": "discussion",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DiscussionLike_discussion"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlikeDiscussionPayload",
        "kind": "LinkedField",
        "name": "unlikeDiscussion",
        "plural": false,
        "selections": [
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
                "name": "id",
                "storageKey": null
              },
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
                "name": "viewerDoesLike",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likeCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c9a4f19e3a0d5a93b5097e9e4f96de51",
    "id": null,
    "metadata": {},
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "operationKind": "mutation",
    "text": "mutation DiscussionLikeUnlikeDiscussionMutation(\n  $input: UnlikeDiscussionInput!\n) {\n  unlikeDiscussion(input: $input) {\n    discussion {\n      ...DiscussionLike_discussion\n      id\n    }\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n"
  }
};
})();
(node as any).hash = '9d7e088e2d551a5d4b1eb1717182509e';
export default node;
