import React from 'react'
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TabBarIOS
} from 'react-native'
import styles from 'styles'
import searchStyles from 'styles/search'
import TextInput from 'components/TextInput'
import Discover from 'renderers/Discover'
// import Icon from 'react-native-vector-icons/Ionicons'
import { Icon } from '@shoutem/ui/components/Icon'
import { HorizontalPager } from '@shoutem/ui/components/HorizontalPager'
import { PageIndicators } from '@shoutem/ui/components/PageIndicators'

export default class SearchScreen extends React.Component {
  state = {
    q: '',
    qs: ''
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = _ => this.setState({ qs: this._q.state.value })

  renderToolbar() {
    return (
      <View
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          height: 53,
          marginTop: 20,
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <View style={searchStyles.container}>
          <TextInput
            inputProps={{
              returnKeyLabel: 'search',
              returnKeyType: 'search'
            }}
            inputStyle={{ color: '#000' }}
            iconColor="#000"
            style={{ backgroundColor: '#eee' }}
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
    return (
      <View style={[styles.container]}>
        <PageIndicators count={3} activeIndex={0} />
        <HorizontalPager data={[]} />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderPage()}
        {this.renderToolbar()}
      </View>
    )
  }
}

const styles2 = StyleSheet.create({
  wrapper: { backgroundColor: '#000' },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
