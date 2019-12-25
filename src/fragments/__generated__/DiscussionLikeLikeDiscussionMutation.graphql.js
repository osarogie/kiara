/**
 * @flow
 * @relayHash f98fb576def180d84edc0f10be3fc205
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DiscussionLike_discussion$ref = any;
export type LikeDiscussionInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DiscussionLikeLikeDiscussionMutationVariables = {|
  input: LikeDiscussionInput
|};
export type DiscussionLikeLikeDiscussionMutationResponse = {|
  +likeDiscussion: ?{|
    +discussion: ?{|
      +$fragmentRefs: DiscussionLike_discussion$ref
    |}
  |}
|};
export type DiscussionLikeLikeDiscussionMutation = {|
  variables: DiscussionLikeLikeDiscussionMutationVariables,
  response: DiscussionLikeLikeDiscussionMutationResponse,
|};
*/


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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LikeDiscussionInput!",
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
    "name": "DiscussionLikeLikeDiscussionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likeDiscussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeDiscussionPayload",
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
    "name": "DiscussionLikeLikeDiscussionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "likeDiscussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LikeDiscussionPayload",
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
    "name": "DiscussionLikeLikeDiscussionMutation",
    "id": null,
    "text": "mutation DiscussionLikeLikeDiscussionMutation(\n  $input: LikeDiscussionInput!\n) {\n  likeDiscussion(input: $input) {\n    discussion {\n      ...DiscussionLike_discussion\n      id\n    }\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67df771c86b87af49ca9f734b79d14ac';
module.exports = node;
