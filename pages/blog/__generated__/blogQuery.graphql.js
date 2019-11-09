/**
 * @flow
 * @relayHash 39f2e709e392d849d17b36561abbf8a3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Group_discussionList$ref = any;
type Group_group$ref = any;
type Viewer_viewer$ref = any;
export type blogQueryVariables = {|
  count: number,
  cursor?: ?string,
  domain?: ?string,
|};
export type blogQueryResponse = {|
  +blog: ?{|
    +id: string,
    +name: ?string,
    +publicUrl: ?string,
    +$fragmentRefs: Group_group$ref & Group_discussionList$ref,
  |},
  +$fragmentRefs: Viewer_viewer$ref,
|};
export type blogQuery = {|
  variables: blogQueryVariables,
  response: blogQueryResponse,
|};
*/


/*
query blogQuery(
  $count: Int!
  $cursor: String
  $domain: String
) {
  ...Viewer_viewer
  blog(domain: $domain) {
    id
    name
    publicUrl
    ...Group_group
    ...Group_discussionList
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

fragment Group_discussionList on Group {
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

fragment Group_group on Group {
  id
  _id
  name
  permalink
  body
  tagline
  viewerIsAMember
  viewerIsOwner
  ...JoinButton_group
  headerImage {
    name
    height
    width
    url
    id
  }
  user {
    id
    _id
    name
    username
    profilePictureName
  }
  createdAt
  updatedAt
}

fragment JoinButton_group on Group {
  _id
  viewerIsAMember
  isPrivate
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
    "name": "domain",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "domain",
    "variableName": "domain"
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
  "name": "publicUrl",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profilePictureName",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v13 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Literal",
    "name": "byLatest",
    "value": true
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
    "value": 3
  }
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v7/*: any*/),
    (v3/*: any*/),
    (v5/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profilePicture",
      "args": null,
      "storageKey": null
    },
    (v6/*: any*/)
  ]
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
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "voteCount",
  "args": null,
  "storageKey": null
},
v21 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "blogQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blog",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "name": "blogQuery",
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
          (v3/*: any*/),
          (v5/*: any*/),
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
          (v6/*: any*/),
          (v7/*: any*/),
          (v2/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "blog",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "tagline",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewerIsAMember",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "viewerIsOwner",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isPrivate",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "headerImage",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
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
              (v2/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          },
          (v12/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "discussions",
            "storageKey": null,
            "args": (v13/*: any*/),
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
                  (v14/*: any*/),
                  (v15/*: any*/)
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
                      (v2/*: any*/),
                      (v7/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "reads",
                        "args": null,
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "parsedExcerpt",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": 30
                          }
                        ],
                        "storageKey": "parsedExcerpt(size:30)"
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "wordCount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "commentCount",
                        "args": null,
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": "comments(last:3)",
                        "args": (v16/*: any*/),
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
                              (v14/*: any*/),
                              (v15/*: any*/),
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
                                  (v2/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "excerpt",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v7/*: any*/),
                                  (v9/*: any*/),
                                  (v12/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "discussionId",
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
                                      (v2/*: any*/),
                                      (v7/*: any*/)
                                    ]
                                  },
                                  (v17/*: any*/),
                                  (v18/*: any*/)
                                ]
                              },
                              (v19/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": (v16/*: any*/),
                        "handle": "connection",
                        "key": "PostListItem_comments",
                        "filters": []
                      },
                      (v12/*: any*/),
                      (v17/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "group",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Group",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v7/*: any*/),
                          (v3/*: any*/),
                          (v8/*: any*/),
                          (v4/*: any*/)
                        ]
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
                          (v2/*: any*/),
                          (v7/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasPoll",
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
                        "name": "votingHasEnded",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "viewerHasVoted",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hideVotes",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "viewerOwns",
                        "args": null,
                        "storageKey": null
                      },
                      (v20/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "pollClosesAt",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "poll",
                        "storageKey": "poll(first:20)",
                        "args": (v21/*: any*/),
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
                                  (v2/*: any*/),
                                  (v7/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "title",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v20/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "viewerSelected",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v18/*: any*/)
                                ]
                              },
                              (v19/*: any*/)
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
                              (v15/*: any*/),
                              (v14/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "poll",
                        "args": (v21/*: any*/),
                        "handle": "connection",
                        "key": "PostListItem_poll",
                        "filters": []
                      },
                      (v18/*: any*/)
                    ]
                  },
                  (v19/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "discussions",
            "args": (v13/*: any*/),
            "handle": "connection",
            "key": "Group_discussions",
            "filters": [
              "byLatest"
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "blogQuery",
    "id": null,
    "text": "query blogQuery(\n  $count: Int!\n  $cursor: String\n  $domain: String\n) {\n  ...Viewer_viewer\n  blog(domain: $domain) {\n    id\n    name\n    publicUrl\n    ...Group_group\n    ...Group_discussionList\n  }\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  createdAt\n  discussionId\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n\nfragment Group_discussionList on Group {\n  discussions(first: $count, after: $cursor, byLatest: true) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...PostListItem_discussion\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment Group_group on Group {\n  id\n  _id\n  name\n  permalink\n  body\n  tagline\n  viewerIsAMember\n  viewerIsOwner\n  ...JoinButton_group\n  headerImage {\n    name\n    height\n    width\n    url\n    id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profilePictureName\n  }\n  createdAt\n  updatedAt\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewerIsAMember\n  isPrivate\n}\n\nfragment Poll_discussion on Discussion {\n  votingHasEnded\n  viewerHasVoted\n  hideVotes\n  hasPoll\n  viewerOwns\n  voteCount\n  pollClosesAt\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        voteCount\n        viewerSelected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  reads\n  publicUrl\n  parsedExcerpt(size: 30)\n  wordCount\n  commentCount\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  createdAt\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n    publicUrl\n  }\n  featurePhoto {\n    id\n    _id\n    height\n    width\n    name\n  }\n  hasPoll\n  ...DiscussionLike_discussion\n  ...Poll_discussion\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd394faabddb4c69256bd3c6985db606';
module.exports = node;
