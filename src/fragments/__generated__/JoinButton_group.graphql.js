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
  +viewer_is_a_member: ?boolean,
  +is_private: ?boolean,
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
      "name": "viewer_is_a_member",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_private",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ba7b656d16ae30d97588afb72c771b90';
module.exports = node;
