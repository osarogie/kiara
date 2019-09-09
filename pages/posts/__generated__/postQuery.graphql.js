/**
 * @flow
 * @relayHash e53b53e47169b96bf381d5567e57650a
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
  $id: ID!
) {
  ...Viewer_viewer
  discussion(id: $id) {
    ...FullPost_discussion
    id
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
  ...Poll_discussion
}

fragment DiscussionLike_discussion on Discussion {
  id
  _id
  viewerDoesLike
  likeCount
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
    "variableName": "id"
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
  "name": "publicUrl",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "voteCount",
  "args": null,
  "storageKey": null
},
v9 = [
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
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
          (v7/*: any*/),
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "permalink",
                "args": null,
                "storageKey": null
              },
              (v7/*: any*/)
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
              (v7/*: any*/)
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
          (v8/*: any*/),
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
            "args": (v9/*: any*/),
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
                      (v6/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "viewerSelected",
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
            "args": (v9/*: any*/),
            "handle": "connection",
            "key": "PostListItem_poll",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "postQuery",
    "id": null,
    "text": "query postQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $id) {\n    ...FullPost_discussion\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n\nfragment FullPost_discussion on Discussion {\n  id\n  _id\n  name\n  body\n  createdAt\n  updatedAt\n  reads\n  ...DiscussionLike_discussion\n  excerpt(size: 30)\n  commentCount\n  featurePhoto {\n    url\n    height\n    width\n    id\n  }\n  publicUrl\n  group {\n    _id\n    id\n    name\n    permalink\n    publicUrl\n  }\n  user {\n    id\n    _id\n    username\n    name\n    profilePicture(size: 250)\n    profilePictureName\n    bio\n    publicUrl\n  }\n  parsedBody\n  hasPoll\n  ...Poll_discussion\n}\n\nfragment DiscussionLike_discussion on Discussion {\n  id\n  _id\n  viewerDoesLike\n  likeCount\n}\n\nfragment Poll_discussion on Discussion {\n  votingHasEnded\n  viewerHasVoted\n  hideVotes\n  hasPoll\n  viewerOwns\n  voteCount\n  pollClosesAt\n  poll(first: 20) {\n    edges {\n      node {\n        id\n        _id\n        title\n        voteCount\n        viewerSelected\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4ad5c52d19927b6da8c1e32d5cbc49c';
module.exports = node;
