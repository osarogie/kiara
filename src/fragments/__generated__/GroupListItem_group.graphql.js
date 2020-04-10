/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GroupListItem_group$ref: FragmentReference;
declare export opaque type GroupListItem_group$fragmentType: GroupListItem_group$ref;
export type GroupListItem_group = {|
  +id: string,
  +_id: string,
  +name: ?string,
  +permalink: ?string,
  +publicUrl: ?string,
  +headerImage: ?{|
    +name: ?string
  |},
  +$refType: GroupListItem_group$ref,
|};
export type GroupListItem_group$data = GroupListItem_group;
export type GroupListItem_group$key = {
  +$data?: GroupListItem_group$data,
  +$fragmentRefs: GroupListItem_group$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "GroupListItem_group",
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
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "permalink",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "publicUrl",
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
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f9a90b987af19948a018e4c04eb6199';

module.exports = node;
