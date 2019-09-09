/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type JoinButton_group$ref: FragmentReference;
declare export opaque type JoinButton_group$fragmentType: JoinButton_group$ref;
export type JoinButton_group = {|
  +_id: string,
  +viewerIsAMember: ?boolean,
  +isPrivate: ?boolean,
  +$refType: JoinButton_group$ref,
|};
export type JoinButton_group$data = JoinButton_group;
export type JoinButton_group$key = {
  +$data?: JoinButton_group$data,
  +$fragmentRefs: JoinButton_group$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "JoinButton_group",
  "type": "Group",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "viewerIsAMember",
      "args": null,
      "storageKey": null
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
(node/*: any*/).hash = '122371b07e38843e9b8d2d13daae76ed';
module.exports = node;
