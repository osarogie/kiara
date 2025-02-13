import message from 'antd/lib/message'
import ActivityButton from 'components/ActivityButton'
import { View } from 'react-native-web'
import Avatar from 'components/Avatar'
import CreateCommentMutation from 'mutations/CreateCommentMutation'
import TextArea from 'antd/lib/input/TextArea'
import { useCallback, useState } from 'react'
import { useViewer } from 'lib/withViewer'

export default function CommentBox({ id, parent_id }) {
  let textInput
  const [isSending, setSending] = useState(false)
  const [body, setBody] = useState('')
  const { viewer, hasViewer, requireViewer } = useViewer()

  const postComment = useCallback(() => {
    if (!hasViewer) return

    setSending(true)

    if (body) {
      CreateCommentMutation.commit(
        { body, discussionId: id, parent_id },
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
  }, [hasViewer, body, id, parent_id, viewer])

  const onClick = useCallback(() => {
    if (hasViewer) {
      textInput.focus()
    } else {
      requireViewer('Login to comment')
    }
  }, [hasViewer, requireViewer])

  return (
    <div
      className="s__main__bg bd"
      style={{
        maxWidth: 500,
        margin: 'auto',
        borderRadius: 8,
        width: '100%'
      }}
    >
      <View
        onClick={onClick}
        style={{
          flexDirection: 'row',
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
            autoSize
            disabled={!hasViewer}
            ref={(c) => (textInput = c)}
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
    </div>
  )
}
