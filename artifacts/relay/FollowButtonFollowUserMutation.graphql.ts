/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FollowUserInput = {
    id: string;
    clientMutationId?: string | null;
};
export type FollowButtonFollowUserMutationVariables = {
    input: FollowUserInput;
};
export type FollowButtonFollowUserMutationResponse = {
    readonly followUser: {
        readonly user: {
            readonly " $fragmentRefs": FragmentRefs<"FollowButton_user">;
        } | null;
    } | null;
};
export type FollowButtonFollowUserMutation = {
    readonly response: FollowButtonFollowUserMutationResponse;
    readonly variables: FollowButtonFollowUserMutationVariables;
};



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
    "name": "FollowButtonFollowUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "name": "FollowButtonFollowUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "cacheID": "5ee681dad8da19d85d3943e50814a744",
    "id": null,
    "metadata": {},
    "name": "FollowButtonFollowUserMutation",
    "operationKind": "mutation",
    "text": "mutation FollowButtonFollowUserMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    user {\n      ...FollowButton_user\n      id\n    }\n  }\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n"
  }
};
})();
(node as any).hash = 'ba0002ae30c4a3eea5bc71b7ef9658c8';
export default node;
