/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostListItem_discussion = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly reads: string | null;
    readonly publicUrl: string | null;
    readonly parsedExcerpt: string | null;
    readonly wordCount: number | null;
    readonly commentCount: number | null;
    readonly permalink: string | null;
    readonly comments: {
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly excerpt: string | null;
                readonly " $fragmentRefs": FragmentRefs<"CommentListItem_comment">;
            } | null;
        } | null> | null;
    } | null;
    readonly createdAt: number | null;
    readonly user: {
        readonly id: string;
        readonly _id: string;
        readonly name: string | null;
        readonly username: string | null;
        readonly profilePicture: string | null;
        readonly profilePictureName: string | null;
    } | null;
    readonly group: {
        readonly id: string;
        readonly _id: string;
        readonly name: string | null;
        readonly permalink: string | null;
        readonly publicUrl: string | null;
    } | null;
    readonly featurePhoto: {
        readonly id: string;
        readonly _id: string;
        readonly height: number | null;
        readonly width: number | null;
        readonly name: string | null;
    } | null;
    readonly hasPoll: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"DiscussionLike_discussion" | "Poll_discussion">;
    readonly " $refType": "PostListItem_discussion";
};
export type PostListItem_discussion$data = PostListItem_discussion;
export type PostListItem_discussion$key = {
    readonly " $data"?: PostListItem_discussion$data;
    readonly " $fragmentRefs": FragmentRefs<"PostListItem_discussion">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
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
  "name": "publicUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
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
  "name": "PostListItem_discussion",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reads",
      "storageKey": null
    },
    (v3/*: any*/),
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
    (v4/*: any*/),
    {
      "alias": "comments",
      "args": null,
      "concreteType": "CommentConnection",
      "kind": "LinkedField",
      "name": "__PostListItem_comments_connection",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "excerpt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CommentListItem_comment"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "profilePicture",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "profilePictureName",
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v4/*: any*/),
        (v3/*: any*/)
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
        (v0/*: any*/),
        (v1/*: any*/),
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Poll_discussion"
    }
  ],
  "type": "Discussion",
  "abstractKey": null
};
})();
(node as any).hash = 'cb465ec4e612a4557c20b6bd51462e47';
export default node;
