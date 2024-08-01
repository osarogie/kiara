/**
 * @generated SignedSource<<68e1996b3cb21648f6b2777880b4e20e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostListItem_discussion$data = {
  readonly _id: string;
  readonly commentCount: number | null | undefined;
  readonly comments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly excerpt: string | null | undefined;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"CommentListItem_comment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
    };
  } | null | undefined;
  readonly createdAt: number | null | undefined;
  readonly featurePhoto: {
    readonly _id: string;
    readonly height: number | null | undefined;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly width: number | null | undefined;
  } | null | undefined;
  readonly group: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly permalink: string | null | undefined;
    readonly publicUrl: string | null | undefined;
  } | null | undefined;
  readonly hasPoll: boolean | null | undefined;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly parsedExcerpt: string | null | undefined;
  readonly permalink: string | null | undefined;
  readonly publicUrl: string | null | undefined;
  readonly reads: string | null | undefined;
  readonly user: {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly profilePicture: string | null | undefined;
    readonly profilePictureName: string | null | undefined;
    readonly username: string | null | undefined;
  } | null | undefined;
  readonly wordCount: number | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"DiscussionLike_discussion" | "Poll_discussion">;
  readonly " $fragmentType": "PostListItem_discussion";
};
export type PostListItem_discussion$key = {
  readonly " $data"?: PostListItem_discussion$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostListItem_discussion">;
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CommentListItem_comment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
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

(node as any).hash = "cb465ec4e612a4557c20b6bd51462e47";

export default node;
