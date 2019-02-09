/**
 * @flow
 * @relayHash 5d030c99b68dcd67c8dc56a39673590a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DiscoverScreenQueryVariables = {||};
export type DiscoverScreenQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |}
|};
export type DiscoverScreenQuery = {|
  variables: DiscoverScreenQueryVariables,
  response: DiscoverScreenQueryResponse,
|};
*/


/*
query DiscoverScreenQuery {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "profile_picture",
        "args": [
          {
            "kind": "Literal",
            "name": "size",
            "value": 50,
            "type": "Int"
          }
        ],
        "storageKey": "profile_picture(size:50)"
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "profile_picture_name",
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DiscoverScreenQuery",
  "id": null,
  "text": "query DiscoverScreenQuery {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DiscoverScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "DiscoverScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b9d8577ca0a920b8d29b32c7bee473f';
module.exports = node;
