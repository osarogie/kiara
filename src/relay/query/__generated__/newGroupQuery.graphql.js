/**
 * @flow
 * @relayHash 16f46c6bcf0fb2198d81ddaeaaa57740
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
export type newGroupQueryVariables = {||};
export type newGroupQueryResponse = {|
  +$fragmentRefs: Viewer_viewer$ref
|};
export type newGroupQuery = {|
  variables: newGroupQueryVariables,
  response: newGroupQueryResponse,
|};
*/


/*
query newGroupQuery {
  ...Viewer_viewer
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "newGroupQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newGroupQuery",
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
    "name": "newGroupQuery",
    "id": null,
    "text": "query newGroupQuery {\n  ...Viewer_viewer\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '0d4b4a03adf120e6a65596b44ad6d642';
module.exports = node;
