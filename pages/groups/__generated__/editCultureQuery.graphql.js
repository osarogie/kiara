/**
 * @flow
 * @relayHash 1d865778ea4550c9de7aedbdeacfb7de
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StartCulture_group$ref = any;
export type editCultureQueryVariables = {|
  id: string
|};
export type editCultureQueryResponse = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profile_picture: ?string,
    +profile_picture_name: ?string,
    +_id: string,
    +id: string,
  |},
  +group: ?{|
    +user: ?{|
      +_id: string
    |},
    +$fragmentRefs: StartCulture_group$ref,
  |},
|};
export type editCultureQuery = {|
  variables: editCultureQueryVariables,
  response: editCultureQueryResponse,
|};
*/


/*
query editCultureQuery(
  $id: ID!
) {
  viewer {
    name
    username
    profile_picture(size: 50)
    profile_picture_name
    _id
    id
  }
  group(id: $id) {
    user {
      _id
      id
    }
    ...StartCulture_group
    id
  }
}

fragment StartCulture_group on Group {
  id
  _id
  name
  body
  is_private
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "viewer",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
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
    v2,
    v3
  ]
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "editCultureQuery",
  "id": null,
  "text": "query editCultureQuery(\n  $id: ID!\n) {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n  group(id: $id) {\n    user {\n      _id\n      id\n    }\n    ...StartCulture_group\n    id\n  }\n}\n\nfragment StartCulture_group on Group {\n  id\n  _id\n  name\n  body\n  is_private\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editCultureQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v4,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v5,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "StartCulture_group",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editCultureQuery",
    "argumentDefinitions": v0,
    "selections": [
      v4,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v5,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              v3
            ]
          },
          v3,
          v2,
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_private",
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
(node/*: any*/).hash = '3a274773942e60ad0e944eef92bba3e1';
module.exports = node;
