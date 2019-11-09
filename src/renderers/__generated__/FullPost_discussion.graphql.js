/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DiscussionLike_discussion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FullPost_discussion$ref: FragmentReference;
declare export opaque type FullPost_discussion$fragmentType: FullPost_discussion$ref;
export type FullPost_discussion = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +body: ?string,
  +createdAt: ?number,
  +updatedAt: ?number,
  +reads: ?string,
  +excerpt: ?string,
  +commentCount: ?number,
  +featurePhoto: ?{|
    +url: ?string,
    +height: ?number,
    +width: ?number,
  |},
  +publicUrl: ?string,
  +group: ?{|
    +_id: string,
    +id: string,
    +name: ?string,
    +permalink: ?string,
    +publicUrl: ?string,
  |},
  +user: ?{|
    +id: string,
    +_id: string,
    +username: ?string,
    +name: ?string,
    +profilePicture: ?string,
    +profilePictureName: ?string,
    +bio: ?string,
    +publicUrl: ?string,
  |},
  +parsedBody: ?string,
  +hasPoll: ?boolean,
  +otherUsersPosts: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +_id: string,
        +name: ?string,
        +permalink: ?string,
        +createdAt: ?number,
        +user: ?{|
          +id: string,
          +_id: string,
          +username: ?string,
          +name: ?string,
          +publicUrl: ?string,
        |},
      |}
    |}>
  |},
  +$fragmentRefs: DiscussionLike_discussion$ref,
  +$refType: FullPost_discussion$ref,
|};
export type FullPost_discussion$data = FullPost_discussion;
export type FullPost_discussion$key = {
  +$data?: FullPost_discussion$data,
  +$fragmentRefs: FullPost_discussion$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "publicUrl",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "permalink",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FullPost_discussion",
  "type": "Discussion",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "updatedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "reads",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "excerpt",
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 30
        }
      ],
      "storageKey": "excerpt(size:30)"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "commentCount",
      "args": null,
      "storageKey": null
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "height",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "width",
          "args": null,
          "storageKey": null
        }
      ]
    },
    (v4/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "group",
      "storageKey": null,
      "args": null,
      "concreteType": "Group",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        (v2/*: any*/),
        (v5/*: any*/),
        (v4/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v6/*: any*/),
        (v2/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profilePicture",
          "args": [
            {
              "kind": "Literal",
              "name": "size",
              "value": 250
            }
          ],
          "storageKey": "profilePicture(size:250)"
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
          "name": "bio",
          "args": null,
          "storageKey": null
        },
        (v4/*: any*/)
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "parsedBody",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPoll",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "otherUsersPosts",
      "storageKey": "otherUsersPosts(first:4)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 4
        }
      ],
      "concreteType": "DiscussionConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "DiscussionEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Discussion",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v5/*: any*/),
                (v3/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "user",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    (v6/*: any*/),
                    (v2/*: any*/),
                    (v4/*: any*/)
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "DiscussionLike_discussion",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '509ccf0d3c443e6de6808a720f600ad3';
module.exports = node;
