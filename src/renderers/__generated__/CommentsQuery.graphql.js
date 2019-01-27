/**
 * @flow
 * @relayHash 1aef79f75eee97b7c040177269babbfc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Comments_commentList$ref = any;
type FullPost_discussion$ref = any;
type PostThumb_discussion$ref = any;
export type CommentsQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type CommentsQueryResponse = {|
  +discussion: ?{|
    +$fragmentRefs: FullPost_discussion$ref & PostThumb_discussion$ref & Comments_commentList$ref
  |}
|};
export type CommentsQuery = {|
  variables: CommentsQueryVariables,
  response: CommentsQueryResponse,
|};
*/


/*
query CommentsQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  discussion(id: $id) {
    ...FullPost_discussion
    ...PostThumb_discussion
    ...Comments_commentList
    id
  }
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

fragment PostThumb_discussion on Discussion {
  id
  _id
  name
  excerpt(size: 10)
  word_count
  created_at
  user {
    id
    _id
    name
    username
    profile_picture_name
  }
  group {
    id
    _id
    name
    permalink
  }
}

fragment Comments_commentList on Discussion {
  comments(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...CommentListItem_comment
        __typename
      }
      cursor
    }
  }
}

fragment CommentListItem_comment on Comment {
  id
  _id
  body
  created_at
  discussion_id
  excerpt
  discussion {
    id
    _id
  }
  user {
    id
    _id
    name
    username
    profile_picture_name
  }
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
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created_at",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profile_picture_name",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CommentsQuery",
  "id": null,
  "text": "query CommentsQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  discussion(id: $id) {\n    ...FullPost_discussion\n    ...PostThumb_discussion\n    ...Comments_commentList\n    id\n  }\n}\n\nfragment FullPost_discussion on Discussion {\n  id\n  _id\n  name\n  body\n  created_at\n  ...DiscussionLike_discussion\n  comment_count\n  feature_photo {\n    url\n    height\n    width\n    id\n  }\n  public_url\n  group {\n    _id\n    id\n    name\n    permalink\n  }\n  user {\n    id\n    _id\n    username\n    name\n    profile_picture_name\n    bio\n  }\n  parsed_body\n}\n\nfragment PostThumb_discussion on Discussion {\n  id\n  _id\n  name\n  excerpt(size: 10)\n  word_count\n  created_at\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n  }\n}\n\nfragment Comments_commentList on Discussion {\n  comments(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  created_at\n  discussion_id\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CommentsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
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
          },
          {
            "kind": "FragmentSpread",
            "name": "PostThumb_discussion",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Comments_commentList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CommentsQuery",
    "argumentDefinitions": v0,
    "selections": [
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
              v2
            ]
          },
          v2,
          v3,
          v4,
          v5,
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
            "name": "comment_count",
            "args": null,
            "storageKey": null
          },
          v6,
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
              v6,
              v2,
              v3,
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
              v2,
              v6,
              v7,
              v3,
              v8,
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
            "name": "word_count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": v9,
            "concreteType": "CommentConnection",
            "plural": false,
            "selections": [
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
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CommentEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [
                      v2,
                      v6,
                      v4,
                      v5,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "discussion_id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "excerpt",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "discussion",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Discussion",
                        "plural": false,
                        "selections": [
                          v2,
                          v6
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
                          v2,
                          v6,
                          v3,
                          v7,
                          v8
                        ]
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
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "comments",
            "args": v9,
            "handle": "connection",
            "key": "Comment_comments",
            "filters": []
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '30d931ae54b7c7127c9ecb89e291900d';
module.exports = node;
