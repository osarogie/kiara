/**
 * @flow
 * @relayHash 0865b11b545a9d6ae1eb9d40cf89e70c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DiscussionLike_discussion$ref = any;
export type UnlikeDiscussionInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DiscussionLikeUnlikeDiscussionMutationVariables = {|
  input: UnlikeDiscussionInput
|};
export type DiscussionLikeUnlikeDiscussionMutationResponse = {|
  +unlikeDiscussion: ?{|
    +discussion: ?{|
      +$fragmentRefs: DiscussionLike_discussion$ref
    |}
  |}
|};
export type DiscussionLikeUnlikeDiscussionMutation = {|
  variables: DiscussionLikeUnlikeDiscussionMutationVariables,
  response: DiscussionLikeUnlikeDiscussionMutationResponse,
|};
*/


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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UnlikeDiscussionInput!",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unlikeDiscussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlikeDiscussionPayload",
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
                "kind": "FragmentSpread",
                "name": "DiscussionLike_discussion",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unlikeDiscussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlikeDiscussionPayload",
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
              },
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
                "name": "viewerDoesLike",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "likeCount",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DiscussionLikeUnlikeDiscussionMutation",
    "id": null,
    "text": "mutation DiscussionLikeUnlikeDiscussionMutation(\n  $input: UnlikeDiscussionInput!\n) {\n  unlikeDiscussion(input: $input) {\n    discussion {\n      ...DiscussionLike_discussion\n      id\n    }\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d7e088e2d551a5d4b1eb1717182509e';
module.exports = node;
