// @flow

import React from 'react'
import createEnvironment from 'relay-environment'
import { QueryRenderer } from 'react-relay'
import { connect } from 'react-redux'
import LoaderBox from 'components/LoaderBox'
import ContentLoader from 'react-content-loader'

const mapStateToProps = state => ({ api_key: state.user.api_key })

class QueryRendererProxy extends React.Component {
  constructor(props) {
    super(props)
    this.renderPage = this.renderPage.bind(this)

    this.state = { resetValue: 1, environment: this.updateEnvironment(props) }
  }

  componentWillReceiveProps(props) {
    this.setState({ environment: this.updateEnvironment(props) })
  }

  shouldComponentUpdate(p) {
    return (
      JSON.stringify(this.props.variables) != JSON.stringify(p.variables) ||
      this.props.environment != p.environment
    )
  }

  updateEnvironment(props) {
    const { api_key } = props

    var config = {}
    if (api_key) {
      config = { headers: { Authorization: `Token token=${api_key}` } }
    }
    return createEnvironment(config)
  }

  renderPage({ error, props, retry }) {
    if (props)
      return this.props.render({
        error,
        props,
        retry,
        environment: this.state.environment
      })

    const reloadRenderer = _ => {
      // this.setState({ resetValue: Math.random() })
      // retry()
      this.setState({ environment: this.updateEnvironment(this.props) })
    }

    if (!error)
      return (
        // <div style={{ width: 400 }}>
        //   <ContentLoader
        //     height={160}
        //     width={400}
        //     speed={2}
        //     style={{ margin: 20 }}
        //     primaryColor="#f3f3f3"
        //     secondaryColor="#ecebeb"
        //   >
        //     <rect x="0" y="15" rx="4" ry="4" width="117" height="10.4" />
        //     <rect x="0" y="35" rx="3" ry="3" width="85" height="10.4" />
        //     <rect x="0" y="80" rx="3" ry="3" width="350" height="10.4" />
        //     <rect x="0" y="100" rx="3" ry="3" width="380" height="10.4" />
        //     <rect x="0" y="120" rx="3" ry="3" width="201" height="10.4" />
        //     {/* <circle cx="30" cy="30" r="30" /> */}
        //   </ContentLoader>
        // </div>
        null
      )

    return (
      <LoaderBox
        isLoading={!error}
        error={error && error.message}
        onPress={reloadRenderer}
      />
      // <Card loading={!error}>error</Card>
    )
  }

  render() {
    return (
      <QueryRenderer
        environment={this.state.environment}
        resetValue={this.state.resetValue}
        {...this.props}
        render={this.renderPage}
      />
    )
  }
}

export default connect(mapStateToProps)(QueryRendererProxy)
