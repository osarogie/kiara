/**
 * @flow
 * @relayHash dcdf09c5636b6b90afd1527d8e190d65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FullPost_discussion$ref = any;
type Viewer_viewer$ref = any;
export type postQueryVariables = {|
  id: string
|};
export type postQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Viewer_viewer$ref
  |},
  +discussion: ?{|
    +$fragmentRefs: FullPost_discussion$ref
  |},
|};
export type postQuery = {|
  variables: postQueryVariables,
  response: postQueryResponse,
|};
*/


/*
query postQuery(
  $id: ID!
) {
  viewer {
    ...Viewer_viewer
    id
  }
  discussion(id: $id) {
    ...FullPost_discussion
    id
  }
}

fragment Viewer_viewer on User {
  name
  username
  profile_picture(size: 50)
  profile_picture_name
  _id
  id
}

fragment FullPost_discussion on Discussion {
  id
  _id
  name
  body
  created_at
  ...DiscussionLike_discussion
  comment_count
  feature_photo {
    url
    height
    width
    id
  }
  public_url
  group {
    _id
    id
    name
    permalink
  }
  user {
    id
    _id
    username
    name
    profile_picture_name
    bio
  }
  parsed_body
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewer_does_like
  like_count
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
  "name": "name",
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
  "name": "profile_picture_name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "postQuery",
  "id": null,
  "text": "query postQuery(\n  $id: ID!\n) {\n  viewer {\n    ...Viewer_viewer\n    id\n  }\n  discussion(id: $id) {\n    ...FullPost_discussion\n    id\n  }\n}\n\nfragment Viewer_viewer on User {\n  name\n  username\n  profile_picture(size: 50)\n  profile_picture_name\n  _id\n  id\n}\n\nfragment FullPost_discussion on Discussion {\n  id\n  _id\n  name\n  body\n  created_at\n  ...DiscussionLike_discussion\n  comment_count\n  feature_photo {\n    url\n    height\n    width\n    id\n  }\n  public_url\n  group {\n    _id\n    id\n    name\n    permalink\n  }\n  user {\n    id\n    _id\n    username\n    name\n    profile_picture_name\n    bio\n  }\n  parsed_body\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "postQuery",
    "type": "Query",
    "metadata": null,
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
          {
            "kind": "FragmentSpread",
            "name": "Viewer_viewer",
            "args": null
          }
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
          {
            "kind": "FragmentSpread",
            "name": "FullPost_discussion",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "postQuery",
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
          v2,
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
          v4,
          v5,
          v6
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "like_count",
            "args": null,
            "storageKey": null
          },
          v6,
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created_at",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewer_does_like",
            "args": null,
            "storageKey": null
          },
          v5,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "comment_count",
            "args": null,
            "storageKey": null
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              v6
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "public_url",
            "args": null,
            "storageKey": null
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
              v5,
              v6,
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "permalink",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v6,
              v5,
              v3,
              v2,
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bio",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parsed_body",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '31e1b086d963a4a8aeff734077009d00';
module.exports = node;
