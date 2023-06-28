/**
 * @generated SignedSource<<f75803bb7dccce71752914fba4f56df2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type resetPasswordQuery$variables = {
  token: string;
};
export type resetPasswordQuery$data = {
  readonly checkPasswordResetToken: {
    readonly id: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"Viewer_viewer">;
};
export type resetPasswordQuery = {
  response: resetPasswordQuery$data;
  variables: resetPasswordQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "token",
      "variableName": "token"
    }
  ],
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "checkPasswordResetToken",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "resetPasswordQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Viewer_viewer"
      },
      (v2/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "resetPasswordQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "c3e3fad1b69947b7eccd2e106467b836",
    "id": null,
    "metadata": {},
    "name": "resetPasswordQuery",
    "operationKind": "query",
    "text": "query resetPasswordQuery(\n  $token: String!\n) {\n  ...Viewer_viewer\n  checkPasswordResetToken(token: $token) {\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "446537028e3e08b33e1c8f270cf716a7";

export default node;
