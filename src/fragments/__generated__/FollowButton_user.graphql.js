/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FollowButton_user$ref: FragmentReference;
declare export opaque type FollowButton_user$fragmentType: FollowButton_user$ref;
export type FollowButton_user = {|
  +_id: string,
  +name: ?string,
  +viewerFollows: ?boolean,
  +followsViewer: ?boolean,
  +$refType: FollowButton_user$ref,
|};
export type FollowButton_user$data = FollowButton_user;
export type FollowButton_user$key = {
  +$data?: FollowButton_user$data,
  +$fragmentRefs: FollowButton_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FollowButton_user",
  "type": "User",
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
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "viewerFollows",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "followsViewer",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f83e729e901059a9b362786d718045a6';

module.exports = node;
