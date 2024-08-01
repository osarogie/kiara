/**
 * @generated SignedSource<<4560d8a629afd6a67bd570775c3aea77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type newGroupQuery$variables = Record<PropertyKey, never>;
export type newGroupQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Viewer_viewer">;
};
export type newGroupQuery = {
  response: newGroupQuery$data;
  variables: newGroupQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "newGroupQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Viewer_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "newGroupQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0b6b0ea31349528017dd2c957b2b51d9",
    "id": null,
    "metadata": {},
    "name": "newGroupQuery",
    "operationKind": "query",
    "text": "query newGroupQuery {\n  ...Viewer_viewer\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};

(node as any).hash = "0d4b4a03adf120e6a65596b44ad6d642";

export default node;
