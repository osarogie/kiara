import { newPollQuery } from './../src/relay/query/newPollQuery'
import message from 'antd/lib/message'
import { discussionLink } from './../src/helpers/links'
import { MutationService } from './../src/services/MutationService'
import { CreateDiscussionMutation } from './../src/mutations/CreateDiscussionMutation'

import { ThemeSwitcher } from './../src/components/ThemeSwitcher'
import { Toolbar } from 'components/Toolbar1'
import TextArea from 'antd/lib/input/TextArea'
import Affix from 'antd/lib/affix'
import withData from 'lib/withData'
import { useEffect, useState } from 'react'
import { PollForm } from 'components/forms/PollForm'
import Router from 'next/router'
import { useRef } from 'react'

export default function NewPoll() {
  let textArea = useRef()
  let success = useRef(false)
  let d = useRef()
  let pollForm = useRef()

  const [name, setTitleText] = useState('')
  const [body, setBodyText] = useState('')

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

  function publish(discussionOptionsAttributes, pollInfo) {
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

      onError() {
        message.error('Your story could not be saved')
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

    mutation.run({ name, body, discussionOptionsAttributes, ...pollInfo })
  }

  useEffect(() => {
    if (process.browser) window.publish = publish

    return () => {
      if (process.browser) delete window.publish
    }
  })

  return (
    <>
      <div className="editor discussion-editor" id="new_discussion">
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
                  <label htmlFor="discussion_photo" className="left table">
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
                  <button
                    htmlType="submit"
                    key="submit"
                    form="dform"
                    // onClick={publish}
                    style={{ marginLeft: 15 }}
                    name="commit"
                    className="button"
                  >
                    Post
                  </button>
                </div>
              }
            />
          </div>
        </Affix>
        <div className="slim" style={{ paddingLeft: 10, paddingRight: 10 }}>
          <div>
            <input
              style={{
                paddingLeft: 11,
                paddingRight: 11,
                backgroundColor: 'transparent',
                marginTop: 50
              }}
              placeholder="Name"
              value={name}
              onChange={updateTitle}
              className="title s__dark__bg b0"
              onKeyPress={checkEnterPress}
              type="text"
              name="discussion[name]"
              id="discussion_name"
            />

            <input
              className="hidden"
              id="discussion_photo"
              name="discussion_photo"
              type="file"
              accept="image/*"
            />
            <div className="progress">
              <div className="bar" />
            </div>
            <img
              src=""
              className="discussion_photo"
              style={{ display: 'none', width: '100%' }}
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
              autoSize={{
                minRows: 2
              }}
              ref={(c) => (textArea.current = c)}
              placeholder="Description (optional)"
              className="body s__dark__bg b0"
              name="discussion[body]"
              id="discussion_body"
            />
          </div>
        </div>
      </div>
      <div className="slim mt20" style={{ paddingLeft: 10, paddingRight: 10 }}>
        <PollForm onSubmit={publish} ref={(c) => (pollForm.current = c)} />
      </div>
    </>
  )
}

NewPoll = withData(NewPoll, { query: newPollQuery, forceLogin: true })
