import DatePicker from 'antd/lib/date-picker'
import { DynamicForm } from 'components/DynamicForm'

import dayjs from 'dayjs'
import React from 'react'
import { CustomHead } from 'components/_partials/CustomHead'
import { newPoll } from 'helpers/links'
import { Form, Button } from 'antd'

class PollInfo extends React.Component {
  defaultTime = dayjs().add(1, 'day')

  state = {
    pollCloseDate: '',
    pollCloseTime: '',
    hidePoll: false
  }

  handleHidePoll = (e) => {
    this.setState({ hidePoll: e.target.checked })
  }

  componentDidMount() {
    this.onChange(this.defaultTime)
  }

  onChange = (e) => {
    const pollCloseDate = e.format('YYYY-MM-DD')
    const pollCloseTime = e.format('HH:mm:ss')

    this.setState({
      pollCloseDate,
      pollCloseTime
    })
  }

  onOk() {}

  getData = () => {
    const { pollCloseDate, pollCloseTime, hidePoll } = this.state

    return {
      pollCloseDate,
      pollCloseTime,
      hidePoll
    }
  }

  render() {
    const checkedClassName = this.state.hidePoll ? ' ant-checkbox-checked' : ''

    return (
      <div className="p20 bdt s__dark__bg">
        <div className="ant-row ant-form-item">
          <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-24" />
          <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-24">
            <div className="ant-form-item-control">
              <span className="ant-form-item-children">
                <label className="ant-checkbox-wrapper">
                  <span className={`ant-checkbox${checkedClassName}`}>
                    <input
                      onChange={this.handleHidePoll}
                      type="checkbox"
                      id="hidePoll"
                      defaultValue={this.state.hidePoll}
                      className="ant-checkbox-input"
                    />
                    <span className="ant-checkbox-inner" />
                  </span>
                  <span>Hide vote statistics</span>
                </label>
              </span>
            </div>
          </div>
        </div>
        <div className="ant-row ant-form-item">
          <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-24" />
          <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-24">
            <div className="ant-form-item-control">
              <span className="ant-form-item-children">
                <span className=" s__content__main">
                  Poll Closing Time -{' '}
                  <DatePicker
                    showTime
                    defaultValue={this.defaultTime}
                    placeholder="Select Time"
                    onChange={this.onChange}
                    onOk={this.onOk}
                    allowClear={false}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class PollForm extends React.Component {
  state = {
    0: {
      label: 'Option 1',
      name: 0,
      type: 'text',
      rules: [{ required: true, message: 'Option 1 is required' }],
      _destroy: false
    },
    1: {
      label: 'Option 2',
      name: 1,
      type: 'text',
      rules: [{ required: true, message: 'Option 2 is required' }],
      _destroy: false
    }
  }
  onSubmit = (data) => {
    const { onSubmit } = this.props

    let newData = []

    Object.keys(this.state).forEach((f) => {
      const field = this.state[f]
      if (!field._destroy)
        newData.push({
          title: data[f],
          _destroy: 'false'
        })
    })
    // console.log(newData)

    onSubmit && onSubmit(newData, this.pollInfo.getData())
  }
  onRemoveField = (key) => {
    this.setState(({ [key]: field }) => ({
      [key]: {
        ...field,
        _destroy: true
      }
    }))
  }
  addField = () => {
    const name = new Date().getTime()
    this.setState({
      [name]: {
        label: 'Other option',
        name,
        type: 'text',
        rules: [{ required: true, message: 'This option needs a name :)' }],
        removable: true
      }
    })
  }
  render() {
    return (
      <>
        <CustomHead title="Voting form" url={newPoll()} />
        <div
          className="bd mt2 pollform"
          style={{
            borderRadius: 5,
            marginBottom: 38
          }}
        >
          <div className="p20 s__main__bg">
            <DynamicForm
              title="Voting Form"
              ref={(c) => (this.form = c)}
              onSubmit={this.onSubmit}
              onRemoveField={this.onRemoveField}
              fields={this.state}
            />

            <Form.Item>
              <Button onClick={this.addField} size="large">
                Add option
              </Button>
            </Form.Item>
            <br />
          </div>
          <PollInfo ref={(c) => (this.pollInfo = c)} />
        </div>
      </>
    )
  }
}
