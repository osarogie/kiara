/**
 * @flow
 * @relayHash 29017a80dfe389235585899e3716b7b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Discover_groupList$ref = any;
export type DiscoverGroupsPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
  q?: ?string,
|};
export type DiscoverGroupsPaginationQueryResponse = {|
  +feed: ?{|
    +$fragmentRefs: Discover_groupList$ref
  |}
|};
export type DiscoverGroupsPaginationQuery = {|
  variables: DiscoverGroupsPaginationQueryVariables,
  response: DiscoverGroupsPaginationQueryResponse,
|};
*/


/*
query DiscoverGroupsPaginationQuery(
  $count: Int!
  $cursor: String
  $q: String
) {
  feed {
    ...Discover_groupList
    id
  }
}

fragment Discover_groupList on Feed {
  groups(first: $count, after: $cursor, q: $q) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...GroupListItem_group
        __typename
      }
      cursor
    }
  }
}

fragment GroupListItem_group on Group {
  id
  _id
  name
  permalink
  header_image {
    name
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
  },
  {
    "kind": "LocalArgument",
    "name": "q",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "q",
    "variableName": "q"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DiscoverGroupsPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
          {
            "kind": "FragmentSpread",
            "name": "Discover_groupList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DiscoverGroupsPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groups",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "GroupConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
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
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "_id",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "permalink",
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
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "groups",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "Discover_groups",
            "filters": [
              "q"
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DiscoverGroupsPaginationQuery",
    "id": null,
    "text": "query DiscoverGroupsPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $q: String\n) {\n  feed {\n    ...Discover_groupList\n    id\n  }\n}\n\nfragment Discover_groupList on Feed {\n  groups(first: $count, after: $cursor, q: $q) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...GroupListItem_group\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment GroupListItem_group on Group {\n  id\n  _id\n  name\n  permalink\n  header_image {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3ac5e4185a5835537877b4d17096d8ca';
module.exports = node;
