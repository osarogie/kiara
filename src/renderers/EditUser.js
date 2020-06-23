import { ImageUploadProgress } from './../components/uploader/ImageUploadProgress'
import React, { useState } from 'react'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import NProgress from 'nprogress'
import message from 'antd/lib/message'

import { createFragmentContainer, graphql, commitMutation } from 'react-relay'
import { AntForm } from 'components/AntForm'
import Avatar from 'components/Avatar'
import { ImageUploader } from 'components/uploader/ImageUploader'
import BrowserLink from 'components/BrowserLink'

function UpdateProfile(input, environment, config) {
  const variables = {
    input: input
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation EditUserMutation($input: EditUserInput!) {
        editUser(input: $input) {
          user {
            ...EditUser_viewer
          }
          success
        }
      }
    `,
    ...config
  })
}

function EditUser(props) {
  const [saving, setSaving] = useState(false)
  const [imageData, setImageData] = useState(null)
  const [photo, setPhoto] = useState('')
  const [uploadStatus, setUploadStatus] = useState('')

  let retryFunction

  function update({ name, bio, username }) {
    if (name && username) {
      let inputs = { name, bio, username }
      if (photo) inputs.profile_pic = photo
      NProgress.start()
      setSaving(true)
      UpdateProfile(inputs, props.relay.environment, {
        onCompleted: ({ editUser }) => {
          NProgress.done()
          setSaving(false)
          if (editUser && editUser.success) {
            message.success('Profile update successful')
          } else {
            message.error('Profile update failed')
          }
        },
        updater: store => {
          const newProfile = store
            .getRootField('editUser')
            .getLinkedRecord('user')
        },
        onError: _ => {
          NProgress.done()
          setSaving(false)
          message.error('Profile update failed')
        }
      })
    } else {
      message.error('Name and username are required')
    }
  }

  const { name, username, bio } = props.viewer

  const fields = {
    name: {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      initialValue: name,
      rules: [
        {
          required: true,
          message: 'Please input your full name'
        }
      ]
    },
    username: {
      name: 'username',
      type: 'text',
      label: 'Username',
      initialValue: username,
      rules: [
        {
          required: true,
          message: 'Please input your username'
        }
      ]
    },
    bio: {
      name: 'bio',
      type: 'textarea',
      label: 'Bio',
      initialValue: bio,
      autoSize: {
        minRows: 4
      }
    }
  }

  function onRemoveImage() {
    setUploadStatus('')
    setImageData(null)
    setPhoto(null)
  }

  return (
    <div className="center mt20 mb20" style={{ minWidth: 350 }}>
      <div className="mt20 center">
        <span className="mr20 bdb">Profile Settings</span>
        <BrowserLink href="/settings/password">
          <span className="s__content__main80">Password</span>
        </BrowserLink>
      </div>
      <div className="mt20 center mb20">
        <ImageUploadProgress
          status={uploadStatus}
          uploaderId="user_photo"
          style={{
            width: 100,
            height: 100,
            overflow: 'hidden',
            borderRadius: 50,
            margin: 'auto'
          }}
          onRemoveImage={onRemoveImage}
          source={imageData || photo}
          retry={() => retryFunction()}
        />
        {!(imageData || photo) && (
          <div className="center">
            <Avatar
              className="center"
              disableLink
              width={100}
              rounded
              source={props.viewer}
            />
          </div>
        )}
        <ImageUploader
          id="user_photo"
          onSetDataUri={setImageData}
          onSetImageUri={setPhoto}
          onUpdateStatus={setUploadStatus}
          retryRef={f => (retryFunction = f)}
        />
        <label htmlFor="user_photo_file" className="center">
          <div id="upload" className="button" style={{ marginTop: 10 }}>
            Change profile picture
          </div>
        </label>
      </div>

      <AntForm
        defaultValue={{ name, username, bio }}
        fields={fields}
        loading={saving}
        style={{ paddingVertical: 40 }}
        onSubmit={update}
        submitText="Save"
      />
    </div>
  )
}

// EditUserFragmentContainer
export const EditUserFragmentContainer = createFragmentContainer(EditUser, {
  viewer: graphql`
    fragment EditUser_viewer on User {
      id
      _id
      name
      bio
      username
      profilePictureName
      profilePicture(size: 50)
    }
  `
})

export default props => (
  <QueryRendererProxy
    query={graphql`
      query EditUserQuery {
        viewer {
          ...EditUser_viewer
        }
      }
    `}
    render={data => (
      <EditUserFragmentContainer viewer={data.props.viewer} {...props} />
    )}
  />
)
