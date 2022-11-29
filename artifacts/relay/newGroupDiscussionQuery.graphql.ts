/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type newGroupDiscussionQueryVariables = {
    id: string;
};
export type newGroupDiscussionQueryResponse = {
    readonly group: {
        readonly id: string;
        readonly _id: string;
        readonly name: string | null;
        readonly permalink: string | null;
        readonly body: string | null;
        readonly tagline: string | null;
        readonly viewerIsAMember: boolean | null;
        readonly viewerIsOwner: boolean | null;
        readonly headerImage: {
            readonly name: string | null;
            readonly height: number | null;
            readonly width: number | null;
            readonly url: string | null;
        } | null;
        readonly user: {
            readonly id: string;
            readonly _id: string;
            readonly name: string | null;
            readonly username: string | null;
            readonly profilePictureName: string | null;
        } | null;
        readonly createdAt: number | null;
        readonly updatedAt: number | null;
        readonly " $fragmentRefs": FragmentRefs<"JoinButton_group">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"Viewer_viewer">;
};
export type newGroupDiscussionQuery = {
    readonly response: newGroupDiscussionQueryResponse;
    readonly variables: newGroupDiscussionQueryVariables;
};



/*
query newGroupDiscussionQuery(
  $id: ID!
) {
  ...Viewer_viewer
  group(id: $id) {
    id
    _id
    name
    permalink
    body
    tagline
    viewerIsAMember
    viewerIsOwner
    ...JoinButton_group
    headerImage {
      name
      height
      width
      url
      id
    }
    user {
      id
      _id
      name
      username
      profilePictureName
    }
    createdAt
    updatedAt
  }
}

fragment JoinButton_group on Group {
  _id
  viewerIsAMember
  isPrivate
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "permalink",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tagline",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsAMember",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsOwner",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profilePictureName",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    (v13/*: any*/),
    (v14/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "newGroupDiscussionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
            "kind": "LinkedField",
            "name": "headerImage",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JoinButton_group"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Viewer_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newGroupDiscussionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 50
              }
            ],
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": "profilePicture(size:50)"
          },
          (v14/*: any*/),
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPrivate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
            "kind": "LinkedField",
            "name": "headerImage",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "762764af6a9c0dbf62d602f655d79761",
    "id": null,
    "metadata": {},
    "name": "newGroupDiscussionQuery",
    "operationKind": "query",
    "text": "query newGroupDiscussionQuery(\n  $id: ID!\n) {\n  ...Viewer_viewer\n  group(id: $id) {\n    id\n    _id\n    name\n    permalink\n    body\n    tagline\n    viewerIsAMember\n    viewerIsOwner\n    ...JoinButton_group\n    headerImage {\n      name\n      height\n      width\n      url\n      id\n    }\n    user {\n      id\n      _id\n      name\n      username\n      profilePictureName\n    }\n    createdAt\n    updatedAt\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewerIsAMember\n  isPrivate\n}\n\nfragment Viewer_viewer on Query {\n  viewer {\n    name\n    username\n    profilePicture(size: 50)\n    profilePictureName\n    _id\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'afa73a59e1cdc6a439bdc6205d953c83';
export default node;
