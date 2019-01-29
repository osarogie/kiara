/**
 * @flow
 * @relayHash 5407fc6a08e7fd49e05cb903950b971a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_discussionList$ref = any;
type Group_group$ref = any;
export type groupQueryVariables = {|
  count: number,
  cursor?: ?string,
  id: string,
|};
export type groupQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |},
  +group: ?{|
    +$fragmentRefs: Group_group$ref & Group_discussionList$ref
  |},
|};
export type groupQuery = {|
  variables: groupQueryVariables,
  response: groupQueryResponse,
|};
*/


/*
query groupQuery(
  $count: Int!
  $cursor: String
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
    ...Group_group
    ...Group_discussionList
    id
  }
}

fragment Group_group on Group {
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
  has_poll
  ...DiscussionLike_discussion
  ...Poll_discussion
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

fragment Poll_discussion on Discussion {
  voting_has_ended
  hide_votes
  has_poll
  viewer_owns
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
  "name": "height",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "width",
  "args": null,
  "storageKey": null
},
v12 = {
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
},
v13 = [
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
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v16 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 3,
    "type": "Int"
  }
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created_at",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v20 = [
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
  "name": "groupQuery",
  "id": null,
  "text": "query groupQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  group(id: $id) {\n    ...Group_group\n    ...Group_discussionList\n    id\n  }\n}\n\nfragment Group_group on Group {\n  id\n  _id\n  name\n  permalink\n  body\n  viewer_is_a_member\n  ...JoinButton_group\n  header_image {\n    name\n    height\n    width\n    id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n}\n\nfragment Group_discussionList on Group {\n  discussions(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...PostListItem_discussion\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  public_url\n  parsed_excerpt(size: 30)\n  word_count\n  comment_count\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  created_at\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n  }\n  feature_photo {\n    id\n    _id\n    height\n    width\n    name\n  }\n  has_poll\n  ...DiscussionLike_discussion\n  ...Poll_discussion\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  created_at\n  discussion_id\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profile_picture_name\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewer_does_like\n  like_count\n}\n\nfragment Poll_discussion on Discussion {\n  voting_has_ended\n  hide_votes\n  has_poll\n  viewer_owns\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        vote_count\n        viewer_selected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewer_is_a_member\n  is_private\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "groupQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "Group_group",
            "args": null
          },
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
    "name": "groupQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewer_is_a_member",
            "args": null,
            "storageKey": null
          },
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
              v10,
              v11,
              v5
            ]
          },
          v12,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "discussions",
            "storageKey": null,
            "args": v13,
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
                  v14,
                  v15
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
                      v12,
                      v5,
                      v1,
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
                      v8,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": "comments(last:3)",
                        "args": v16,
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
                              v14,
                              v15,
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
                                  v5,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "excerpt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v4,
                                  v9,
                                  v17,
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
                                      v5,
                                      v4
                                    ]
                                  },
                                  v12,
                                  v18
                                ]
                              },
                              v19
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": v16,
                        "handle": "connection",
                        "key": "PostListItem_comments",
                        "filters": []
                      },
                      v17,
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
                          v5,
                          v4,
                          v1,
                          v8
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
                          v4,
                          v10,
                          v11,
                          v1
                        ]
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "poll",
                        "storageKey": "poll(first:20)",
                        "args": v20,
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
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "vote_count",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "viewer_selected",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v18
                                ]
                              },
                              v19
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
                              v15,
                              v14
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "poll",
                        "args": v20,
                        "handle": "connection",
                        "key": "PostListItem_poll",
                        "filters": []
                      },
                      v18
                    ]
                  },
                  v19
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "discussions",
            "args": v13,
            "handle": "connection",
            "key": "Group_discussions",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00bb492a6e088ec92c4edc7bcfe7803e';
module.exports = node;
