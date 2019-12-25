/**
 * @flow
 * @relayHash 9cb0fcf28608a89410f0df76af06f17e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditUser_viewer$ref = any;
export type EditUserInput = {|
  name?: ?string,
  username?: ?string,
  email?: ?string,
  profilePic?: ?string,
  bio?: ?string,
  clientMutationId?: ?string,
|};
export type EditUserMutationVariables = {|
  input: EditUserInput
|};
export type EditUserMutationResponse = {|
  +editUser: ?{|
    +user: ?{|
      +$fragmentRefs: EditUser_viewer$ref
    |},
    +success: ?boolean,
  |}
|};
export type EditUserMutation = {|
  variables: EditUserMutationVariables,
  response: EditUserMutationResponse,
|};
*/


/*
mutation EditUserMutation(
  $input: EditUserInput!
) {
  editUser(input: $input) {
    user {
      ...EditUser_viewer
      id
    }
    success
  }
}

fragment EditUser_viewer on User {
  id
  _id
  name
  bio
  username
  profilePictureName
  profilePicture(size: 50)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EditUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "EditUser_viewer",
                "args": null
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "EditUserPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
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
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditUserMutation",
    "id": null,
    "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    user {\n      ...EditUser_viewer\n      id\n    }\n    success\n  }\n}\n\nfragment EditUser_viewer on User {\n  id\n  _id\n  name\n  bio\n  username\n  profilePictureName\n  profilePicture(size: 50)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3af9692558502f94b05d61d42e7933f6';
module.exports = node;
