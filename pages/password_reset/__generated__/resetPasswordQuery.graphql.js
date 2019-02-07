/**
 * @flow
 * @relayHash 7318e65914527b7c735b15d2d7a13342
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type resetPasswordQueryVariables = {|
  token: string
|};
export type resetPasswordQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |},
  +checkPasswordResetToken: ?{|
    +id: string
  |},
|};
export type resetPasswordQuery = {|
  variables: resetPasswordQueryVariables,
  response: resetPasswordQueryResponse,
|};
*/


/*
query resetPasswordQuery(
  $token: String!
) {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
  }
  checkPasswordResetToken(token: $token) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "token",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
      v1
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "checkPasswordResetToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token",
        "type": "String!"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      v1
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "resetPasswordQuery",
  "id": null,
  "text": "query resetPasswordQuery(\n  $token: String!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  checkPasswordResetToken(token: $token) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a8063cdab667344b7592451b5eb75ef';
module.exports = node;
