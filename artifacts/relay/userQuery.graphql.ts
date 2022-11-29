/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type userQueryVariables = {
    count: number;
    cursor?: string | null;
    userId: string;
};
export type userQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"User_user" | "User_discussionList" | "User_groupList">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Viewer_viewer">;
};
export type userQuery = {
    readonly response: userQueryResponse;
    readonly variables: userQueryVariables;
};



/*
query userQuery(
  $count: Int!
  $cursor: String
  $userId: ID!
) {
  ...Viewer_viewer
  user(id: $userId) {
    ...User_user
    ...User_discussionList
    ...User_groupList
    id
  }
}

fragment CommentListItem_comment on Comment {
  id
  _id
  body
  createdAt
  discussionId
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
    profilePicture
    profilePictureName
  }
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewerDoesLike
  likeCount
}

fragment FollowButton_user on User {
  _id
  name
  viewerFollows
  followsViewer
}

fragment GroupListItem_group on Group {
  id
  _id
  name
  permalink
  publicUrl
  headerImage {
    name
    id
  }
}

fragment Poll_discussion on Discussion {
  votingHasEnded
  viewerHasVoted
  hideVotes
  hasPoll
  viewerOwns
  voteCount
  pollClosesAt
  poll(first: 20) {
    edges {
      node {
        id
        _id
        title
        voteCount
        viewerSelected
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

fragment PostListItem_discussion on Discussion {
  id
  _id
  name
  reads
  publicUrl
  parsedExcerpt(size: 30)
  wordCount
  commentCount
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
  createdAt
  user {
    id
    _id
    name
    username
    profilePicture
    profilePictureName
  }
  group {
    id
    _id
    name
    permalink
    publicUrl
  }
  featurePhoto {
    id
    _id
    height
    width
    name
  }
  hasPoll
  ...DiscussionLike_discussion
  ...Poll_discussion
}

fragment User_discussionList on User {
  discussions(first: $count, after: $cursor, byLatest: true) {
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
  groupsIn(first: $count, after: $cursor) {
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

fragment User_user on User {
  id
  _id
  name
  bio
  username
  profilePicture(size: 250)
  profilePictureName
  discussionCount
  followerCount
  followingCount
  isViewer
  ...FollowButton_user
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePictureName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor"
},
v8 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count"
},
v9 = [
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "byLatest",
    "value": true
  },
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUrl",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
},
v15 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 3
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v5/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "voteCount",
  "storageKey": null
},
v21 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v22 = [
  (v7/*: any*/),
  (v8/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "userQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_discussionList"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_groupList"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Viewer_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 50
              }
            ],
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": "profilePicture(size:50)"
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v5/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bio",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 250
              }
            ],
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": "profilePicture(size:250)"
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "discussionCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followerCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followingCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isViewer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerFollows",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followsViewer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v9/*: any*/),
            "concreteType": "DiscussionConnection",
            "kind": "LinkedField",
            "name": "discussions",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "DiscussionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Discussion",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "reads",
                        "storageKey": null
                      },
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": 30
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "parsedExcerpt",
                        "storageKey": "parsedExcerpt(size:30)"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "wordCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "commentCount",
                        "storageKey": null
                      },
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "concreteType": "CommentConnection",
                        "kind": "LinkedField",
                        "name": "comments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              (v11/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "hasPreviousPage",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startCursor",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommentEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Comment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "excerpt",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "body",
                                    "storageKey": null
                                  },
                                  (v16/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "discussionId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Discussion",
                                    "kind": "LinkedField",
                                    "name": "discussion",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      (v5/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v17/*: any*/),
                                  (v18/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "comments(last:3)"
                      },
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "PostListItem_comments",
                        "kind": "LinkedHandle",
                        "name": "comments"
                      },
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Group",
                        "kind": "LinkedField",
                        "name": "group",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v5/*: any*/),
                          (v2/*: any*/),
                          (v14/*: any*/),
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Photo",
                        "kind": "LinkedField",
                        "name": "featurePhoto",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPoll",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerDoesLike",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "likeCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "votingHasEnded",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerHasVoted",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hideVotes",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerOwns",
                        "storageKey": null
                      },
                      (v20/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "pollClosesAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v21/*: any*/),
                        "concreteType": "DiscussionOptionConnection",
                        "kind": "LinkedField",
                        "name": "poll",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DiscussionOptionEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "DiscussionOption",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/),
                                  (v5/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  (v20/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "viewerSelected",
                                    "storageKey": null
                                  },
                                  (v18/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v19/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "poll(first:20)"
                      },
                      {
                        "alias": null,
                        "args": (v21/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "PostListItem_poll",
                        "kind": "LinkedHandle",
                        "name": "poll"
                      },
                      (v18/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v19/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v9/*: any*/),
            "filters": [
              "byLatest"
            ],
            "handle": "connection",
            "key": "User_discussions",
            "kind": "LinkedHandle",
            "name": "discussions"
          },
          {
            "alias": null,
            "args": (v22/*: any*/),
            "concreteType": "GroupConnection",
            "kind": "LinkedField",
            "name": "groupsIn",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Group",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v14/*: any*/),
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Photo",
                        "kind": "LinkedField",
                        "name": "headerImage",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v18/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v19/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v22/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_groupsIn",
            "kind": "LinkedHandle",
            "name": "groupsIn"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "80e89fd734df5408d5a5f5f098c298af",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery(\n  $count: Int!\n  $cursor: String\n  $userId: ID!\n) {\n  ...Viewer_viewer\n  user(id: $userId) {\n    ...User_user\n    ...User_discussionList\n    ...User_groupList\n    id\n  }\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  createdAt\n  discussionId\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n\nfragment GroupListItem_group on Group {\n  id\n  _id\n  name\n  permalink\n  publicUrl\n  headerImage {\n    name\n    id\n  }\n}\n\nfragment Poll_discussion on Discussion {\n  votingHasEnded\n  viewerHasVoted\n  hideVotes\n  hasPoll\n  viewerOwns\n  voteCount\n  pollClosesAt\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        voteCount\n        viewerSelected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  reads\n  publicUrl\n  parsedExcerpt(size: 30)\n  wordCount\n  commentCount\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  createdAt\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n    publicUrl\n  }\n  featurePhoto {\n    id\n    _id\n    height\n    width\n    name\n  }\n  hasPoll\n  ...DiscussionLike_discussion\n  ...Poll_discussion\n}\n\nfragment User_discussionList on User {\n  discussions(first: $count, after: $cursor, byLatest: true) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...PostListItem_discussion\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment User_groupList on User {\n  groupsIn(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...GroupListItem_group\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment User_user on User {\n  id\n  _id\n  name\n  bio\n  username\n  profilePicture(size: 250)\n  profilePictureName\n  discussionCount\n  followerCount\n  followingCount\n  isViewer\n  ...FollowButton_user\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9a11b56df78b7087f10230e096d8a181';
export default node;
