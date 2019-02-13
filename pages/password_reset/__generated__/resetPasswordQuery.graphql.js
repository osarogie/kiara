/**
 * @flow
 * @relayHash 68c3651aa68971686c2f1789fd549434
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
export type resetPasswordQueryVariables = {|
  token: string
|};
export type resetPasswordQueryResponse = {|
  +checkPasswordResetToken: ?{|
    +id: string
  |},
  +$fragmentRefs: Viewer_viewer$ref,
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
  ...Viewer_viewer
  checkPasswordResetToken(token: $token) {
    id
  }
}

fragment Viewer_viewer on Query {
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
v2 = {
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "resetPasswordQuery",
  "id": null,
  "text": "query resetPasswordQuery(\n  $token: String!\n) {\n  ...Viewer_viewer\n  checkPasswordResetToken(token: $token) {\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      },
      v2
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordQuery",
    "argumentDefinitions": v0,
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
      v2
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '446537028e3e08b33e1c8f270cf716a7';
module.exports = node;
