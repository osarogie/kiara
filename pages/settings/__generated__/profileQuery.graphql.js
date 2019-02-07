/**
 * @flow
 * @relayHash 33a6346b637ba4f3612f9f766ce1e79d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditUser_viewer$ref = any;
export type profileQueryVariables = {||};
export type profileQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
    +$fragmentRefs: EditUser_viewer$ref,
  |}
|};
export type profileQuery = {|
  variables: profileQueryVariables,
  response: profileQueryResponse,
|};
*/


/*
query profileQuery {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
    ...EditUser_viewer
  }
}

fragment EditUser_viewer on User {
  id
  _id
  name
  bio
  username
  profile_picture_name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v2 = {
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profile_picture_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "profileQuery",
  "id": null,
  "text": "query profileQuery {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n    ...EditUser_viewer\n  }\n}\n\nfragment EditUser_viewer on User {\n  id\n  _id\n  name\n  bio\n  username\n  profile_picture_name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "profileQuery",
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
          v0,
          v1,
          v2,
          v3,
          v4,
          v5,
          {
            "kind": "FragmentSpread",
            "name": "EditUser_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "profileQuery",
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
          v0,
          v1,
          v2,
          v3,
          v4,
          v5,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bio",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '185a01e440bd39102a8ff48d37c254c0';
module.exports = node;
