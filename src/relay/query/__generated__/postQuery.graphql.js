/**
 * @flow
 * @relayHash 75a10d4a0e1fc4d7ad5ed48beeec1852
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FullPost_discussion$ref = any;
type Viewer_viewer$ref = any;
export type postQueryVariables = {|
  discussionId: string
|};
export type postQueryResponse = {|
  +discussion: ?{|
    +$fragmentRefs: FullPost_discussion$ref
  |},
  +$fragmentRefs: Viewer_viewer$ref,
|};
export type postQuery = {|
  variables: postQueryVariables,
  response: postQueryResponse,
|};
*/


/*
query postQuery(
  $discussionId: ID!
) {
  ...Viewer_viewer
  discussion(id: $discussionId) {
    ...FullPost_discussion
    id
  }
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewerDoesLike
  likeCount
}

fragment FullPost_discussion on Discussion {
  id
  _id
  name
  body
  createdAt
  updatedAt
  reads
  ...DiscussionLike_discussion
  excerpt(size: 30)
  commentCount
  featurePhoto {
    url
    height
    width
    id
  }
  publicUrl
  group {
    _id
    id
    name
    permalink
    publicUrl
  }
  user {
    id
    _id
    username
    name
    profilePicture(size: 250)
    profilePictureName
    bio
    publicUrl
  }
  parsedBody
  hasPoll
  otherUsersPosts(first: 4) {
    edges {
      node {
        id
        _id
        name
        permalink
        createdAt
        user {
          id
          _id
          username
          name
          publicUrl
        }
      }
    }
  }
}

fragment Viewer_viewer on Query {
  viewer {
    name
    username
    profilePicture(size: 50)
    profilePictureName
    _id
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "discussionId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "discussionId"
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
  "name": "profilePictureName",
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
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "publicUrl",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "postQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FullPost_discussion",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "postQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "profilePicture",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 50
              }
            ],
            "storageKey": "profilePicture(size:50)"
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v5/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reads",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "excerpt",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 30
              }
            ],
            "storageKey": "excerpt(size:30)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "commentCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "featurePhoto",
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
              (v6/*: any*/)
            ]
          },
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v2/*: any*/),
              (v9/*: any*/),
              (v8/*: any*/)
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
              (v6/*: any*/),
              (v5/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profilePicture",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 250
                  }
                ],
                "storageKey": "profilePicture(size:250)"
              },
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bio",
                "args": null,
                "storageKey": null
              },
              (v8/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parsedBody",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "hasPoll",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "otherUsersPosts",
            "storageKey": "otherUsersPosts(first:4)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 4
              }
            ],
            "concreteType": "DiscussionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "DiscussionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Discussion",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v9/*: any*/),
                      (v7/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "user",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v5/*: any*/),
                          (v3/*: any*/),
                          (v2/*: any*/),
                          (v8/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "postQuery",
    "id": null,
    "text": "query postQuery(\n  $discussionId: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $discussionId) {\n    ...FullPost_discussion\n    id\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n\nfragment FullPost_discussion on Discussion {\n  id\n  _id\n  name\n  body\n  createdAt\n  updatedAt\n  reads\n  ...DiscussionLike_discussion\n  excerpt(size: 30)\n  commentCount\n  featurePhoto {\n    url\n    height\n    width\n    id\n  }\n  publicUrl\n  group {\n    _id\n    id\n    name\n    permalink\n    publicUrl\n  }\n  user {\n    id\n    _id\n    username\n    name\n    profilePicture(size: 250)\n    profilePictureName\n    bio\n    publicUrl\n  }\n  parsedBody\n  hasPoll\n  otherUsersPosts(first: 4) {\n    edges {\n      node {\n        id\n        _id\n        name\n        permalink\n        createdAt\n        user {\n          id\n          _id\n          username\n          name\n          publicUrl\n        }\n      }\n    }\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '97e214ccf84f3ce60e9d57fb9f997aa0';
module.exports = node;
