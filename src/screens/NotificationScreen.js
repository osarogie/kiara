import React from 'react'
import { View, Platform } from 'react-native'
import styles from 'styles'
import Icon from 'components/vector-icons/Feather'
import Toolbar from 'components/Toolbar'

export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="bell"
        style={[styles.icon, { marginRight: 0 }]}
        size={23}
        color={tintColor}
      />
    )
  }
  renderToolbar() {
    return Platform.select({
      android: (
        <Toolbar
          // {...this.state.colorProps}
          // titleColor={this.state.dark ? '#fff' : '#05f'}
          // actions={this.toolbarActions()}
          // onActionSelected={this._onActionSelected}
          navIconName="md-arrow-back"
          // style={styles.toolbar}
          title="Notifications"
        />
      ),
      ios: null
    })
  }
  render() {
    return (
      <View style={{}}>
        {this.renderToolbar()}
        <View style={styles.separator} />
      </View>
    )
  }
}
