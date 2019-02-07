/**
 * @flow
 * @relayHash af0bba1d18f2e6ed6e7192a130fabcb1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type JoinButton_group$ref = any;
export type newGroupDiscussionQueryVariables = {|
  id: string
|};
export type newGroupDiscussionQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |},
  +group: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +permalink: ?string,
    +body: ?string,
    +viewer_is_a_member: ?boolean,
    +header_image: ?{|
      +name: ?string,
      +height: ?number,
      +width: ?number,
    |},
    +user: ?{|
      +id: string,
      +_id: string,
      +name: ?string,
      +username: ?string,
      +profile_picture_name: ?string,
    |},
    +$fragmentRefs: JoinButton_group$ref,
  |},
|};
export type newGroupDiscussionQuery = {|
  variables: newGroupDiscussionQueryVariables,
  response: newGroupDiscussionQueryResponse,
|};
*/


/*
query newGroupDiscussionQuery(
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
  group(id: $id) {
    id
    _id
    name
    permalink
    body
    viewer_is_a_member
    ...JoinButton_group
    header_image {
      name
      height
      width
      id
    }
    user {
      id
      _id
      name
      username
      profile_picture_name
    }
  }
}

fragment JoinButton_group on Group {
  _id
  viewer_is_a_member
  is_private
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
  "name": "profile_picture_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
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
    v3,
    v4,
    v5
  ]
},
v7 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_is_a_member",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "height",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "width",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v5,
    v4,
    v1,
    v2,
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "newGroupDiscussionQuery",
  "id": null,
  "text": "query newGroupDiscussionQuery(\n  $id: ID!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  group(id: $id) {\n    id\n    _id\n    name\n    permalink\n    body\n    viewer_is_a_member\n    ...JoinButton_group\n    header_image {\n      name\n      height\n      width\n      id\n    }\n    user {\n      id\n      _id\n      name\n      username\n      profile_picture_name\n    }\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewer_is_a_member\n  is_private\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "newGroupDiscussionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v6,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v7,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v5,
          v4,
          v1,
          v8,
          v9,
          v10,
          {
            "kind": "FragmentSpread",
            "name": "JoinButton_group",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "header_image",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              v1,
              v11,
              v12
            ]
          },
          v13
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newGroupDiscussionQuery",
    "argumentDefinitions": v0,
    "selections": [
      v6,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v7,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v5,
          v4,
          v1,
          v8,
          v9,
          v10,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_private",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "header_image",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              v1,
              v11,
              v12,
              v5
            ]
          },
          v13
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e38b9fe201e0cf8f06b55d8bb18eb00';
module.exports = node;
