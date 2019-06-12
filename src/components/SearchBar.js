import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Platform } from 'react-native'
import { Button } from '@shoutem/ui/components/Button'
import Icon from 'components/vector-icons/MaterialIcons'
import { BLACK } from 'ui'

export class SearchBar extends Component {
  static propTypes = {
    value: PropTypes.string,
    height: PropTypes.number,
    style: PropTypes.any
  }

  static defaultProps = {
    height: 60
  }

  render() {
    const { height, style } = this.props
    return (
      <View style={[styles.box, { height }, style]}>
        <View
          style={{
            flex: 1,
            height: height - 10,
            borderRadius: 30
          }}
        >
          <input
            placeholder="Search for resturants around you"
            style={{
              flex: 1,
              height: height - 10,
              fontSize: 16,
              color: BLACK,
              border: 'none',
              marginLeft: 20
            }}
          />
        </View>
        <Button
          styleName="tight"
          style={{
            // borderTopRightRadius: 20,
            // borderBottomRightRadius: 20,
            // borderRadius: 20,
            // paddingHorizontal: 20,
            height: height - 20,
            width: height - 20,
            alignItems: 'center',
            justifyContent: 'center'
            // backgroundColor: '#655f17'
          }}
        >
          {/* <Text>Search</Text> */}
          <Icon name="search" size={(height / 60) * 30} color="#333" />
        </Button>
      </View>
    )
  }
}

export default SearchBar

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 30,
    minWidth: 300,
    width: '100%',
    alignSelf: 'center',
    maxWidth: 600,
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',

    paddingRight: 10,
    ...Platform.select({ web: { boxShadow: '0px 3px 12px -5px #000;' } })
  },
  submit: {}
})
