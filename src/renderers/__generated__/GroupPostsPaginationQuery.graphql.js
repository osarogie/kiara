/**
 * @flow
 * @relayHash 4d79014523623f2799eba5c40661e933
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_discussionList$ref = any;
export type GroupPostsPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type GroupPostsPaginationQueryResponse = {|
  +group: ?{|
    +$fragmentRefs: Group_discussionList$ref
  |}
|};
export type GroupPostsPaginationQuery = {|
  variables: GroupPostsPaginationQueryVariables,
  response: GroupPostsPaginationQueryResponse,
|};
*/


/*
query GroupPostsPaginationQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  group(id: $id) {
    ...Group_discussionList
    id
  }
}

fragment Group_discussionList on Group {
  discussions(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...PostListItem_discussion
        __typename
      }
      cursor
    }
  }
}

fragment PostListItem_discussion on Discussion {
  id
  _id
  name
  public_url
  parsed_excerpt(size: 30)
  word_count
  comment_count
  permalink
  comments(last: 3) {
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        id
        excerpt
        ...CommentListItem_comment
        __typename
      }
      cursor
    }
  }
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
  feature_photo {
    id
    _id
    height
    width
    name
  }
  ...DiscussionLike_discussion
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
v2 = [
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
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 3,
    "type": "Int"
  }
],
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
  "name": "_id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created_at",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v6,
    v7,
    v9,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "username",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profile_picture_name",
      "args": null,
      "storageKey": null
    }
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "GroupPostsPaginationQuery",
  "id": null,
  "text": "query GroupPostsPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  group(id: $id) {\n    ...Group_discussionList\n    id\n  }\n}\n\nfragment Group_discussionList on Group {\n  discussions(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...PostListItem_discussion\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  public_url\n  parsed_excerpt(size: 30)\n  word_count\n  comment_count\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  created_at\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n  }\n  feature_photo {\n    id\n    _id\n    height\n    width\n    name\n  }\n  ...DiscussionLike_discussion\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  created_at\n  discussion_id\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "GroupPostsPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Group_discussionList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GroupPostsPaginationQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "discussions",
            "storageKey": null,
            "args": v2,
            "concreteType": "DiscussionConnection",
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
                  v3,
                  v4
                ]
              },
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": "comments(last:3)",
                        "args": v5,
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
                              v3,
                              v4,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "hasPreviousPage",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "startCursor",
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
                                  v6,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "excerpt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v7,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "body",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v8,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "discussion_id",
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
                                      v6,
                                      v7
                                    ]
                                  },
                                  v10,
                                  v11
                                ]
                              },
                              v12
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": v5,
                        "handle": "connection",
                        "key": "PostListItem_comments",
                        "filters": []
                      },
                      v6,
                      v9,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "public_url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "parsed_excerpt",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": 30,
                            "type": "Int"
                          }
                        ],
                        "storageKey": "parsed_excerpt(size:30)"
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "word_count",
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
                      v13,
                      v7,
                      v8,
                      v10,
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
                          v7,
                          v9,
                          v13
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
                          v6,
                          v7,
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
                          v9
                        ]
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
                      v11
                    ]
                  },
                  v12
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "discussions",
            "args": v2,
            "handle": "connection",
            "key": "Group_discussions",
            "filters": null
          },
          v6
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e1230a1e4f957d76b93cfa4e7b316f6';
module.exports = node;
