/**
 * @flow
 * @relayHash 3d8428e044d19a3ecb3b8d84520cd8af
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StartCulture_group$ref = any;
type Viewer_viewer$ref = any;
export type editCultureQueryVariables = {|
  id: string
|};
export type editCultureQueryResponse = {|
  +group: ?{|
    +viewer_is_owner: ?boolean,
    +user: ?{|
      +_id: string
    |},
    +$fragmentRefs: StartCulture_group$ref,
  |},
  +$fragmentRefs: Viewer_viewer$ref,
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
  ...Viewer_viewer
  group(id: $id) {
    viewer_is_owner
    user {
      _id
      id
    }
    ...StartCulture_group
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

fragment StartCulture_group on Group {
  id
  _id
  name
  body
  tagline
  header_image {
    url
    id
  }
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewer_is_owner",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  "name": "editCultureQuery",
  "id": null,
  "text": "query editCultureQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  group(id: $id) {\n    viewer_is_owner\n    user {\n      _id\n      id\n    }\n    ...StartCulture_group\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n\nfragment StartCulture_group on Group {\n  id\n  _id\n  name\n  body\n  tagline\n  header_image {\n    url\n    id\n  }\n  is_private\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editCultureQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3
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
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v4,
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
          v3,
          v5
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "group",
        "storageKey": null,
        "args": v1,
        "concreteType": "Group",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v5
            ]
          },
          v5,
          v3,
          v4,
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
            "name": "tagline",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "header_image",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": null,
                "storageKey": null
              },
              v5
            ]
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
(node/*: any*/).hash = '5e39f2d562ee99106b727e42ba8a4513';
module.exports = node;
