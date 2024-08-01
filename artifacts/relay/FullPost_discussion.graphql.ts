/**
 * @generated SignedSource<<c3058ec5675d1e079493edcadecfa07b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FullPost_discussion$data = {
  readonly _id: string;
  readonly body: string | null | undefined;
  readonly commentCount: number | null | undefined;
  readonly createdAt: number | null | undefined;
  readonly excerpt: string | null | undefined;
  readonly featurePhoto: {
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
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
  readonly otherUsersPosts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly _id: string;
        readonly createdAt: number | null | undefined;
        readonly id: string;
        readonly name: string | null | undefined;
        readonly permalink: string | null | undefined;
        readonly user: {
          readonly _id: string;
          readonly id: string;
          readonly name: string | null | undefined;
          readonly publicUrl: string | null | undefined;
          readonly username: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly parsedBody: string | null | undefined;
  readonly publicUrl: string | null | undefined;
  readonly reads: string | null | undefined;
  readonly updatedAt: number | null | undefined;
  readonly user: {
    readonly _id: string;
    readonly bio: string | null | undefined;
    readonly id: string;
    readonly name: string | null | undefined;
    readonly profilePicture: string | null | undefined;
    readonly profilePictureName: string | null | undefined;
    readonly publicUrl: string | null | undefined;
    readonly username: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"DiscussionLike_discussion" | "Poll_discussion">;
  readonly " $fragmentType": "FullPost_discussion";
};
export type FullPost_discussion$key = {
  readonly " $data"?: FullPost_discussion$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullPost_discussion">;
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
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publicUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullPost_discussion",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reads",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion"
    },
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
      "name": "excerpt",
      "storageKey": "excerpt(size:30)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentCount",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
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
        }
      ],
      "storageKey": null
    },
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Group",
      "kind": "LinkedField",
      "name": "group",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        (v2/*: any*/),
        (v5/*: any*/),
        (v4/*: any*/)
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v6/*: any*/),
        (v2/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "profilePictureName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bio",
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
      "name": "parsedBody",
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
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 4
        }
      ],
      "concreteType": "DiscussionConnection",
      "kind": "LinkedField",
      "name": "otherUsersPosts",
      "plural": false,
      "selections": [
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
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v5/*: any*/),
                (v3/*: any*/),
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
                    (v6/*: any*/),
                    (v2/*: any*/),
                    (v4/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "otherUsersPosts(first:4)"
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

(node as any).hash = "e8b925ef9ff94971d96dd6d4dbc99dcf";

export default node;
