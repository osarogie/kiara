import EmptyList from 'components/EmptyList'
import PostListItem from 'fragments/PostListItem'
import Row from 'antd/lib/row'
import LoadMoreBox from 'components/LoadMoreBox'

export default class PostList extends React.Component {
  state = {
    isFetchingTop: false,
    isLoading: false,
    hasMore: false
  }

  elid = 'postlist'

  onRefresh = () => {
    const { discussionList } = this.props
    const discussions = discussionList.discussions || discussionList.top_stories

    if (this.props.relay.isLoading()) return

    this.setState({
      isFetchingTop: true
    })

    this.props.relay.refetchConnection(discussions.edges.length, err => {
      this.setState({
        isFetchingTop: false
      })
    })
  }

  onEndReached = _ => {
    const { discussionList } = this.props
    const discussions = discussionList.discussions || discussionList.top_stories

    if (!discussions.edges || discussions.edges.length === 0) return

    const hasMore = this.props.relay.hasMore()
    const isLoading = this.props.relay.isLoading()

    if (!hasMore || isLoading) {
      this.setState({
        hasMore,
        isLoading
      })
      return
    }

    // fetch more 5
    this.props.relay.loadMore(10, err => {
      this.setState({
        hasMore: this.props.relay.hasMore(),
        isLoading: this.props.relay.isLoading()
      })
      // console.log('loadMore: ', err)
    })

    this.setState({
      hasMore: this.props.relay.hasMore(),
      isLoading: this.props.relay.isLoading()
    })
  }

  renderItem = ({ item, itemProps }) => (
    <PostListItem discussion={item.node} {...itemProps} />
  )

  renderFooter() {
    const { discussionList } = this.props
    const discussions = discussionList.discussions || discussionList.top_stories

    if (!discussions.edges || discussions.edges.length == 0) {
      return <EmptyList message="No posts yet" />
    }

    if (this.state.hasMore) {
      return <LoadMoreBox isLoading={true} onPress={this.onEndReached} />
    }

    return null
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling)
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById(this.elid)
    if (this.isBottom(wrappedElement)) {
      this.onEndReached()
    }
  }

  render() {
    const { discussionList, itemProps, className } = this.props
    const discussions = discussionList
      ? discussionList.discussions || discussionList.top_stories
      : { edges: [] }

    return (
      <div id={this.elid} className={className} style={{ marginBottom: 50 }}>
        {this.props.renderTopHeader && this.props.renderTopHeader()}
        {this.props.renderHeader && this.props.renderHeader()}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {discussions.edges.map(e => (
            <div key={e.node.id}>{this.renderItem({ item: e, itemProps })}</div>
          ))}
        </Row>
        {this.renderFooter()}
      </div>
    )
  }
}
