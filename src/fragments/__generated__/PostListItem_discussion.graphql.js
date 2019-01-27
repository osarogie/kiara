/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CommentListItem_comment$ref = any;
type DiscussionLike_discussion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostListItem_discussion$ref: FragmentReference;
export type PostListItem_discussion = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +public_url: ?string,
  +parsed_excerpt: ?string,
  +word_count: ?number,
  +comment_count: ?number,
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
  +created_at: ?number,
  +user: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +username: ?string,
    +profile_picture_name: ?string,
  |},
  +group: ?{|
    +id: string,
    +_id: string,
    +name: ?string,
    +permalink: ?string,
  |},
  +feature_photo: ?{|
    +id: string,
    +_id: string,
    +height: ?number,
    +width: ?number,
    +name: ?string,
  |},
  +has_poll: ?boolean,
  +poll: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +_id: string,
        +title: ?string,
        +vote_count: ?number,
        +viewer_selected: ?boolean,
      |}
    |}>
  |},
  +$fragmentRefs: DiscussionLike_discussion$ref,
  +$refType: PostListItem_discussion$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
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
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
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
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "poll"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
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
            v0,
            v1,
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
                {
                  "kind": "FragmentSpread",
                  "name": "CommentListItem_comment",
                  "args": null
                },
                v3
              ]
            },
            v4
          ]
        }
      ]
    },
    v2,
    v5,
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
    v6,
    v7,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "created_at",
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
        v2,
        v7,
        v5,
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
        v7,
        v5,
        v6
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
        v5
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
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "poll",
      "name": "__PostListItem_poll_connection",
      "storageKey": null,
      "args": null,
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
                v7,
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
                v3
              ]
            },
            v4
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
            v1,
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ab49ec5c1c20e993a9305710170e03f';
module.exports = node;
