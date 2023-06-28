/**
 * @generated SignedSource<<df0b20edcae930a324ad1228de77eca8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditGroupInput = {
  body?: string | null;
  clientMutationId?: string | null;
  headerImage?: string | null;
  id: string;
  isPrivate?: boolean | null;
  name: string;
  tagline?: string | null;
};
export type EditGroupMutation$variables = {
  input: EditGroupInput;
};
export type EditGroupMutation$data = {
  readonly editGroup: {
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"GroupListItem_group">;
    } | null;
    readonly success: boolean | null;
  } | null;
};
export type EditGroupMutation = {
  response: EditGroupMutation$data;
  variables: EditGroupMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditGroupPayload",
        "kind": "LinkedField",
        "name": "editGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GroupListItem_group"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditGroupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditGroupPayload",
        "kind": "LinkedField",
        "name": "editGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "_id",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "permalink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "publicUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Photo",
                "kind": "LinkedField",
                "name": "headerImage",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "34e307a45fd70185e91182d3fc4d4b5b",
    "id": null,
    "metadata": {},
    "name": "EditGroupMutation",
    "operationKind": "mutation",
    "text": "mutation EditGroupMutation(\n  $input: EditGroupInput!\n) {\n  editGroup(input: $input) {\n    success\n    group {\n      ...GroupListItem_group\n      id\n    }\n  }\n}\n\nfragment GroupListItem_group on Group {\n  id\n  _id\n  name\n  permalink\n  publicUrl\n  headerImage {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "66b0e034d2d3a6cbb3b17c9a7b590f27";

export default node;
