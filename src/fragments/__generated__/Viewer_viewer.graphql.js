/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Viewer_viewer$ref: FragmentReference;
declare export opaque type Viewer_viewer$fragmentType: Viewer_viewer$ref;
export type Viewer_viewer = {|
  +viewer: ?{|
    +name: ?string,
    +username: ?string,
    +profilePicture: ?string,
    +profilePictureName: ?string,
    +_id: string,
    +id: string,
  |},
  +$refType: Viewer_viewer$ref,
|};
export type Viewer_viewer$data = Viewer_viewer;
export type Viewer_viewer$key = {
  +$data?: Viewer_viewer$data,
  +$fragmentRefs: Viewer_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Viewer_viewer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '59891cd83ff2bf11afba56a80d1ce2fb';

module.exports = node;
