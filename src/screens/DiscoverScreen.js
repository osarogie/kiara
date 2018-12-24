import React from 'react'
import { View, Platform } from 'react-native'
import styles from 'styles'
import searchStyles from 'styles/search'
import TextInput from 'components/TextInput'
import Discover from 'renderers/Discover'
import getNavigation from 'helpers/getNavigation'
import { WHITE } from 'ui'
import AppBar from 'components/AppBar'

export default class DiscoverScreen extends React.Component {
  state = {
    q: '',
    qs: ''
  }

  handleSubmit = _ => this.setState({ qs: this._q.state.value })
  shouldComponentUpdate(p, s) {
    return s.qs !== this.state.qs
  }
  renderToolbar() {
    return (
      <View
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          height: 53,
          width: '100%',
          // position: 'absolute',
          justifyContent: 'center',
          backgroundColor: WHITE
        }}
      >
        <View style={searchStyles.container}>
          <TextInput
            inputProps={{
              returnKeyLabel: 'search',
              returnKeyType: 'search'
            }}
            // placeholderTextColor="#fff"
            // placeholderStyle={{ color: '#fff' }}
            inputStyle={{ color: '#333' }}
            iconColor="#ddd"
            style={{
              backgroundColor: '#f9f9f9',
              elevation: 0,
              borderWidth: 1,
              borderColor: '#eee',
              borderStyle: 'solid'
            }}
            placeholder="Search TheCommunity"
            ref={component => (this._q = component)}
            androidIcon="search"
            // value={this.state.q}
            // onChangeText={q => this.setState({ q })}
            onSubmitEditing={this.handleSubmit}
          />
        </View>
      </View>
    )
  }
  renderPage() {
    const { navigation } = this.props
    return (
      <View style={[styles.container]}>
        <Discover {...getNavigation(navigation)} q={this.state.qs} />
        {/* <View style={styles.elevation} /> */}
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <div className="inner">
          {this.renderToolbar()}
          {this.renderPage()}
        </div>
      </View>
    )
  }
}
