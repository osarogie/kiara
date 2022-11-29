/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type profileQueryVariables = {};
export type profileQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"EditUser_viewer">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Viewer_viewer">;
};
export type profileQuery = {
    readonly response: profileQueryResponse;
    readonly variables: profileQueryVariables;
};



/*
query profileQuery {
  ...Viewer_viewer
  viewer {
    ...EditUser_viewer
    id
  }
}

fragment EditUser_viewer on User {
  id
  _id
  name
  bio
  username
  profilePictureName
  profilePicture(size: 50)
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
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "profileQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditUser_viewer"
          }
        ],
        "storageKey": null
      },
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
    "name": "profileQuery",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bio",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "24f07c0a1eb973a2d883527dbdd65fcf",
    "id": null,
    "metadata": {},
    "name": "profileQuery",
    "operationKind": "query",
    "text": "query profileQuery {\n  ...Viewer_viewer\n  viewer {\n    ...EditUser_viewer\n    id\n  }\n}\n\nfragment EditUser_viewer on User {\n  id\n  _id\n  name\n  bio\n  username\n  profilePictureName\n  profilePicture(size: 50)\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};
(node as any).hash = 'bf6b37088934eb1e19faa79e4ef52454';
export default node;
