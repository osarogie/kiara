/**
 * @flow
 * @relayHash 7b7cd042f708113a8a97eeff1d7221ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
export type DraftEntityMutability = "IMMUTABLE" | "MUTABLE" | "SEGMENTED" | "%future added value";
export type editDiscussionQueryVariables = {|
  id: string
|};
export type editDiscussionQueryResponse = {|
  +discussion: ?{|
    +_id: string,
    +user: ?{|
      +username: ?string
    |},
    +content: ?{|
      +blocks: ?$ReadOnlyArray<?{|
        +depth: ?number,
        +key: ?string,
        +text: ?string,
        +type: ?string,
      |}>,
      +entityMap: ?$ReadOnlyArray<?{|
        +mutability: ?DraftEntityMutability,
        +type: ?string,
      |}>,
    |},
    +group: ?{|
      +_id: string,
      +name: ?string,
    |},
    +featurePhoto: ?{|
      +url: ?string
    |},
    +permalink: ?string,
    +name: ?string,
    +body: ?string,
    +viewerOwns: ?boolean,
  |},
  +$fragmentRefs: Viewer_viewer$ref,
|};
export type editDiscussionQuery = {|
  variables: editDiscussionQueryVariables,
  response: editDiscussionQueryResponse,
|};
*/


/*
query editDiscussionQuery(
  $id: ID!
) {
  ...Viewer_viewer
  discussion(id: $id) {
    _id
    user {
      username
      id
    }
    content {
      blocks {
        depth
        key
        text
        type
      }
      entityMap {
        mutability
        type
      }
    }
    group {
      _id
      name
      id
    }
    featurePhoto {
      url
      id
    }
    permalink
    name
    body
    viewerOwns
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
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
  "name": "username",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "content",
  "storageKey": null,
  "args": null,
  "concreteType": "DraftContent",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "blocks",
      "storageKey": null,
      "args": null,
      "concreteType": "DraftBlock",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "depth",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "key",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "text",
          "args": null,
          "storageKey": null
        },
        (v4/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "entityMap",
      "storageKey": null,
      "args": null,
      "concreteType": "DraftEntity",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "mutability",
          "args": null,
          "storageKey": null
        },
        (v4/*: any*/)
      ]
    }
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerOwns",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "editDiscussionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          },
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "featurePhoto",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              (v7/*: any*/)
            ]
          },
          (v8/*: any*/),
          (v6/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "Viewer_viewer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editDiscussionQuery",
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
          (v6/*: any*/),
          (v3/*: any*/),
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
          (v2/*: any*/),
          (v11/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "discussion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Discussion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v11/*: any*/)
            ]
          },
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v11/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "featurePhoto",
            "storageKey": null,
            "args": null,
            "concreteType": "Photo",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v11/*: any*/)
            ]
          },
          (v8/*: any*/),
          (v6/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "editDiscussionQuery",
    "id": null,
    "text": "query editDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $id) {\n    _id\n    user {\n      username\n      id\n    }\n    content {\n      blocks {\n        depth\n        key\n        text\n        type\n      }\n      entityMap {\n        mutability\n        type\n      }\n    }\n    group {\n      _id\n      name\n      id\n    }\n    featurePhoto {\n      url\n      id\n    }\n    permalink\n    name\n    body\n    viewerOwns\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9017d312b2910358d3863093d7ecb9fc';

module.exports = node;
