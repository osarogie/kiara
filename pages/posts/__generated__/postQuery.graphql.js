/**
 * @flow
 * @relayHash 0431632486792ee316b6a3feea40a1bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FullPost_discussion$ref = any;
export type postQueryVariables = {|
  id: string
|};
export type postQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
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
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
  }
  discussion(id: $id) {
    ...FullPost_discussion
    id
  }
}

fragment FullPost_discussion on Discussion {
  id
  _id
  name
  body
  created_at
  updated_at
  ...DiscussionLike_discussion
  excerpt(size: 10)
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
    profile_picture(size: 250)
    profile_picture_name
    bio
  }
  parsed_body
  has_poll
  ...Poll_discussion
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewer_does_like
  like_count
}

fragment Poll_discussion on Discussion {
  voting_has_ended
  hide_votes
  has_poll
  viewer_owns
  vote_count
  poll_closes_at
  poll(first: 20) {
    edges {
      node {
        id
        _id
        title
        vote_count
        viewer_selected
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
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
  "name": "vote_count",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "postQuery",
  "id": null,
  "text": "query postQuery(\n  $id: ID!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  discussion(id: $id) {\n    ...FullPost_discussion\n    id\n  }\n}\n\nfragment FullPost_discussion on Discussion {\n  id\n  _id\n  name\n  body\n  created_at\n  updated_at\n  ...DiscussionLike_discussion\n  excerpt(size: 10)\n  comment_count\n  feature_photo {\n    url\n    height\n    width\n    id\n  }\n  public_url\n  group {\n    _id\n    id\n    name\n    permalink\n  }\n  user {\n    id\n    _id\n    username\n    name\n    profile_picture(size: 250)\n    profile_picture_name\n    bio\n  }\n  parsed_body\n  has_poll\n  ...Poll_discussion\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n\nfragment Poll_discussion on Discussion {\n  voting_has_ended\n  hide_votes\n  has_poll\n  viewer_owns\n  vote_count\n  poll_closes_at\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        vote_count\n        viewer_selected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "postQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v6,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": v7,
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
      v6,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": v7,
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "public_url",
            "args": null,
            "storageKey": null
          },
          v5,
          v1,
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
            "name": "updated_at",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "like_count",
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
                "value": 10,
                "type": "Int"
              }
            ],
            "storageKey": "excerpt(size:10)"
          },
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
              v5
            ]
          },
          v4,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              v4,
              v5,
              v1,
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
              v5,
              v4,
              v2,
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profile_picture",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 250,
                    "type": "Int"
                  }
                ],
                "storageKey": "profile_picture(size:250)"
              },
              v3,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "has_poll",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "voting_has_ended",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "hide_votes",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewer_owns",
            "args": null,
            "storageKey": null
          },
          v8,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "poll_closes_at",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "poll",
            "storageKey": "poll(first:20)",
            "args": v9,
            "concreteType": "DiscussionOptionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "DiscussionOptionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DiscussionOption",
                    "plural": false,
                    "selections": [
                      v5,
                      v4,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      v8,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "viewer_selected",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "poll",
            "args": v9,
            "handle": "connection",
            "key": "PostListItem_poll",
            "filters": []
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ce760ad5a9d8464a9d5c916a91378ce';
module.exports = node;
