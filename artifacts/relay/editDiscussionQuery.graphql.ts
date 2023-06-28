/**
 * @generated SignedSource<<f8b9f9c83d2bd3b5307f466d2fe43d8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DraftEntityMutability = "IMMUTABLE" | "MUTABLE" | "SEGMENTED" | "%future added value";
export type editDiscussionQuery$variables = {
  id: string;
};
export type editDiscussionQuery$data = {
  readonly discussion: {
    readonly _id: string;
    readonly body: string | null;
    readonly content: {
      readonly blocks: ReadonlyArray<{
        readonly depth: number | null;
        readonly key: string | null;
        readonly text: string | null;
        readonly type: string | null;
      } | null> | null;
      readonly entityMap: ReadonlyArray<{
        readonly mutability: DraftEntityMutability | null;
        readonly type: string | null;
      } | null> | null;
    } | null;
    readonly featurePhoto: {
      readonly url: string | null;
    } | null;
    readonly group: {
      readonly _id: string;
      readonly name: string | null;
    } | null;
    readonly name: string | null;
    readonly permalink: string | null;
    readonly user: {
      readonly username: string | null;
    } | null;
    readonly viewerOwns: boolean | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"Viewer_viewer">;
};
export type editDiscussionQuery = {
  response: editDiscussionQuery$data;
  variables: editDiscussionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
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
  "name": "type",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "DraftContent",
  "kind": "LinkedField",
  "name": "content",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "DraftBlock",
      "kind": "LinkedField",
      "name": "blocks",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "depth",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "key",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DraftEntity",
      "kind": "LinkedField",
      "name": "entityMap",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mutability",
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerOwns",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "editDiscussionQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Viewer_viewer"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "kind": "LinkedField",
        "name": "discussion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/)
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
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v6/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "editDiscussionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v6/*: any*/),
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profilePictureName",
            "storageKey": null
          },
          (v2/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "kind": "LinkedField",
        "name": "discussion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v11/*: any*/)
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
              (v7/*: any*/),
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v6/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1973218e7b4c143809ca9a0868c640fd",
    "id": null,
    "metadata": {},
    "name": "editDiscussionQuery",
    "operationKind": "query",
    "text": "query editDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $id) {\n    _id\n    user {\n      username\n      id\n    }\n    content {\n      blocks {\n        depth\n        key\n        text\n        type\n      }\n      entityMap {\n        mutability\n        type\n      }\n    }\n    group {\n      _id\n      name\n      id\n    }\n    featurePhoto {\n      url\n      id\n    }\n    permalink\n    name\n    body\n    viewerOwns\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9017d312b2910358d3863093d7ecb9fc";

export default node;
