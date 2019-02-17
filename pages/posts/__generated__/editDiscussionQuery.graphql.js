/**
 * @flow
 * @relayHash 35883d061ec92d669330add4f7920c15
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
export type editDiscussionQueryVariables = {|
  id: string
|};
export type editDiscussionQueryResponse = {|
  +discussion: ?{|
    +_id: string,
    +user: ?{|
      +username: ?string
    |},
    +group: ?{|
      +_id: string,
      +name: ?string,
    |},
    +feature_photo: ?{|
      +url: ?string
    |},
    +permalink: ?string,
    +name: ?string,
    +body: ?string,
    +viewer_owns: ?boolean,
  |},
  +$fragmentRefs: Viewer_viewer$ref,
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
  ...Viewer_viewer
  discussion(id: $id) {
    _id
    user {
      username
      id
    }
    group {
      _id
      name
      id
    }
    feature_photo {
      url
      id
    }
    permalink
    name
    body
    viewer_owns
    id
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
  "name": "_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
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
  "name": "url",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_owns",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "editDiscussionQuery",
  "id": null,
  "text": "query editDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $id) {\n    _id\n    user {\n      username\n      id\n    }\n    group {\n      _id\n      name\n      id\n    }\n    feature_photo {\n      url\n      id\n    }\n    permalink\n    name\n    body\n    viewer_owns\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editDiscussionQuery",
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
        "name": "discussion",
        "storageKey": null,
        "args": v1,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              v2,
              v4
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "feature_photo",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              v5
            ]
          },
          v6,
          v4,
          v7,
          v8
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editDiscussionQuery",
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
          v3,
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
          v2,
          v9
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": v1,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v9
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              v2,
              v4,
              v9
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "feature_photo",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              v5,
              v9
            ]
          },
          v6,
          v4,
          v7,
          v8,
          v9
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f77340d594429557a3ffade772de40f8';
module.exports = node;
