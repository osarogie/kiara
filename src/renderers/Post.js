import { Constants } from './../constants'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  Dimensions,
  Share,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Head from 'next/head'

// import HTMLView from 'react-native-htmlview'
import Toolbar from 'components/Toolbar'
import styles from 'styles'
import excerptStyles from 'styles/excerptStyles'
import DiscussionLike from 'fragments/DiscussionLike'
import { graphql, createFragmentContainer } from 'react-relay'
import QueryRendererProxy from 'renderers/QueryRendererProxy'
import Avatar from 'components/Avatar'
import { getTimeAgo, getCommentCount } from 'utils'
import { connect } from 'react-redux'
import { BrowserLink } from 'components/BrowserLink'
import { userLink, groupLink } from 'helpers/links'
import { devLog } from 'lib/devLog'

const mapStateToProps = state => ({
  // loggedIn: state.user.loggedIn,
  current_user: state.user.user
})

// const { width } = Dimensions.get('window')

class Post extends React.Component {
  state = { width: 0 }

  containerStyles = [styles.container, { paddingBottom: 20 }]

  onLayout = ({
    nativeEvent: {
      layout: { width, height }
    }
  }) => {
    this.setState({ width, height })
    devLog({ width, height })
  }
  openWrite = _ =>
    this.props.openWrite({
      id: this.props.data.discussion._id,
      editing_mode: true
    })
  openComments = _ => this.props.openComments(this.props.data.discussion)
  openProfile = _ => this.props.openProfile(this.props.data.discussion.user)
  openCulture = _ => this.props.openCulture(this.props.data.discussion.group)

  renderFeaturePhoto() {
    const { width } = this.state
    const { feature_photo } = this.props.data.discussion
    if (feature_photo) {
      const height = (feature_photo.height / feature_photo.width) * width

      return (
        <Image
          source={{ uri: `https://${feature_photo.url}` }}
          style={{ width, height, backgroundColor: '#eee', margin: 'auto' }}
        />
      )
    } else return null
  }

  renderGroupInfo() {
    const {
      data: { discussion }
    } = this.props
    if (discussion.group) {
      return (
        <div className="slim">
          <Text
            style={[
              excerptStyles.groupInfo,
              {
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 8,
                paddingTop: 8,
                // backgroundColor: '#eee',
                fontStyle: 'italic'
              }
            ]}
          >
            <Text>Posted in </Text>
            <BrowserLink href={groupLink(discussion.group)}>
              <Text>{discussion.group.name}</Text>
            </BrowserLink>
            <Text> culture</Text>
          </Text>
          <style jsx>
            {`
              .slim {
                margin-top: 20px;
              }
            `}
          </style>
        </div>
      )
    } else return null
  }

  renderUserInfo() {
    const {
      data: { discussion }
    } = this.props
    // console.log(this.props)
    return (
      <div className="slim" onPress={this.openProfile}>
        <View
          onLayout={this.onLayout}
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <Avatar
            width={40}
            rounded
            source={discussion.user}
            title={discussion.user.name}
            onPress={this.openProfile}
            activeOpacity={0.7}
          />
          <View style={{ marginLeft: 20, flex: 1 }}>
            <BrowserLink href={userLink(discussion.user)}>
              <Text style={{ fontWeight: 'bold' }}>{discussion.user.name}</Text>
            </BrowserLink>
            <Text numberOfLines={1} style={{ flex: 1, fontSize: 13 }}>
              {discussion.user.bio}
            </Text>
            <div style={{ fontSize: 12, fontStyle: 'italic' }}>
              {getTimeAgo(discussion.created_at)}
            </div>
          </View>
        </View>
      </div>
    )
  }

  renderEdit() {
    const {
      data: { discussion }
    } = this.props
    if (this.props.current_user._id === discussion.user._id) {
      return (
        <TouchableOpacity onPress={this.openWrite}>
          <Text style={{ marginLeft: 20 }}>Edit</Text>
        </TouchableOpacity>
      )
    }

    return null
  }

  renderToolbar() {
    // const { discussion } = this.props.navigation.state.params
    const title = 'Story'
    // const subtitle =
    //   (discussion && { subtitle: `by ${discussion.user.name}` }) || {}

    return (
      <Toolbar
        title={title}
        actions={this.toolbarActions()}
        onActionSelected={this._onActionSelected.bind(this)}
        navIconName="md-arrow-back"
      />
    )
  }

  toolbarActions() {
    return [
      {
        title: 'Share',
        show: 'always',
        iconName: 'md-share'
      }
      // { title: 'Notifications', show: 'always', iconName: 'ios-notifications' },
      // { title: 'View Profile', show: 'always', iconName: 'ios-person' }
    ]
  }

