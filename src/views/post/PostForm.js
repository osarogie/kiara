import { EditDiscussionMutation } from 'mutations/EditDiscussionMutation'
import { useEffect, useState } from 'react'
import message from 'antd/lib/message'
import TextArea from 'antd/lib/input/TextArea'
import Affix from 'antd/lib/affix'

import { discussionLink } from '../../helpers/links'
import { MutationService } from '../../services/MutationService'
import { CreateDiscussionMutation } from '../../mutations/CreateDiscussionMutation'

import { ImageUploader } from '../../components/uploader/ImageUploader'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import { Toolbar } from '../../components/Toolbar1'
import { ImageUploadProgress } from '../../components/uploader/ImageUploadProgress'
import { CustomHead } from '../../components/_partials/CustomHead'

import Router from 'next/router'
import { useRef } from 'react'

export function PostForm({
  name: discussion_name = '',
  body: discussion_body = '',
  featurePhoto,
  group,
  user,
  permalink,
  _id
}) {
  const textArea = useRef()
  const success = useRef(false)
  const d = useRef()
  const retryFunction = useRef()

  const [name, setTitleText] = useState(discussion_name)
  const [body, setBodyText] = useState(discussion_body)
  const [imageData, setImageData] = useState(null)
  const [photo, setPhoto] = useState(featurePhoto && `//${featurePhoto.url}`)
  const [uploadStatus, setUploadStatus] = useState('')
  const [groupId] = useState(group && group._id)

  function checkEnterPress(e) {
    const code = e.keyCode ? e.keyCode : e.which

    if (code == 13) {
      textArea.current.focus()
      return false
    }
  }

  function updateTitle(e) {
    setTitleText(e.target.value)
  }

  function updateBody(e) {
    setBodyText(e.target.value)
  }

  function publish() {
    if (!name)
      return message.error(
        <span>
          Your post should have a <b>title</b>
        </span>
      )
    if (!body)
      return message.error(
        <span>
          Your post should have a <b>body</b>
        </span>
      )

    if (_id) {
      const mutation = MutationService(EditDiscussionMutation).showProgress()

      mutation.callbacks({
        onCompleted() {
          if (d.current) {
            Router.push(
              '/[userId]/[discussionId]/[discussionSlug]',
              discussionLink({ permalink, _id, user })
            )
          } else message.error('Your story could not be saved')
        },

        onError() {
          message.error('Your story could not be saved')
        },

        updater(store) {
          d.current = store
            .getRootField('editDiscussion')
            .getLinkedRecord('discussion')
        }
      })

      mutation.run({ name, body, id: _id, photo })
    } else {
      const mutation = MutationService(CreateDiscussionMutation).showProgress()

      mutation.callbacks({
        onCompleted() {
          if (success.current && d.current.getValue('_id')) {
            const params = {
              permalink: d.current.getValue('permalink'),
              _id: d.current.getValue('_id'),
              user: {
                username: d.current.getLinkedRecord('user').getValue('username')
              }
            }
            Router.push(
              '/[userId]/[discussionId]/[discussionSlug]',
              discussionLink(params)
            )
          } else message.error('Your story could not be saved')
        },

        onError(err) {
          message.error(`Your story could not be saved ${err?.message}`)
        },

        updater(store) {
          success.current = store
            .getRootField('createDiscussion')
            .getValue('success')

          d.current = store
            .getRootField('createDiscussion')
            .getLinkedRecord('discussion')
        }
      })

      mutation.run({ name, body, photo, groupId })
    }
  }

  useEffect(() => {
    if (process.browser) window.publish = publish

    return () => {
      if (process.browser) delete window.publish
    }
  })

  function onRemoveImage() {
    setUploadStatus('')
    setImageData(null)
    setPhoto(null)
  }

  return (
    <div className="editor discussion-editor" id="new_discussion">
      <CustomHead
        title={
          _id ? `Edit ${discussion_name}` : 'Share your story on TheCommunity'
        }
      />
      <Affix>
        <div className="toolbar elevated">
          <Toolbar
            className="inner"
            title={
              <img
                className="logo"
                style={{ height: 40 }}
                src="/images/logo3.png"
                alt="TC"
              />
            }
            rightComponent={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <label htmlFor="discussion_photo_file" className="left table">
                  <div
                    id="upload"
                    className="button s__content__main"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    Add an image
                  </div>
                </label>
                <ThemeSwitcher
                  style={{
                    margin: '0 13px 0px 0'
                  }}
                />
                <input
                  type="submit"
                  onClick={publish}
                  style={{ marginLeft: 15 }}
                  name="commit"
                  className="button"
                  value="Publish"
                />
              </div>
            }
          />
        </div>
      </Affix>
      <div className="slim" style={{ paddingLeft: 10, paddingRight: 10 }}>
        {group && group._id && (
          <div
            className="w-label"
            style={{
              marginTop: 50,
              marginLeft: 10
            }}
          >
            <span>Posting in</span>
            <span className="u"> {group.name}</span>
          </div>
        )}
        <div>
          <input
            style={{
              paddingLeft: 11,
              paddingRight: 11,
              backgroundColor: 'transparent',
              marginTop: 50
            }}
            placeholder="Your title here"
            value={name}
            onChange={updateTitle}
            className="title s__dark__bg"
            onKeyPress={checkEnterPress}
            type="text"
          />

          <ImageUploader
            id="discussion_photo"
            onSetDataUri={setImageData}
            onSetImageUri={setPhoto}
            onUpdateStatus={setUploadStatus}
            retryRef={(f) => (retryFunction.current = f)}
          />

          <ImageUploadProgress
            status={uploadStatus}
            uploaderId="discussion_photo"
            onRemoveImage={onRemoveImage}
            source={imageData || photo}
            retry={() => retryFunction.current()}
          />

          <TextArea
            style={{
              backgroundColor: 'transparent',
              paddingLeft: 11,
              border: 'none',
              paddingRight: 11
            }}
            value={body}
            onChange={updateBody}
            autoSize
            ref={textArea}
            placeholder="Your post here"
            className="body s__dark__bg"
          />
        </div>
      </div>
    </div>
  )
}
