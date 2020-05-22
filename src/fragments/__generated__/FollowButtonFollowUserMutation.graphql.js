/**
 * @flow
 * @relayHash 99834af1bab5c6326d2d7f8e18848a32
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FollowButton_user$ref = any;
export type FollowUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type FollowButtonFollowUserMutationVariables = {|
  input: FollowUserInput
|};
export type FollowButtonFollowUserMutationResponse = {|
  +followUser: ?{|
    +user: ?{|
      +$fragmentRefs: FollowButton_user$ref
    |}
  |}
|};
export type FollowButtonFollowUserMutation = {|
  variables: FollowButtonFollowUserMutationVariables,
  response: FollowButtonFollowUserMutationResponse,
|};
*/


/*
mutation FollowButtonFollowUserMutation(
  $input: FollowUserInput!
) {
  followUser(input: $input) {
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
    "type": "FollowUserInput!",
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
    "name": "FollowButtonFollowUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
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
    "name": "FollowButtonFollowUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
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
    "name": "FollowButtonFollowUserMutation",
    "id": null,
    "text": "mutation FollowButtonFollowUserMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    user {\n      ...FollowButton_user\n      id\n    }\n  }\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba0002ae30c4a3eea5bc71b7ef9658c8';
module.exports = node;
