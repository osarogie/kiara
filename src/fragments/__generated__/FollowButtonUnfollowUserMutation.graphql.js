/**
 * @flow
 * @relayHash 11b0f2a6d1a5d84a1e2a33df3da2499e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FollowButton_user$ref = any;
export type UnfollowUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type FollowButtonUnfollowUserMutationVariables = {|
  input: UnfollowUserInput
|};
export type FollowButtonUnfollowUserMutationResponse = {|
  +unfollowUser: ?{|
    +user: ?{|
      +$fragmentRefs: FollowButton_user$ref
    |}
  |}
|};
export type FollowButtonUnfollowUserMutation = {|
  variables: FollowButtonUnfollowUserMutationVariables,
  response: FollowButtonUnfollowUserMutationResponse,
|};
*/


/*
mutation FollowButtonUnfollowUserMutation(
  $input: UnfollowUserInput!
) {
  unfollowUser(input: $input) {
    user {
      ...FollowButton_user
      id
    }
  }
}

fragment FollowButton_user on User {
  _id
  name
  viewerFollows
  followsViewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UnfollowUserInput!",
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
    "name": "FollowButtonUnfollowUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollowUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "FollowButton_user",
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
    "name": "FollowButtonUnfollowUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollowUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
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
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "viewerFollows",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "followsViewer",
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "FollowButtonUnfollowUserMutation",
    "id": null,
    "text": "mutation FollowButtonUnfollowUserMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    user {\n      ...FollowButton_user\n      id\n    }\n  }\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c6c2aec1c72980d864f8ddb41b64650';
module.exports = node;
