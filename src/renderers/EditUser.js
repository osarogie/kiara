// @flow

import React, { useState } from 'react'
import { View, ScrollView, ToastAndroid } from 'react-native'
import ActivityButton from 'components/ActivityButton'
import styles from 'styles'
import TextInput from 'components/TextInput'
import { setUser } from 'redux/actions'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import NProgress from 'nprogress'
import message from 'antd/lib/message'

import { createFragmentContainer, graphql, commitMutation } from 'react-relay'
import { connect } from 'react-redux'
import { AntForm } from 'components/AntForm'
import Avatar from 'components/Avatar'

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
  const [isSaving, setSaving] = useState(false)
  function notify(_message) {
    message.info(_message)
  }

  function update({ name, bio, username }) {
    if (name && username) {
      NProgress.start()
      setSaving(true)
      UpdateProfile({ name, bio, username }, props.relay.environment, {
        onCompleted: ({ editUser, ...props }) => {
          NProgress.done()
          setSaving(false)
          if (editUser && editUser.success) {
            notify('Profile update successful')
          } else {
            notify('Profile update failed')
          }
        },
        updater: store => {
          const newProfile = store
            .getRootField('editUser')
            .getLinkedRecord('user')
          const viewer = {
            name: newProfile.getValue('name'),
            username: newProfile.getValue('username'),
            profile_picture_name: newProfile.getValue('profile_picture_name'),
            id: newProfile.getValue('_id'),
            _id: newProfile.getValue('_id')
          }
        },
        onError: _ => {
          NProgress.done()
          setSaving(false)
          notify('Profile update failed')
        }
      })
    } else {
      notify('Name and username are required')
    }
  }

  const { name, username, profile_pic, bio } = props.viewer

  const fields = {
    name: {
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
      type: 'textarea',
      label: 'Bio',
      initialValue: bio,
      autosize: {
        minRows: 4
      }
    }
  }

  return (
    <div className="center mt20">
      <h2 className="mt20">Edit your profile</h2>
      <div className="mt20 mb20">
        <Avatar disableLink width={100} rounded source={props.viewer} />
      </div>

      <AntForm
        fields={fields}
        style={{ paddingVertical: 40 }}
        onSubmit={update}
        submitText="Save"
      />
    </div>
  )
}

// EditUserFragmentContainer
export const EditUserFragmentContainer = createFragmentContainer(
  EditUser,
  graphql`
    fragment EditUser_viewer on User {
      id
      _id
      name
      bio
      username
      profile_picture_name
    }
  `
)

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
