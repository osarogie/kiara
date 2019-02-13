/**
 * @flow
 * @relayHash fbb43984302548c9049c131bd5fb6cf3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type JoinButton_group$ref = any;
type Viewer_viewer$ref = any;
export type newGroupDiscussionQueryVariables = {|
  id: string
|};
export type newGroupDiscussionQueryResponse = {|
  +group: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +permalink: ?string,
    +body: ?string,
    +viewer_is_a_member: ?boolean,
    +viewer_is_owner: ?boolean,
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
  +$fragmentRefs: Viewer_viewer$ref,
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
  ...Viewer_viewer
  group(id: $id) {
    id
    _id
    name
    permalink
    body
    viewer_is_a_member
    viewer_is_owner
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

fragment Viewer_viewer on Query {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_is_a_member",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_is_owner",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "height",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "width",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profile_picture_name",
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
    v2,
    v3,
    v4,
    v11,
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "newGroupDiscussionQuery",
  "id": null,
  "text": "query newGroupDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  group(id: $id) {\n    id\n    _id\n    name\n    permalink\n    body\n    viewer_is_a_member\n    viewer_is_owner\n    ...JoinButton_group\n    header_image {\n      name\n      height\n      width\n      id\n    }\n    user {\n      id\n      _id\n      name\n      username\n      profile_picture_name\n    }\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewer_is_a_member\n  is_private\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "newGroupDiscussionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5,
          v6,
          v7,
          v8,
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
              v4,
              v9,
              v10
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v4,
          v11,
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
          v12,
          v3,
          v2
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5,
          v6,
          v7,
          v8,
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
              v4,
              v9,
              v10,
              v2
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
(node/*: any*/).hash = 'afa73a59e1cdc6a439bdc6205d953c83';
module.exports = node;
