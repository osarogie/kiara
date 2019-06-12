import React from 'react'
import excerptStyles from '../excerptStyles'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import { getTimeAgo, imageUrl } from '../utils'

import Avatar from '../../components/Avatar'
import { Row } from '@shoutem/ui/components/Row'
import { View } from '@shoutem/ui/components/View'
import { View, Text } from 'react-native-web'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'

class CommentRow extends React.PureComponent {
  render() {
    const { comment, openDiscussion } = this.props
    return (
      <TouchableOpacity onPress={this.openDiscussion}>
        <Row>
          <Avatar
            medium
            rounded
            source={comment.user}
            title={comment.user.name}
            activeOpacity={0.7}
          />
          <View styleName="vertical">
            <View styleName="horizontal space-between">
              <Text styleName="">{comment.user.name}</Text>
              <Caption>{getTimeAgo(comment.created_at)}</Caption>
            </View>
            {/* <Text styleName="multiline">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High.</Text> */}
            <div styles={excerptStyles.body}>
              {comment.body}
              {comment.word_count > 30 ? '***...(Read More)***' : ''}
            </div>
          </View>
        </Row>
      </TouchableOpacity>
    )
  }
}

export default createFragmentContainer(CommentRow, {
  comment: graphql`
    fragment CommentRow_comment on Comment {
      id
      _id
      body
      created_at
      discussion_id
      discussion {
        id
        _id
      }
      user {
        id
        _id
        name
        username
        profile_picture_name
      }
    }
  `
})
