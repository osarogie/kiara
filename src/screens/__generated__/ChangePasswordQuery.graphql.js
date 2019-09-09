/**
 * @flow
 * @relayHash ae415d827f7b1ea228c7127a43fecf06
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChangePassword_viewer$ref = any;
type Viewer_viewer$ref = any;
export type ChangePasswordQueryVariables = {||};
export type ChangePasswordQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ChangePassword_viewer$ref
  |},
  +$fragmentRefs: Viewer_viewer$ref,
|};
export type ChangePasswordQuery = {|
  variables: ChangePasswordQueryVariables,
  response: ChangePasswordQueryResponse,
|};
*/


/*
query ChangePasswordQuery {
  ...Viewer_viewer
  viewer {
    ...ChangePassword_viewer
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

fragment ChangePassword_viewer on User {
  id
  _id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangePasswordQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          {
            "kind": "FragmentSpread",
            "name": "ChangePassword_viewer",
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
    "name": "ChangePasswordQuery",
    "argumentDefinitions": [],
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
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
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 50
              }
            ],
            "storageKey": "profilePicture(size:50)"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "profilePictureName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ChangePasswordQuery",
    "id": null,
    "text": "query ChangePasswordQuery {\n  ...Viewer_viewer\n  viewer {\n    ...ChangePassword_viewer\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n\nfragment ChangePassword_viewer on User {\n  id\n  _id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'e2d5b160c50a15051c0ee669c1a1b849';
module.exports = node;
