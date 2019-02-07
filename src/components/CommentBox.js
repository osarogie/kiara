import { confirmSession } from './../helpers/confirmSession'
import { loginLink } from 'helpers/links'
import { Constants } from './../constants'
import message from 'antd/lib/message'
import ActivityButton from 'components/ActivityButton'
import { View, Text } from 'react-native-web'
import Avatar from 'components/Avatar'
import CreateCommentMutation from 'mutations/CreateCommentMutation'
import { withNavigation } from 'react-navigation'
import { navHelper } from 'helpers/getNavigation'
import TextArea from 'antd/lib/input/TextArea'
import { useState } from 'react'
import { ViewerContext } from 'lib/withData'
import { withViewer } from 'lib/withViewer'

export function CommentBox({ id, parent_id, viewer, hasViewer }) {
  let textInput
  const [isSending, setSending] = useState(false)
  const [body, setBody] = useState('')

  function postComment() {
    if (!hasViewer) return

    setSending(true)

    if (body) {
      CreateCommentMutation.commit(
        { body, discussion_id: id, parent_id },
        {
          viewer,
          onCompleted: () => {
            setSending(false)
            setBody('')
          },
          onError: () => {
            setSending(false)
            message.error('Sorry, your comment could not be sent')
          }
        }
      )
    } else {
      setSending(false)
      message.warn('Your post needs a body')
    }
  }

  function onClick() {
    if (hasViewer) textInput.focus()
    else location.href = loginLink()
  }

  return (
    <View
      onClick={onClick}
      className="s__main__bg bd"
      style={{
        flexDirection: 'row',
        maxWidth: 500,
        margin: 'auto',
        borderRadius: 8,
        width: '100%',
        padding: 20
      }}
    >
      <Avatar
        width={40}
        rounded
        disableLink
        source={viewer}
        activeOpacity={0.7}
      />
      <View style={{ marginLeft: 20, flex: 1 }}>
        <TextArea
          style={{
            fontSize: 17,
            flex: 1,
            paddingTop: 6,
            backgroundColor: '#0000',
            border: 'none',
            color: 'inherit'
          }}
          autosize
          disabled={!hasViewer}
          ref={c => (textInput = c)}
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Leave a comment"
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }} />
          <ActivityButton
            onPress={postComment}
            indicatorColor="#05f"
            title="Post"
            textStyle={{ color: 'initial' }}
            icon={
              <button className="button" style={{ margin: 0 }}>
                Post
              </button>
            }
            buttonStyle={{
              display: body ? 'block' : 'none',
              backgroundColor: '#0000',
              padding: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }}
            isLoading={isSending}
          />
        </View>
      </View>
    </View>
  )
}

export default withViewer(CommentBox)
