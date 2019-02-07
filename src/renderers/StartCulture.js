import { PageContainer } from 'components/_partials/pageContainer'
import { groupLink } from 'helpers/links'
import { Router } from '../../routes'
import { AntForm } from './../components/AntForm'
import message from 'antd/lib/message'
import { useState } from 'react'
import { Text, View, Switch } from 'react-native'
import QueryRendererProxy from 'renderers/QueryRendererProxy'

import { createFragmentContainer, graphql } from 'react-relay'

import createEnvironment from 'relay-environment'
import CreateGroupMutation from 'mutations/CreateGroupMutation'
import EditGroupMutation from 'mutations/EditGroupMutation'
import LoadMoreBox from 'components/LoadMoreBox'
import AppBar from 'components/AppBar'

export function StartCulture({ id, editing_mode, group }) {
  const [sending, setSending] = useState(false)

  let new_id = null
  let permalink
  let success
  let environment = createEnvironment()

  function save({ name, body, is_private }) {
    setSending(true)

    if (name && body) {
      const inputs = { name, body, is_private }
      if (editing_mode) {
        EditGroupMutation.commit(
          environment,
          { id: group._id, ...inputs },
          {
            onCompleted: _ => {
              if (success) Router.pushRoute(groupLink({ permalink }))
            },
            onError: _ => {
              message.success('Your culture could not be saved')
            },
            updater: store => {
              const newGroup = store
                .getRootField('editGroup')
                .getLinkedRecord('group')
              new_id = newGroup.getValue('_id')
              permalink = newGroup.getValue('permalink')
              success = true
            }
          }
        )
      } else {
        CreateGroupMutation.commit(environment, inputs, {
          onCompleted: _ => {
            if (new_id) {
              Router.pushRoute(groupLink({ permalink }))
            } else message.success('Your culture could not be saved')
          },
          onError: _ => {
            message.success('Your culture could not be saved')
          },
          updater: store => {
            const newGroup = store
              .getRootField('createGroup')
              .getLinkedRecord('group')

            new_id = newGroup.getValue('_id')
            permalink = newGroup.getValue('permalink')
          }
        })
      }
    } else {
      setSending(false)

      message.success('Your culture needs a name and a description')
    }
  }

  function renderProgress() {
    if (sending) {
      return <LoadMoreBox isLoading={true} />
    }

    return null
  }

  const { name, body, is_private } = group || {}

  const fields = {
    name: {
      type: 'text',
      label: 'Culture Name',
      initialValue: name,
      rules: [
        {
          required: true,
          message: 'Please input a valid name'
        }
      ]
    },
    body: {
      type: 'text',
      label: 'Description',
      initialValue: body
    },
    is_private: {
      type: 'checkbox',
      label: 'Private Culture (Only member can post stories)',
      initialValue: is_private
    }
  }

  let title = editing_mode ? `Update Culture: ${name}` : 'Create Culture'

  return (
    <PageContainer title={`${title} - TheCommunity`}>
      <div className="center">
        <AntForm
          fields={fields}
          title={title}
          style={{ paddingVertical: 40 }}
          onSubmit={save}
          submitText="Save"
        />
      </div>
    </PageContainer>
  )
}

export const StartCultureFragmentContainer = createFragmentContainer(
  StartCulture,
  graphql`
    fragment StartCulture_group on Group {
      id
      _id
      name
      body
      is_private
    }
  `
)

export default props =>
  editing_mode ? (
    <QueryRendererProxy
      query={graphql`
        query StartCultureQuery($id: ID!) {
          group(id: $id) {
            ...StartCulture_group
          }
        }
      `}
      variables={{ id: id }}
      render={data => (
        <StartCultureFragmentContainer group={data.group} {...props} />
      )}
    />
  ) : (
    <StartCulture {...props} />
  )
