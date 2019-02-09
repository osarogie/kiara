/**
 * @flow
 * @relayHash ac9fefa46cd4665c3b3a2e7519e37a5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type editDiscussionQueryVariables = {|
  id: string
|};
export type editDiscussionQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |},
  +discussion: ?{|
    +_id: string,
    +user: ?{|
      +username: ?string
    |},
    +permalink: ?string,
    +name: ?string,
    +body: ?string,
    +viewer_owns: ?boolean,
  |},
|};
export type editDiscussionQuery = {|
  variables: editDiscussionQueryVariables,
  response: editDiscussionQueryResponse,
|};
*/


/*
query editDiscussionQuery(
  $id: ID!
) {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
  }
  discussion(id: $id) {
    _id
    user {
      username
      id
    }
    permalink
    name
    body
    viewer_owns
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "viewer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profile_picture",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 50,
          "type": "Int"
        }
      ],
      "storageKey": "profile_picture(size:50)"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profile_picture_name",
      "args": null,
      "storageKey": null
    },
    v3,
    v4
  ]
},
v6 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_owns",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "editDiscussionQuery",
  "id": null,
  "text": "query editDiscussionQuery(\n  $id: ID!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  discussion(id: $id) {\n    _id\n    user {\n      username\n      id\n    }\n    permalink\n    name\n    body\n    viewer_owns\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editDiscussionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v5,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": v6,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2
            ]
          },
          v7,
          v1,
          v8,
          v9
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editDiscussionQuery",
    "argumentDefinitions": v0,
    "selections": [
      v5,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": v6,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              v4
            ]
          },
          v7,
          v1,
          v8,
          v9,
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fe41cb1654bfb2144aca9d2b0d61aa1';
module.exports = node;