  _onActionSelected(position) {
    const {
      data: { discussion }
    } = this.props

    switch (position) {
      case 0:
        const message = `Read "${discussion.name}" on TheCommunity - ${
          discussion.public_url
        } by ${discussion.user.name}`
        Share.share(
          { title: discussion.name, message },
          { dialogTitle: 'Share Story' }
        )
        break
      default:
        return
    }
  }

  renderControls() {
    const {
      data: { discussion },
      openLogin
    } = this.props
    const { comment_count } = discussion
    const comment_count_ = getCommentCount(comment_count)

    return (
      <View
        style={[
          styles.row,
          {
            alignItems: 'center',
            paddingRight: 20,
            paddingLeft: 20
          }
        ]}
        key={`post.c.viewholder.${discussion.id}`}
      >
        <DiscussionLike discussion={discussion} openLogin={openLogin} />
        <View style={styles.fillRow} />
        {this.renderEdit()}
        <TouchableOpacity onPress={this.openComments}>
          <Text style={{ marginLeft: 20 }}>
            {`${comment_count_} Contribution${comment_count === 1 ? '' : 's'}`}
          </Text>
        </TouchableOpacity>
        {/* <Icon
            name="md-more"
            style={excerptStyles.control}
            size={25}
            color="#777"
          /> */}
      </View>
    )
  }

  renderCommentBox() {
    // const discussion = this.props.data.discussion
    return (
      <TouchableHighlight
        className="s__main__bg bd"
        style={{
          marginVertical: 20,
          marginHorizontal: 'auto',
          padding: 20,
          borderRadius: 8,
          maxWidth: 500
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Avatar
            width={40}
            rounded
            disableLink
            source={Constants.user || {}}
            activeOpacity={0.7}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginLeft: 20
            }}
          >
            Leave a comment
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { discussion } = this.props.data

    return (
      <>
        <Head>
          <title key="title">{discussion.name} - TheCommunity</title>
        </Head>
        <View>
          <View style={this.containerStyles}>
            {this.renderGroupInfo()}
            {this.renderUserInfo()}
            <div className="slim" style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div className="title">{discussion.name}</div>
            </div>
            {this.renderFeaturePhoto()}
            <div
              className="slim body"
              dangerouslySetInnerHTML={{ __html: discussion.parsed_body }}
            >
              {/* <div
                value={discussion.parsed_body}
                stylesheet={htmlStyles}
                selectable={true}
                textComponentProps={{
                  selectable: true,
                  style: { color: '#000', lineHeight: 30 }
                }}
              /> */}
            </div>
            <div className="slim">{this.renderControls()}</div>
          </View>
          <div className="comments">
            <div className="inner">{this.renderCommentBox()}</div>
          </div>
          <style jsx>
            {`
              pre {
                background-color: #eee;
              }
              code {
                background-color: #eee;
              }
              a {
                color: #05f;
                fontweight: 500;
                textdecorationline: underline;
              }

              .body {
                font-size: 17px;
                line-height: 30px;
                padding: 0 20px;
              }
              .title {
                margin: 0 20px;
                font-size: 50px;
                font-weight: bold;
                font-family: system-ui, -apple-system, BlinkMacSystemFont,
                  'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
              }
              .comments {
                // background: #eee2;
              }
            `}
          </style>
        </View>
      </>
    )
  }
}

// PostFragmentContainer
const PostFragmentContainer = createFragmentContainer(
  connect(mapStateToProps)(Post),
  graphql`
    fragment Post on Query {
      discussion(id: $id) {
        id
        _id
        name
        body
        created_at
        ...DiscussionLike_discussion
        comment_count
        feature_photo {
          url
          height
          width
        }
        public_url
        group {
          _id
          id
          name
          permalink
        }
        user {
          id
          _id
          username
          name
          profile_picture_name
          bio
        }
        parsed_body
      }
    }
  `
)

export default ({ id, ...props }) => {
  return (
    <QueryRendererProxy
      query={graphql`
        query PostQuery($id: ID!) {
          ...Post
        }
      `}
      variables={{ id }}
      render={data => (
        <PostFragmentContainer id={id} data={data.props} {...props} />
      )}
    />
  )
}
const codeStyle = {
  fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
  backgroundColor: '#eee'
  // padding: 2,
  // borderRadius: 3,
  // flex: 1
}
const htmlStyles = StyleSheet.create({
  pre: codeStyle,
  code: codeStyle,
  a: {
    color: '#05f',
    fontWeight: '500',
    textDecorationLine: 'underline'
  }
})
