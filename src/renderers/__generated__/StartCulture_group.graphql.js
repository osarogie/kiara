/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type StartCulture_group$ref: FragmentReference;
declare export opaque type StartCulture_group$fragmentType: StartCulture_group$ref;
export type StartCulture_group = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +body: ?string,
  +tagline: ?string,
  +headerImage: ?{|
    +url: ?string
  |},
  +isPrivate: ?boolean,
  +$refType: StartCulture_group$ref,
|};
export type StartCulture_group$data = StartCulture_group;
export type StartCulture_group$key = {
  +$data?: StartCulture_group$data,
  +$fragmentRefs: StartCulture_group$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "StartCulture_group",
  "type": "Group",
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
      "name": "headerImage",
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
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPrivate",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e6b3c6539872075d7d7d6a83946c05e9';

module.exports = node;
