import React from 'react'
import { View } from 'react-native'
import styles from 'styles'
import Discover from 'renderers/Discover'
import AppBar from 'components/AppBar'
import Icon from 'react-native-vector-icons/Feather'
import withData from 'lib/withData'
import { graphql } from 'react-relay'
import { CustomHead } from 'components/_partials/CustomHead'

const query = graphql`
  query DiscoverScreenQuery {
    ...Viewer_viewer
  }
`

export default class DiscoverScreen extends React.Component {
  state = {
    q: '',
    qs: ''
  }

  handleSubmit = e => {
    // if (e.key === 'Enter') {
    this.setState({ q: e.target.value })
    // }
  }

  renderToolbar() {
    return (
      <View
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          height: 53,
          width: '100%',
          marginTop: 20,
          justifyContent: 'center'
        }}
      >
        <View style={{ height: 40 }}>
          {/* <TextInput
            className="bd"
            inputProps={{
              returnKeyLabel: 'search',
              returnKeyType: 'search'
            }}
            // placeholderTextColor="#fff"
            // placeholderStyle={{ color: '#fff' }}
            placeholder="Search TheCommunity"
            ref={component => (this._q = component)}
            androidIcon="search"
            // value={this.state.q}
            // onChangeText={q => this.setState({ q })}
            onSubmitEditing={this.handleSubmit}
          /> */}
          {/* <div
            className="search-form xs-mb3 xs-px2 sm-px0"
            role="search"
            data-module="search-form"
            id="mod-search-form-1"
          >
            <div className="xs-flex xs-flex-align-center xs-flex-justify-space-around xs-border-bottom xs-mb1">
              <input
                id="query"
                type="search"
                name="q"
                className="search-form__input xs-border-none xs-flex-grow-1"
                data-type="query"
                onKeyPress={this.handleSubmit}
                placeholder="Search TheCommunity"
                autocomplete="off"
                aria-owns="query-suggestions"
                aria-autocomplete="both"
              />
              <div
                className="search-form__icon search-form__icon--search  xs-block "
                data-type="search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                  <path d="M24.5 1C17.6 1 12 6.6 12 13.5c0 2.7.9 5.2 2.4 7.3L.6 34.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l13.8-13.8c2.1 1.5 4.6 2.4 7.3 2.4C31.4 26 37 20.4 37 13.5S31.4 1 24.5 1zm0 21c-4.7 0-8.5-3.8-8.5-8.5S19.8 5 24.5 5 33 8.8 33 13.5 29.2 22 24.5 22z" />
                </svg>
              </div>
              <div
                className="search-form__icon search-form__icon--clear xs-flex-align-center xs-flex-justify-center  xs-hide "
                data-type="clear"
              >
                <svg
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnSvg="http://www.w3.org/2000/svg"
                >
                  <path d="m37.3,5.23451l-4.53451,-4.53451l-13.76549,13.76549l-13.76549,-13.76549l-4.53451,4.53451l13.76549,13.76549l-13.76549,13.76549l4.53451,4.53451l13.76549,-13.76549l13.76549,13.76549l4.53451,-4.53451l-13.76549,-13.76549l13.76549,-13.76549z" />
                </svg>
              </div>
            </div>
            <div data-type="suggestions" className="xs-relative xs-hide" />
          </div> */}
        </View>
      </View>
    )
  }
  renderPage() {
    return <Discover q={this.state.qs} />
  }
  onSubmit = e => {
    e.preventDefault()
    this.setState(({ q }) => ({ qs: q }))
  }
  render() {
    return (
      <View style={styles.container}>
        <AppBar className="elevated" />
        <CustomHead title="Search TheCommunity" />
        <View style={{ alignItems: 'center' }}>
          <div className="inner search">
            {/* {this.renderToolbar()} */}
            <form onSubmit={this.onSubmit} className="slim">
              <div className="search-bar bd s__main__bg flex elevated">
                <button
                  className="fa fa-search s-icon"
                  style={{ background: 'transparent', border: 'none' }}
                  type="submit"
                >
                  <Icon name="search" size={24} className="search-icon" />
                </button>

                <input
                  type="text"
                  className="s-box extra-padding"
                  name="q"
                  onChange={this.handleSubmit}
                  placeholder="Search TheCommunity"
                />
              </div>
            </form>
            {this.renderPage()}
          </div>
        </View>
      </View>
    )
  }
}

DiscoverScreen = withData(DiscoverScreen, { query })
