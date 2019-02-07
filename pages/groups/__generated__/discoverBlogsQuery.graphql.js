/**
 * @flow
 * @relayHash 983c9384f36ebcd27a7a0d19ef3665a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type discoverBlogsQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type discoverBlogsQueryResponse = {|
  +feed: ?{|
    +groups: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +body: ?string,
          +tagline: ?string,
          +permalink: ?string,
        |}
      |}>
    |}
  |}
|};
export type discoverBlogsQuery = {|
  variables: discoverBlogsQueryVariables,
  response: discoverBlogsQueryResponse,
|};
*/


/*
query discoverBlogsQuery(
  $count: Int!
  $cursor: String
) {
  feed {
    groups(first: $count, after: $cursor) {
      edges {
        node {
          id
          name
          body
          tagline
          permalink
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
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
  "name": "groups",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "after",
      "variableName": "cursor",
      "type": "String"
    },
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "count",
      "type": "Int"
    }
  ],
  "concreteType": "GroupConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "GroupEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Group",
          "plural": false,
          "selections": [
            v1,
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
              "kind": "ScalarField",
              "alias": null,
              "name": "permalink",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "discoverBlogsQuery",
  "id": null,
  "text": "query discoverBlogsQuery(\n  $count: Int!\n  $cursor: String\n) {\n  feed {\n    groups(first: $count, after: $cursor) {\n      edges {\n        node {\n          id\n          name\n          body\n          tagline\n          permalink\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "discoverBlogsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "feed",
        "storageKey": null,
        "args": null,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "discoverBlogsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "feed",
        "storageKey": null,
        "args": null,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          v2,
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01aeaf5af73619952f51e9c800d3a05f';
module.exports = node;
