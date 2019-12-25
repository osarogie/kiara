/**
 * @flow
 * @relayHash 0445d1cdfae02968283b8228d49d299f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type JoinButton_group$ref = any;
export type LeaveGroupInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type JoinButtonLeaveGroupMutationVariables = {|
  input: LeaveGroupInput
|};
export type JoinButtonLeaveGroupMutationResponse = {|
  +leaveGroup: ?{|
    +group: ?{|
      +$fragmentRefs: JoinButton_group$ref
    |}
  |}
|};
export type JoinButtonLeaveGroupMutation = {|
  variables: JoinButtonLeaveGroupMutationVariables,
  response: JoinButtonLeaveGroupMutationResponse,
|};
*/


/*
mutation JoinButtonLeaveGroupMutation(
  $input: LeaveGroupInput!
) {
  leaveGroup(input: $input) {
    group {
      ...JoinButton_group
      id
    }
  }
}

fragment JoinButton_group on Group {
  _id
  viewerIsAMember
  isPrivate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LeaveGroupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "JoinButtonLeaveGroupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "leaveGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "JoinButton_group",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "JoinButtonLeaveGroupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "leaveGroup",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "group",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": false,
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "JoinButtonLeaveGroupMutation",
    "id": null,
    "text": "mutation JoinButtonLeaveGroupMutation(\n  $input: LeaveGroupInput!\n) {\n  leaveGroup(input: $input) {\n    group {\n      ...JoinButton_group\n      id\n    }\n  }\n}\n\nfragment JoinButton_group on Group {\n  _id\n  viewerIsAMember\n  isPrivate\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9137dafaf683b0f4df4d9964b55365ba';
module.exports = node;
