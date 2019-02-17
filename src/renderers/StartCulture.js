import { ImageUploadProgress } from './../components/uploader/ImageUploadProgress'
import { ImageUploader } from './../components/uploader/ImageUploader'
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

  const [imageData, setImageData] = useState(null)
  const [photo, setPhoto] = useState(
    editing_mode ? group.header_image && `//${group.header_image.url}` : ''
  )
  const [uploadStatus, setUploadStatus] = useState('')

  let new_id = null
  let permalink
  let success, retryFunction
  let environment = createEnvironment()

  function save({ name, tagline, is_private }) {
    setSending(true)

    if (name && tagline) {
      const inputs = { name, body, is_private, tagline, header_image: photo }
      if (editing_mode) {
        EditGroupMutation.commit(
          environment,
          { id: group._id, ...inputs },
          {
            onCompleted() {
              if (success) Router.pushRoute(groupLink({ permalink }))
            },

            onError() {
              message.error('Your culture could not be saved')
            },

            updater(store) {
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
          onCompleted() {
            if (new_id) {
              Router.pushRoute(groupLink({ permalink }))
            } else message.error('Your culture could not be saved')
          },

          onError() {
            message.error('Your culture could not be saved')
          },

          updater(store) {
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

      message.error('Your culture needs a name and a tagline')
    }
  }

  function renderProgress() {
    if (sending) {
      return <LoadMoreBox isLoading={true} />
    }

    return null
  }

  function onRemoveImage(uploaderId) {
    setUploadStatus('')
    setImageData(null)
    setPhoto(null)
  }

  const { name, body, is_private, tagline } = group || {}

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
    tagline: {
      type: 'text',
      label: 'Tagline (shows under the name)',
      initialValue: tagline,
      rules: [
        {
          required: true,
          message: 'Please input a valid tagline'
        }
      ]
    },
    is_private: {
      type: 'checkbox',
      label: 'Private Culture (Only member can post stories)',
      initialValue: is_private
    },
    body: {
      type: 'textarea',
      label: 'Full Description',
      initialValue: body,
      autosize: {
        minRows: 4
      }
    }
  }

  let title = editing_mode ? `Update Culture: ${name}` : 'Create Culture'

  return (
    <PageContainer title={`${title} - TheCommunity`}>
      <div className="center">
        <AntForm
          title={title}
          fields={fields}
          style={{ paddingVertical: 40 }}
          onSubmit={save}
          bottomContent={
            <div style={{ marginBottom: 50 }}>
              <ImageUploader
                id="group_photo"
                onSetDataUri={setImageData}
                onSetImageUri={setPhoto}
                onUpdateStatus={setUploadStatus}
                retryRef={f => (retryFunction = f)}
              />

              <ImageUploadProgress
                status={uploadStatus}
                uploaderId="group_photo"
                onRemoveImage={onRemoveImage}
                source={imageData || photo}
                retry={() => retryFunction()}
              />
              <label htmlFor="group_photo_file" className="table">
                <div
                  id="upload"
                  className="button s__content__main"
                  style={{ backgroundColor: 'transparent' }}
                >
                  Set a cover photo
                </div>
              </label>
            </div>
          }
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
      tagline
      header_image {
        url
      }
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
