/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CommentListItem_comment$ref = any;
type DiscussionLike_discussion$ref = any;
type Poll_discussion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostListItem_discussion$ref: FragmentReference;
declare export opaque type PostListItem_discussion$fragmentType: PostListItem_discussion$ref;
export type PostListItem_discussion = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +reads: ?string,
  +publicUrl: ?string,
  +parsedExcerpt: ?string,
  +wordCount: ?number,
  +commentCount: ?number,
  +permalink: ?string,
  +comments: ?{|
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +excerpt: ?string,
        +$fragmentRefs: CommentListItem_comment$ref,
      |}
    |}>,
  |},
  +createdAt: ?number,
  +user: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +username: ?string,
    +profilePicture: ?string,
    +profilePictureName: ?string,
  |},
  +group: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +permalink: ?string,
    +publicUrl: ?string,
  |},
  +featurePhoto: ?{|
    +id: string,
    +_id: string,
    +height: ?number,
    +width: ?number,
    +name: ?string,
  |},
  +hasPoll: ?boolean,
  +$fragmentRefs: DiscussionLike_discussion$ref & Poll_discussion$ref,
  +$refType: PostListItem_discussion$ref,
|};
export type PostListItem_discussion$data = PostListItem_discussion;
export type PostListItem_discussion$key = {
  +$data?: PostListItem_discussion$data,
  +$fragmentRefs: PostListItem_discussion$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
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
  "name": "publicUrl",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PostListItem_discussion",
  "type": "Discussion",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "comments"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "reads",
      "args": null,
      "storageKey": null
    },
    (v3/*: any*/),
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
    (v4/*: any*/),
    {
      "kind": "LinkedField",
      "alias": "comments",
      "name": "__PostListItem_comments_connection",
      "storageKey": null,
      "args": null,
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
            },
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
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "excerpt",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "CommentListItem_comment",
                  "args": null
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
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
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
          "name": "profilePicture",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profilePictureName",
          "args": null,
          "storageKey": null
        }
      ]
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v4/*: any*/),
        (v3/*: any*/)
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
        (v0/*: any*/),
        (v1/*: any*/),
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
        (v2/*: any*/)
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
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Poll_discussion",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb465ec4e612a4557c20b6bd51462e47';
module.exports = node;
