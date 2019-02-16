import React from 'react'
import { View, TouchableOpacity, VirtualizedList } from 'react-native'
import styles from 'styles'
import LoaderBox from 'components/LoaderBox'
import Separator from 'components/Separator'
import GroupListItem from 'fragments/GroupListItem'

export default class GroupList extends React.Component {
  state = {
    isFetchingTop: false,
    isLoading: false,
    hasMore: false
  }

  onRefresh = () => {
    const groups = this.props.groupList.groups_in

    if (this.props.relay.isLoading()) {
      return
    }

    this.setState({
      isFetchingTop: true
    })

    this.props.relay.refetchConnection(groups.edges.length, err => {
      this.setState({
        isFetchingTop: false
      })
    })
  }

  onEndReached = () => {
    const { groupList } = this.props
    const groups = groupList.groups_in || groupList.groups

    if (!groups.edges || groups.edges.length === 0) return

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
    <GroupListItem group={item.node} {...itemProps} />
  )

  renderFooter() {
    if (this.state.hasMore) {
      return (
        <LoaderBox isLoading={true} onPress={this.onEndReached.bind(this)} />
      )
    } else {
      return null
    }
  }

  renderHeader() {
    return <View style={[styles.imageWrap, { height: 0 }]} />
  }

  render() {
    const { groupList, itemProps } = this.props
    const groups = groupList.groups_in || groupList.groups

    if (groups.edges.length > 0) {
      return (
        <div className="inner">
          {this.props.renderHeader && this.props.renderHeader()}
          <VirtualizedList
            data={groups.edges}
            horizontal
            renderItem={props => this.renderItem({ ...props, itemProps })}
            keyExtractor={item => item.node.id}
            onEndReached={this.onEndReached}
            getItemCount={data => data.length}
            getItem={(data, ii) => data[ii]}
          />
        </div>
      )
    }

    return null
  }
}
