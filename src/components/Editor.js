import React from 'react'
import {
  // ViewPropTypes,
  Text,
  View
} from 'react-native'
import QueryRendererProxy from '../renderers/QueryRendererProxy'
import { withNavigation } from 'react-navigation'
// import Head from 'next/head'
import message from 'antd/lib/message'
import Router from 'next/router'

import { createFragmentContainer, graphql } from 'react-relay'

// import { Bar } from 'react-native-progress'
import createEnvironment from '../relay-environment'
import { connect } from 'react-redux'
import CreateDiscussionMutation from '../mutations/CreateDiscussionMutation'
import EditDiscussionMutation from '../mutations/EditDiscussionMutation'
import CreateCommentMutation from '../mutations/CreateCommentMutation'
import { navHelper } from '../helpers/getNavigation'
// import 'react-quill/dist/quill.snow.css'

import NProgress from 'nprogress'
const mapStateToProps = state => ({
  // night_mode: state.night_mode,
  api_key: state.user.api_key
})
const isClient = () => typeof window !== 'undefined'

class Editor extends React.Component {
  state = { sending: false, text: {} }
  new_id = null
  constructor(props) {
    super(props)
    this.getEditor = this.getEditor.bind(this)
    this._onActionSelected = this._onActionSelected.bind(this)

    var config = {}
    if (props.api_key) {
      config = { headers: { Authorization: `Token token=${props.api_key}` } }
    }
    this.environment = createEnvironment(config)
    if (isClient()) {
      this.ReactQuill = require('react-quill')
    }

    window.publish = this.publish
  }

  // componentDidMount() {
  //   this.richtext.focusTitle()
  // }

  publish = () => {
    // if (this.props.is_comment === true) {
    //   this.publishComment()
    // } else {
    this.publishDiscussion()
    // }
  }

  notify(_message) {
    this.setState({ sending: false })
    NProgress.done()
    message.info(_message)
  }

  async publishDiscussion() {
    this.setState({ sending: true })
    NProgress.start()

    const name = 'test' //await this.richtext.getTitleText()
    const body = this.state.text //await this.richtext.getContentHtml()

    if (name && body) {
      const inputs = { name, body }
      if (this.props.culture) {
        inputs.group_id = this.props.culture._id
      }
      // this.setState({ sending: true })
      if (this.props.editing_mode) {
        EditDiscussionMutation.commit(
          this.environment,
          { id: this.props.id, ...inputs },
          {
            onCompleted: _ => {
              // navHelper(this).openDiscussion({ _id: this.props.id })
              Router.push(`/d/${this.props.id}`)
            },
            onError: _ => {
              this.notify('Your post could not be saved')
            },
            updater: () => {
              // const newDiscussion = store
              //   .getRootField('editDiscussion')
              //   .getLinkedRecord('discussion')
              //
              // this.new_id = newDiscussion.getValue('_id')
              // this.props.goBack()
            }
          }
        )
      } else {
        CreateDiscussionMutation.commit(this.environment, inputs, {
          onCompleted: _ => {
            if (this.new_id) {
              // navHelper(this).openDiscussion({ _id: this.new_id })
              Router.push(`/d/${this.new_id}`)
            } else this.notify('Your post could not be published')
          },
          onError: _ => {
            this.notify('Your post could not be published')
          },
          updater: store => {
            const newDiscussion = store
              .getRootField('createDiscussion')
              .getLinkedRecord('discussion')

            this.new_id = newDiscussion.getValue('_id')
            // this.props.goBack()
          }
        })
      }
    } else {
      this.setState({ sending: false })
      NProgress.done()

      this.notify('Your post needs a title and a body')
    }
  }
  async publishComment() {
    this.setState({ sending: true })
    NProgress.start()

    const body = await this.richtext.getContentHtml()

    if (body) {
      const inputs = { body }
      CreateCommentMutation.commit(this.environment, inputs, {
        onCompleted: _ => {
          // this.props.goBack()
          this.setState({ sending: false })
          NProgress.done()
        },
        onError: _ => {
          this.notify('Your comment could not be sent')
        }
      })
    } else {
      this.setState({ sending: false })
      NProgress.done()

      this.notify('You cannot post an empty comment')
    }
  }
  getEditor = _ => this.richtext

  renderToolbar() {
    // const subtitle = culture ? { subtitle: culture.name } : {}
    return null
  }
  renderCultureName() {
    const culture = this.props.culture
    if (culture) {
      return (
        <Text
          style={{
            // flex: 1,
            backgroundColor: '#f2f2f2',
            color: '#bbb',
            padding: 5,
            paddingLeft: 20
          }}
        >
          {'This will go in the culture '}
          <Text style={{ fontStyle: 'italic', color: '#05f' }}>
            {culture.name}
          </Text>
        </Text>
      )
    }

    return null
  }

  renderProgress() {
    // if (this.state.sending) {
    //   return (
    //     <Bar
    //       indeterminate
    //       width={null}
    //       height={2}
    //       borderRadius={0}
    //       color="#05f"
    //       borderWidth={0}
    //       animationType="decay"
    //     />
    //   )
    // }

    return null
  }

  render() {
    // const contentPlaceholder = this.props.is_comment
    //   ? 'Your comment'
    //   : 'Your post'
    const { discussion } = this.props
    const ReactQuill = this.ReactQuill
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {this.renderToolbar()}
        <View>
          {this.renderCultureName()}
          {this.renderProgress()}

          {isClient() &&
            ReactQuill && (
              <ReactQuill
                value={this.state.text}
                style={{ flex: 1 }}
                onChange={this.handleChange}
              />
            )}
        </View>
      </View>
    )
  }
  handleChange = value => {
    this.setState({ text: value })

    console.log(value)
  }
  toolbarActions() {
    return [{ title: 'Publish', show: 'always' }]
  }

  _onActionSelected(position) {
    switch (position) {
      case 0:
        this.publish()
        // console.log(this.editor)
        break
      default:
        return
    }
  }
}

const ConnectedEditor = withNavigation(connect(mapStateToProps)(Editor))
// export default connect(mapStateToProps)(Editor)

const EditorFragmentContainer = createFragmentContainer(
  ConnectedEditor,
  graphql`
    fragment Editor_discussion on Discussion {
      id
      _id
      name
      body
      parsed_body
    }
  `
)

export default props =>
  props.editing_mode ? (
    <QueryRendererProxy
      query={graphql`
        query EditorQuery($id: ID!) {
          discussion(id: $id) {
            ...Editor_discussion
          }
        }
      `}
      variables={{ id: props.id }}
      render={data => (
        <EditorFragmentContainer
          discussion={data.props.discussion}
          {...props}
        />
      )}
    />
  ) : (
    <ConnectedEditor {...props} />
  )
