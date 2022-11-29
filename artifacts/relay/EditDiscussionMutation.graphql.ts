/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DraftEntityMutability = "IMMUTABLE" | "MUTABLE" | "SEGMENTED" | "%future added value";
export type EditDiscussionInput = {
    id: string;
    name?: string | null;
    body?: string | null;
    groupId?: string | null;
    photo?: string | null;
    isHtml?: boolean | null;
    content?: DraftContentInput | null;
    clientMutationId?: string | null;
};
export type DraftContentInput = {
    blocks: Array<DraftBlockInput>;
    entityMap?: Array<DraftEntityInput> | null;
};
export type DraftBlockInput = {
    key: string;
    text?: string | null;
    type: string;
    depth: number;
    inlineStyleRanges?: Array<InlineStyleRangeInputType> | null;
    entityRanges?: Array<EntityRangeInputType> | null;
    data?: DraftDataInput | null;
};
export type InlineStyleRangeInputType = {
    offset: number;
    length: number;
    style: string;
};
export type EntityRangeInputType = {
    offset: number;
    length: number;
    key: number;
};
export type DraftDataInput = {
    href?: string | null;
};
export type DraftEntityInput = {
    type?: string | null;
    mutability?: DraftEntityMutability | null;
    data?: DraftEntityDataInput | null;
};
export type DraftEntityDataInput = {
    type?: string | null;
    url?: string | null;
    html?: string | null;
    href?: string | null;
    target?: string | null;
    size?: string | null;
    align?: string | null;
    width?: number | null;
    height?: number | null;
    caption?: DraftContentInput | null;
};
export type EditDiscussionMutationVariables = {
    input: EditDiscussionInput;
};
export type EditDiscussionMutationResponse = {
    readonly editDiscussion: {
        readonly discussion: {
            readonly user: {
                readonly " $fragmentRefs": FragmentRefs<"UserListItem_user">;
            } | null;
            readonly " $fragmentRefs": FragmentRefs<"PostListItem_discussion">;
        } | null;
    } | null;
};
export type EditDiscussionMutation = {
    readonly response: EditDiscussionMutationResponse;
    readonly variables: EditDiscussionMutationVariables;
};



/*
mutation EditDiscussionMutation(
  $input: EditDiscussionInput!
) {
  editDiscussion(input: $input) {
    discussion {
      ...PostListItem_discussion
      user {
        ...UserListItem_user
        id
      }
      id
    }
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

fragment UserListItem_user on User {
  id
  _id
  name
  username
  bio
  profilePictureName
  ...FollowButton_user
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 3
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePicture",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePictureName",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "voteCount",
  "storageKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditDiscussionPayload",
        "kind": "LinkedField",
        "name": "editDiscussion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Discussion",
            "kind": "LinkedField",
            "name": "discussion",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UserListItem_user"
                  }
                ],
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PostListItem_discussion"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditDiscussionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditDiscussionPayload",
        "kind": "LinkedField",
        "name": "editDiscussion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Discussion",
            "kind": "LinkedField",
            "name": "discussion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reads",
                "storageKey": null
              },
              (v5/*: any*/),
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
              (v6/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                      (v8/*: any*/),
                      (v9/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "excerpt",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "body",
                            "storageKey": null
                          },
                          (v10/*: any*/),
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
                              (v2/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/),
                              (v13/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v14/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "comments(last:3)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "PostListItem_comments",
                "kind": "LinkedHandle",
                "name": "comments"
              },
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bio",
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
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "group",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
                  (v5/*: any*/)
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
                  (v2/*: any*/),
                  (v3/*: any*/),
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
                  (v4/*: any*/)
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
              (v16/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pollClosesAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v17/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "viewerSelected",
                            "storageKey": null
                          },
                          (v14/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
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
                      (v9/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "poll(first:20)"
              },
              {
                "alias": null,
                "args": (v17/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "PostListItem_poll",
                "kind": "LinkedHandle",
                "name": "poll"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "adc636870cb1459a41020e09a82dffdb",
    "id": null,
    "metadata": {},
    "name": "EditDiscussionMutation",
    "operationKind": "mutation",
    "text": "mutation EditDiscussionMutation(\n  $input: EditDiscussionInput!\n) {\n  editDiscussion(input: $input) {\n    discussion {\n      ...PostListItem_discussion\n      user {\n        ...UserListItem_user\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment CommentListItem_comment on Comment {\n  id\n  _id\n  body\n  createdAt\n  discussionId\n  excerpt\n  discussion {\n    id\n    _id\n  }\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n\nfragment FollowButton_user on User {\n  _id\n  name\n  viewerFollows\n  followsViewer\n}\n\nfragment Poll_discussion on Discussion {\n  votingHasEnded\n  viewerHasVoted\n  hideVotes\n  hasPoll\n  viewerOwns\n  voteCount\n  pollClosesAt\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        voteCount\n        viewerSelected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PostListItem_discussion on Discussion {\n  id\n  _id\n  name\n  reads\n  publicUrl\n  parsedExcerpt(size: 30)\n  wordCount\n  commentCount\n  permalink\n  comments(last: 3) {\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n    edges {\n      node {\n        id\n        excerpt\n        ...CommentListItem_comment\n        __typename\n      }\n      cursor\n    }\n  }\n  createdAt\n  user {\n    id\n    _id\n    name\n    username\n    profilePicture\n    profilePictureName\n  }\n  group {\n    id\n    _id\n    name\n    permalink\n    publicUrl\n  }\n  featurePhoto {\n    id\n    _id\n    height\n    width\n    name\n  }\n  hasPoll\n  ...DiscussionLike_discussion\n  ...Poll_discussion\n}\n\nfragment UserListItem_user on User {\n  id\n  _id\n  name\n  username\n  bio\n  profilePictureName\n  ...FollowButton_user\n}\n"
  }
};
})();
(node as any).hash = '528396ed6c1674dfde8c5a69fd569d81';
export default node;
