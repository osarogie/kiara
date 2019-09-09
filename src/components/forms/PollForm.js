import DatePicker from 'antd/lib/date-picker'
import { DynamicForm } from 'components/DynamicForm'
import { BLUE } from 'ui'
import 'pollview.scss'

import moment from 'moment/min/moment.min'
import TimePicker from 'antd/lib/time-picker'
import { useState } from 'react'
import { CustomHead } from 'components/_partials/CustomHead'
import { newPoll } from 'helpers/links'
class PollInfo extends React.Component {
  defaultTime = moment().add(1, 'day')

  state = {
    pollCloseDate: '',
    pollCloseTime: '',
    hidePoll: false
  }

  handleHidePoll = e => {
    this.setState({ hidePoll: e.target.checked })
  }

  componentWillMount() {
    this.onChange(this.defaultTime)
  }

  onChange = e => {
    const pollCloseDate = `${e.year()}-${e.month() + 1}-${e.date()}`
    const pollCloseTime = `${e.hour()}:${e.minute()}`

    this.setState({
      pollCloseDate,
      pollCloseTime
    })

    // console.log({
    //   pollCloseDate,
    //   pollCloseTime
    // })
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
          <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8" />
          <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
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
          <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8" />
          <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
            <div className="ant-form-item-control">
              <span className="ant-form-item-children">
                <span className="ant-input-affix-wrapper s__content__main">
                  Poll Closing Time -{' '}
                  <DatePicker
                    showTime
                    defaultValue={this.defaultTime}
                    placeholder="Select Time"
                    onChange={this.onChange}
                    onOk={this.onOk}
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
      type: 'text',
      rules: [{ required: true, message: 'Option 1 is required' }],
      _destroy: false
    },
    1: {
      label: 'Option 2',
      type: 'text',
      rules: [{ required: true, message: 'Option 2 is required' }],
      _destroy: false
    }
  }
  onSubmit = data => {
    const { onSubmit } = this.props

    let newData = []

    Object.keys(this.state).forEach((f, i, a) => {
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
  onRemoveField = key => {
    this.setState(({ [key]: field }) => ({
      [key]: {
        ...field,
        _destroy: true
      }
    }))
  }
  addField = () => {
    this.setState({
      [new Date().getTime()]: {
        label: 'Other option',
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
              ref={c => (this.form = c)}
              onSubmit={this.onSubmit}
              onRemoveField={this.onRemoveField}
              fields={this.state}
            />

            <br />
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8" />
              <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                  <span className="ant-form-item-children">
                    <span className="ant-input-affix-wrapper">
                      <button onClick={this.addField} className="button">
                        Add option
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PollInfo ref={c => (this.pollInfo = c)} />
        </div>
      </>
    )
  }
}
