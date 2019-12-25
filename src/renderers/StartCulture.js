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
    editing_mode ? group.headerImage && `//${group.headerImage.url}` : ''
  )
  const [uploadStatus, setUploadStatus] = useState('')

  let new_id = null
  let permalink
  let success, retryFunction
  let environment = createEnvironment()

  function save({ name, tagline, isPrivate }) {
    setSending(true)

    if (name && tagline) {
      const inputs = { name, body, isPrivate, tagline, headerImage: photo }
      if (editing_mode) {
        EditGroupMutation.commit(
          environment,
          { id: group._id, ...inputs },
          {
            onCompleted() {
              if (success) Router.pushRoute(groupLink({ permalink }))
            },

            onError() {
              message.error('Your blog could not be saved')
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
            } else message.error('Your blog could not be saved')
          },

          onError() {
            message.error('Your blog could not be saved')
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

      message.error('Your blog needs a name and a tagline')
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

  const { name, body, isPrivate, tagline } = group || {}

  const fields = {
    name: {
      type: 'text',
      label: 'Blog Name',
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
    isPrivate: {
      type: 'checkbox',
      label: 'Private Blog (Only member can post stories)',
      initialValue: isPrivate
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

  let title = editing_mode ? `Update Blog: ${name}` : 'Create Blog'

  return (
    <PageContainer title={`${title} - TheCommunity`}>
      <div className="center" style={{ paddingLeft: 20, paddingRight: 20 }}>
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
  {
    group: graphql`
      fragment StartCulture_group on Group {
        id
        _id
        name
        body
        tagline
        headerImage {
          url
        }
        isPrivate
      }
    `
  }
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
