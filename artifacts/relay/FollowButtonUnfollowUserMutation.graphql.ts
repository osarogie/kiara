/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UnfollowUserInput = {
    id: string;
    clientMutationId?: string | null;
};
export type FollowButtonUnfollowUserMutationVariables = {
    input: UnfollowUserInput;
};
export type FollowButtonUnfollowUserMutationResponse = {
    readonly unfollowUser: {
        readonly user: {
            readonly " $fragmentRefs": FragmentRefs<"FollowButton_user">;
        } | null;
    } | null;
};
export type FollowButtonUnfollowUserMutation = {
    readonly response: FollowButtonUnfollowUserMutationResponse;
    readonly variables: FollowButtonUnfollowUserMutationVariables;
};



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
    "name": "FollowButtonUnfollowUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FollowButton_user"
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
    "name": "FollowButtonUnfollowUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "viewerFollows",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "followsViewer",
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
    ]
  },
  "params": {
    "cacheID": "f559fcf0793c532d74bd5e54ba2bbc39",
    "id": null,
    "metadata": {},
    "name": "FollowButtonUnfollowUserMutation",
    "operationKind": "mutation",
    "text": "mutation FollowButtonUnfollowUserMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    user {\n      ...FollowButton_user\n      id\n    }\n  }\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n"
  }
};
})();
(node as any).hash = '3c6c2aec1c72980d864f8ddb41b64650';
export default node;
