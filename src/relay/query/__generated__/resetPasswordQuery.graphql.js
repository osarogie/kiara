/**
 * @flow
 * @relayHash 51c88f3f2f9733b1d61daf33af273faa
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
    profilePicture(size: 50)
    profilePictureName
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
      "variableName": "token"
    }
  ],
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "resetPasswordQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      (v2/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "resetPasswordQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v1/*: any*/)
        ]
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "resetPasswordQuery",
    "id": null,
    "text": "query resetPasswordQuery(\n  $token: String!\n) {\n  ...Viewer_viewer\n  checkPasswordResetToken(token: $token) {\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '446537028e3e08b33e1c8f270cf716a7';
module.exports = node;
