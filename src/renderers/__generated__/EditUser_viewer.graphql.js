/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditUser_viewer$ref: FragmentReference;
declare export opaque type EditUser_viewer$fragmentType: EditUser_viewer$ref;
export type EditUser_viewer = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +bio: ?string,
  +username: ?string,
  +profilePictureName: ?string,
  +profilePicture: ?string,
  +$refType: EditUser_viewer$ref,
|};
export type EditUser_viewer$data = EditUser_viewer;
export type EditUser_viewer$key = {
  +$data?: EditUser_viewer$data,
  +$fragmentRefs: EditUser_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EditUser_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
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
      "name": "name",
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
      "name": "profilePictureName",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'de3eb86c62c521a88f9b87909846839c';
module.exports = node;
