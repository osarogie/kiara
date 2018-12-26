import { Constants } from './../constants'
import message from 'antd/lib/message'
import React from 'react'
import { connect } from 'react-redux'
import ActivityButton from 'components/ActivityButton'
import {
  View,
  Text,
  TextInput
  // ToastAndroid
  // KeyboardAvoidingView
} from 'react-native'
import styles from 'styles'
import colors from 'colors'
import Avatar from 'components/Avatar'
import CreateCommentMutation from 'mutations/CreateCommentMutation'
import Icon from 'components/vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'
import { navHelper } from 'helpers/getNavigation'

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  user: state.user.user
})
class CommentBox extends React.Component {
  state = { isSending: false, inputSize: 40 }

  sendReply = () => {
    this.setState({ isSending: true })
    const { body } = this.state
    const discussion_id = this.props.id
    console.log(this.props)

    if (Constants.user) {
      if (body) {
        CreateCommentMutation.commit(
          this.props.environment,
          {
            body,
            discussion_id,
            gid: this.props.gid
          },
          {
            onCompleted: ({ editUser, ...props }) => {
              this.setState({ isSending: false, body: '' })
              message.success('Your comment has been sent')
            },
            onError: _ => {
              this.setState({ isSending: false })
              message.warn('Your comment could not be sent')
            }
          }
        )
      } else {
        this.setState({ isSending: false })
        message.warn('Your post needs a body')
      }
    } else {
      this.setState({ isSending: false })

      navHelper(this).openLogin()
    }
  }

  render() {
    console.log(this.props)
    const { discussion, user } = this.props
    return (
      <View
        onClick={() => this.commentBox.focus()}
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
          source={Constants.user || {}}
          activeOpacity={0.7}
        />
        <View style={{ marginLeft: 20, flex: 1 }}>
          {/* <View style={{ flex: 1 }}> */}
          <TextInput
            style={{
              height: this.state.inputSize,
              fontSize: 17,
              flex: 1,
              paddingTop: 6
            }}
            ref={c => (this.commentBox = c)}
            underlineColorAndroid="#05f"
            onContentSizeChange={e =>
              this.setState({ inputSize: e.nativeEvent.contentSize.height })
            }
            keyboardType={this.props.keyboardType}
            value={this.state.body}
            multiline={true}
            onChangeText={body => this.setState({ body })}
            placeholder="Leave a comment"
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <ActivityButton
              onPress={this.sendReply}
              indicatorColor="#05f"
              title="Post"
              textStyle={{ color: 'initial' }}
              icon={
                // <Icon
                //   name="md-send"
                //   style={{ marginRight: 0 }}
                //   size={20}
                //   color={'#05f'}
                // />
                <button className="button" style={{ margin: 0 }}>
                  Post
                </button>
              }
              buttonStyle={{
                display: this.state.body ? 'block' : 'none',
                backgroundColor: '#0000',
                padding: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0,
                paddingLeft: 0
              }}
              isLoading={this.state.isSending}
            />
          </View>
          {/* </View> */}
        </View>
      </View>
    )
  }
}

export default withNavigation(connect(mapStateToProps)(CommentBox))
