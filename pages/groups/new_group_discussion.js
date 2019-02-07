import { discussionLink } from '../../src/helpers/links'
import { MutationService } from '../../src/services/MutationService'
import { CreateDiscussionMutation } from '../../src/mutations/CreateDiscussionMutation'
import { graphql } from 'react-relay'
import { ThemeSwitcher } from '../../src/components/ThemeSwitcher'
import { Toolbar } from 'components/Toolbar1'
import TextArea from 'antd/lib/input/TextArea'
import { NewPostAppBar } from '../../src/components/NewPostAppBar'
import 'discussions.scss'
import Affix from 'antd/lib/affix'
import withData from 'lib/withData'
import { useEffect, useState } from 'react'
import { Router } from '../../routes'

const query = graphql`
  query newGroupDiscussionQuery($id: ID!) {
    ...Viewer_viewer @relay(mask: false)
    group(id: $id) {
      ...Group_group @relay(mask: false)
    }
  }
`

export default function NewDiscussionGroup({ group }) {
  let textArea, success, d

  const [name, setTitleText] = useState('')
  const [body, setBodyText] = useState('')

  function checkEnterPress(e) {
    const code = e.keyCode ? e.keyCode : e.which

    if (code == 13) {
      textArea.focus()
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
    const mutation = MutationService(CreateDiscussionMutation).showProgress()

    mutation.callbacks({
      onCompleted() {
        if (success && d.getValue('_id')) {
          const params = {
            permalink: d.getValue('permalink'),
            _id: d.getValue('_id'),
            user: {
              username: d.getLinkedRecord('user').getValue('username')
            }
          }
          Router.pushRoute(discussionLink(params))
        } else message.success('Your story could not be saved')
      },

      onError() {
        message.success('Your story could not be saved')
      },

      updater(store) {
        success = store.getRootField('createDiscussion').getValue('success')

        d = store.getRootField('createDiscussion').getLinkedRecord('discussion')
      }
    })

    mutation.run({ name, body })
  }

  useEffect(() => {
    if (process.browser) window.publish = publish

    return () => {
      if (process.browser) delete window.publish
    }
  })

  return (
    <div className="editor discussion-editor" id="new_discussion">
      <Affix>
        <div className="toolbar elevated">
          <Toolbar
            className="inner"
            title={
              <img
                className="logo"
                style={{ height: 40 }}
                src="/static/images/logo3.png"
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
        <div>
          <input
            style={{
              paddingLeft: 11,
              paddingRight: 11,
              backgroundColor: 'transparent'
            }}
            placeholder="Your title here"
            value={name}
            onChange={updateTitle}
            className="title s__dark__bg"
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
            autosize
            ref={c => (textArea = c)}
            placeholder="Your post here"
            className="body s__dark__bg"
            name="discussion[body]"
            id="discussion_body"
          />
        </div>
      </div>
    </div>
  )
}

NewDiscussionGroup = withData(NewDiscussionGroup, {
  query,
  expect: ['viewer', 'group']
})
