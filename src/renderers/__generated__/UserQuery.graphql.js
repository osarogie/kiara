/**
 * @flow
 * @relayHash 0ac28ced9012ff0d8549e68ddbf5360a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type User_discussionList$ref = any;
type User_groupList$ref = any;
type User_user$ref = any;
export type UserQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type UserQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: User_user$ref & User_discussionList$ref & User_groupList$ref
  |}
|};
export type UserQuery = {|
  variables: UserQueryVariables,
  response: UserQueryResponse,
|};
*/


/*
query UserQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  user(id: $id) {
    ...User_user
    ...User_discussionList
    ...User_groupList
    id
  }
}

fragment User_user on User {
  id
  _id
  name
  bio
  username
  profile_picture_name
  discussion_count
  follower_count
  following_count
  ...FollowButton_user
}

fragment User_discussionList on User {
  discussions(first: $count, after: $cursor, by_latest: true) {
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

fragment User_groupList on User {
  groups_in(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...GroupListItem_group
        __typename
      }
      cursor
    }
  }
}

fragment GroupListItem_group on Group {
  id
  _id
  name
  permalink
  header_image {
    name
    id
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

fragment FollowButton_user on User {
  _id
  viewer_follows
  follows_viewer
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
  "name": "username",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profile_picture_name",
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
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor",
  "type": "String"
},
v8 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v9 = [
  v7,
  {
    "kind": "Literal",
    "name": "by_latest",
    "value": true,
    "type": "Boolean"
  },
  v8
],
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    v10,
    v11
  ]
},
v13 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 3,
    "type": "Int"
  }
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created_at",
  "args": null,
  "storageKey": null
},
v15 = {
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
    v4,
    v5
  ]
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v19 = [
  v7,
  v8
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserQuery",
  "id": null,
  "text": "query UserQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  user(id: $id) {\n    ...User_user\n    ...User_discussionList\n    ...User_groupList\n    id\n  }\n}\n\nfragment User_user on User {\n  id\n  _id\n  name\n  bio\n  username\n  profile_picture_name\n  discussion_count\n  follower_count\n  following_count\n  ...FollowButton_user\n}\n\nfragment User_discussionList on User {\n  discussions(first: $count, after: $cursor, by_latest: true) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...PostListItem_discussion\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment User_groupList on User {\n  groups_in(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...GroupListItem_group\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment GroupListItem_group on Group {\n  id\n  _id\n  name\n  permalink\n  header_image {\n    name\n    id\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  public_url\n  parsed_excerpt(size: 30)\n  word_count\n  comment_count\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  created_at\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n  }\n  feature_photo {\n    id\n    _id\n    height\n    width\n    name\n  }\n  ...DiscussionLike_discussion\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  created_at\n  discussion_id\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n\nfragment FollowButton_user on User {\n  _id\n  viewer_follows\n  follows_viewer\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "User_user",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "User_discussionList",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "User_groupList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "discussion_count",
            "args": null,
            "storageKey": null
          },
          v2,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bio",
            "args": null,
            "storageKey": null
          },
          v4,
          v5,
          v6,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "follower_count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "following_count",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewer_follows",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "follows_viewer",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "discussions",
            "storageKey": null,
            "args": v9,
            "concreteType": "DiscussionConnection",
            "plural": false,
            "selections": [
              v12,
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
                        "args": v13,
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
                              v10,
                              v11,
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
                                  v2,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "excerpt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v6,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "body",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v14,
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
                                      v2,
                                      v6
                                    ]
                                  },
                                  v15,
                                  v16
                                ]
                              },
                              v17
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": v13,
                        "handle": "connection",
                        "key": "PostListItem_comments",
                        "filters": []
                      },
                      v2,
                      v3,
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
                      v18,
                      v6,
                      v14,
                      v15,
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
                          v6,
                          v3,
                          v18
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
                          v2,
                          v6,
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
                          v3
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
                      v16
                    ]
                  },
                  v17
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "discussions",
            "args": v9,
            "handle": "connection",
            "key": "User_discussions",
            "filters": [
              "by_latest"
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groups_in",
            "storageKey": null,
            "args": v19,
            "concreteType": "GroupConnection",
            "plural": false,
            "selections": [
              v12,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "GroupEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Group",
                    "plural": false,
                    "selections": [
                      v2,
                      v6,
                      v3,
                      v18,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "header_image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Photo",
                        "plural": false,
                        "selections": [
                          v3,
                          v2
                        ]
                      },
                      v16
                    ]
                  },
                  v17
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "groups_in",
            "args": v19,
            "handle": "connection",
            "key": "User_groups_in",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ef40dd494aa11d02c68e9f8dcb9686a';
module.exports = node;
