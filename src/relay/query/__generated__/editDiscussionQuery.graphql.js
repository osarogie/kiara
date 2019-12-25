/**
 * @flow
 * @relayHash 3931329b3d48909d8de257fa9cd1c269
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Viewer_viewer$ref = any;
export type editDiscussionQueryVariables = {|
  id: string
|};
export type editDiscussionQueryResponse = {|
  +discussion: ?{|
    +_id: string,
    +user: ?{|
      +username: ?string
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerOwns",
  "args": null,
  "storageKey": null
},
v9 = {
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
              (v4/*: any*/)
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
              (v5/*: any*/)
            ]
          },
          (v6/*: any*/),
          (v4/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
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
          (v4/*: any*/),
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
          (v9/*: any*/)
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
              (v9/*: any*/)
            ]
          },
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
              (v4/*: any*/),
              (v9/*: any*/)
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
              (v5/*: any*/),
              (v9/*: any*/)
            ]
          },
          (v6/*: any*/),
          (v4/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "editDiscussionQuery",
    "id": null,
    "text": "query editDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  discussion(id: $id) {\n    _id\n    user {\n      username\n      id\n    }\n    group {\n      _id\n      name\n      id\n    }\n    featurePhoto {\n      url\n      id\n    }\n    permalink\n    name\n    body\n    viewerOwns\n    id\n  }\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e259828bf96c79dca225e5c230746b04';
module.exports = node;
