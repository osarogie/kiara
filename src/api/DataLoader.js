import React, { Component } from 'react'
import { Screen } from '@shoutem/ui/components/Screen'
import { YELLOW, BLACK } from 'ui'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native-web'
import Icon from 'components/vector-icons/MaterialIcons'
import { devLog } from 'lib/devLog'
import message from 'antd/lib/message'

const LoaderBox = ({ isLoading, onPress }) => (
  <Screen
    styleName="paper"
    style={{
      height: 500,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {isLoading ? (
      <ActivityIndicator size={25} color={BLACK} />
    ) : (
      <TouchableOpacity onPress={onPress}>
        <Icon name="refresh" color="#000" size={30} />
      </TouchableOpacity>
    )}
  </Screen>
)

export class DataLoader extends Component {
  mounted = false
  state = {}

  constructor(props) {
    super(props)
    this.renderPage = this.renderPage.bind(this)
    this.loadData = this.loadData.bind(this)

    // this.state = { resetValue: 1, environment: this.updateEnvironment(props) }
  }

  reload = _ => {
    this.setState({ props: undefined })
    this.loadData()
  }

  getProps = _ => this.state.props

  componentWillReceiveProps(props) {
    // this.setState({ environment: this.updateEnvironment(props) })
  }

  componentDidMount() {
    this.mounted = true
    this.loadData()
    if (this.props.refreshInterval)
      this.timer = setInterval(() => {
        this.loadData()
      }, Math.max(10000, this.props.refreshInterval * 1000))
  }

  componentWillUnmount() {
    this.mounted = false
    clearInterval(this.timer)
  }

  renderPage({ error, props, retry }) {
    if (props) {
      if (typeof props == 'array' && props.length < 1)
        return <Icon name="close" size={30} />
      return this.props.render({
        error,
        props,
        retry
        // environment: this.state.environment
      })
    }

    const reloadRenderer = _ => {
      this.setState({ resetValue: Math.random() })
      this.reload()
    }

    const loaderBox = (
      <LoaderBox
        isLoading={!error}
        error={error && error.message}
        onPress={reloadRenderer}
      />
    )

    let { renderLoading } = this.props

    if (renderLoading) {
      if (typeof renderLoading === 'string') return <Text>{renderLoading}</Text>

      return renderLoading(loaderBox)
    }

    return loaderBox
  }

  async loadData() {
    try {
      const data = await this.props.query(this.props.variables)
      devLog(data)
      if (data && this.mounted) this.setState({ props: data })
    } catch (error) {
      devLog(error.message)
      message.error('An error occured. Please try again.')
      if (this.mounted) this.setState({ error })
    }
  }

  render() {
    const { error, props, resetValue } = this.state
    return this.renderPage({ error, props, retry: this.loadData, resetValue })
  }
}

export default DataLoader
