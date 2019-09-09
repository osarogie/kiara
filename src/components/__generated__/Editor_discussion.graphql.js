/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Editor_discussion$ref: FragmentReference;
declare export opaque type Editor_discussion$fragmentType: Editor_discussion$ref;
export type Editor_discussion = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +body: ?string,
  +parsedBody: ?string,
  +$refType: Editor_discussion$ref,
|};
export type Editor_discussion$data = Editor_discussion;
export type Editor_discussion$key = {
  +$data?: Editor_discussion$data,
  +$fragmentRefs: Editor_discussion$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Editor_discussion",
  "type": "Discussion",
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
      "name": "parsedBody",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '861bbb48ee6682812f09c8769c919524';
module.exports = node;
