/**
 * @flow
 * @relayHash 36e8379975d2d5efd41a82d2c2011d0c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
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
  |},
  +$fragmentRefs: Viewer_viewer$ref,
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
  ...Viewer_viewer
  feed {
    groups(first: $count, after: $cursor, by_latest: true) {
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
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
      "kind": "Literal",
      "name": "by_latest",
      "value": true,
      "type": "Boolean"
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
            v2,
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
  "text": "query discoverBlogsQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...Viewer_viewer\n  feed {\n    groups(first: $count, after: $cursor, by_latest: true) {\n      edges {\n        node {\n          id\n          name\n          body\n          tagline\n          permalink\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profile_picture(size: 50)\n    profile_picture_name\n    _id\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "discoverBlogsQuery",
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
        "name": "feed",
        "storageKey": null,
        "args": null,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          v3
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v2,
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
        "name": "feed",
        "storageKey": null,
        "args": null,
        "concreteType": "Feed",
        "plural": false,
        "selections": [
          v3,
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6942dffafc221e941098732249c2b453';
module.exports = node;
