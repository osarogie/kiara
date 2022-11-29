/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LikeDiscussionInput = {
    id: string;
    clientMutationId?: string | null;
};
export type DiscussionLikeLikeDiscussionMutationVariables = {
    input: LikeDiscussionInput;
};
export type DiscussionLikeLikeDiscussionMutationResponse = {
    readonly likeDiscussion: {
        readonly discussion: {
            readonly " $fragmentRefs": FragmentRefs<"DiscussionLike_discussion">;
        } | null;
    } | null;
};
export type DiscussionLikeLikeDiscussionMutation = {
    readonly response: DiscussionLikeLikeDiscussionMutationResponse;
    readonly variables: DiscussionLikeLikeDiscussionMutationVariables;
};



/*
mutation DiscussionLikeLikeDiscussionMutation(
  $input: LikeDiscussionInput!
) {
  likeDiscussion(input: $input) {
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
    "name": "DiscussionLikeLikeDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeDiscussionPayload",
        "kind": "LinkedField",
        "name": "likeDiscussion",
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
    "name": "DiscussionLikeLikeDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeDiscussionPayload",
        "kind": "LinkedField",
        "name": "likeDiscussion",
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
    "cacheID": "70dbd2d48e6f1a2884dea907081f8ed8",
    "id": null,
    "metadata": {},
    "name": "DiscussionLikeLikeDiscussionMutation",
    "operationKind": "mutation",
    "text": "mutation DiscussionLikeLikeDiscussionMutation(\n  $input: LikeDiscussionInput!\n) {\n  likeDiscussion(input: $input) {\n    discussion {\n      ...DiscussionLike_discussion\n      id\n    }\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n"
  }
};
})();
(node as any).hash = '67df771c86b87af49ca9f734b79d14ac';
export default node;
