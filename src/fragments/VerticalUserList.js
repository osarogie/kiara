// @flow

import React from 'react'
import { View, VirtualizedList } from 'react-native'
import styles from 'styles'
import UserListItem from 'fragments/UserListItem'
import Separator from 'components/Separator'
import LoadMoreBox from 'components/LoadMoreBox'

export function createVerticalUserList(propName, fieldName) {
  return class VerticalUserList extends React.Component {
    state = {
      isFetchingTop: false,
      isLoading: false,
      hasMore: false
    }

    elid = `userlist-${new Date().getTime()}`

    onRefresh = () => {
      const { [fieldName]: users } = this.props[propName]

      if (this.props.relay.isLoading()) {
        return
      }

      this.setState({
        isFetchingTop: true
      })

      this.props.relay.refetchConnection(users.edges.length, err => {
        this.setState({
          isFetchingTop: false
        })
      })
    }

    componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling)
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling)
    }

    onEndReached = () => {
      const users = this.props[propName].users

      if (!users.edges || users.edges.length === 0) return

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

    isBottom(el) {
      return el.getBoundingClientRect().bottom <= window.innerHeight
    }

    trackScrolling = () => {
      const wrappedElement = document.getElementById(this.elid)
      if (this.isBottom(wrappedElement)) {
        this.onEndReached()
      }
    }

    renderItem = ({ item, itemProps }) => (
      <UserListItem user={item.node} {...itemProps} vertical />
    )

    renderFooter() {
      if (this.state.hasMore) {
        return <LoadMoreBox isLoading={true} onPress={this.onEndReached} />
      } else {
        return null
      }
    }

    render() {
      const { itemProps } = this.props
      const users = this.props[propName][fieldName]
      // console.log(this.props)
      return (
        // <VirtualizedList
        //   data={users.edges}
        //   renderItem={props => this.renderItem({ ...props, itemProps })}
        //   keyExtractor={item => item.node.id}
        //   onEndReached={this.onEndReached}
        //   onRefresh={this.onRefresh}
        //   refreshing={this.state.isFetchingTop}
        //   ListFooterComponent={this.renderFooter.bind(this)}
        //   ListHeaderComponent={this.props.renderHeader}
        //   getItemCount={data => data.length}
        //   getItem={(data, ii) => data[ii]}
        // />
        <div id={this.elid}>
          {this.props.renderHeader && this.props.renderHeader()}
          {/* <VirtualizedList
            data={users.edges}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  // width: '100%',
                  flex: 1,
                  backgroundColor: '#CED0CE',
                  marginLeft: 84
                }}
              />
            )}
            renderItem={props => this.renderItem({ ...props, itemProps })}
            keyExtractor={item => item.node.id}
            onEndReached={this.onEndReached}
            getItemCount={data => data.length}
            getItem={(data, ii) => data[ii]}
          /> */}
          {users.edges.map(e => (
            <div key={e.node.id}>{this.renderItem({ item: e, itemProps })}</div>
          ))}
          {this.renderFooter()}
        </div>
      )
    }
  }
}

export const VerticalUserList = createVerticalUserList('userList', 'users')
