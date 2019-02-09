import { devLog } from 'lib/devLog'
import { BLUE } from 'ui'
import React from 'react'
import { View } from 'react-native'
import Input from 'antd/lib/input/Input'
import Icon from 'antd/lib/icon'
import Form from 'antd/lib/form/Form'
import Button from 'antd/lib/button/button'

import Select from 'antd/lib/select'
import Cascader from 'antd/lib/cascader'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import RadioGroup from 'antd/lib/radio/group'
import RadioButton from 'antd/lib/radio/radioButton'
import InputNumber from 'antd/lib/input-number'
import DatePicker from 'antd/lib/date-picker'
import TextArea from 'antd/lib/input/TextArea'

const Option = Select.Option

const FormItem = Form.Item

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

export class DynamicForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        devLog('Received values of form: ', values)
        this.props.onSubmit && this.props.onSubmit(values)
      }
    })
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you entered is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  submit = () => {
    debugger
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      )
    }
    this.setState({ autoCompleteResult })
  }

  renderField = key => {
    const { fields, onRemoveField } = this.props

    const { getFieldDecorator } = this.props.form

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '234'
    })(
      <Select style={{ width: 80 }}>
        <Option value="234">+234</Option>
        <Option value="263">+263</Option>
      </Select>
    )

    switch (fields[key].type) {
      case 'text': {
        const {
          label,
          initialValue,
          addonBefore,
          rules,
          removable,
          icon,
          _destroy
        } = fields[key]

        const display = _destroy ? 'none' : 'block'

        return (
          <FormItem
            style={{ display, marginBottom: 5 }}
            key={key}
            {...formItemLayout}
            label={label}
          >
            {getFieldDecorator(key, { rules, initialValue })(
              <Input
                placeholder={label}
                addonBefore={addonBefore}
                prefix={
                  icon && (
                    <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
                  )
                }
              />
            )}
            {removable ? (
              <div
                style={{
                  textAlign: 'right',
                  lineHeight: 2,
                  marginTop: -10
                }}
              >
                <span
                  className="s__content__main"
                  onClick={() => onRemoveField && onRemoveField(key)}
                  style={{
                    cursor: 'pointer'
                    // marginBottom: 20
                  }}
                >
                  - remove
                </span>
              </div>
            ) : (
              <div
                style={{
                  height: 20
                }}
              />
            )}
          </FormItem>
        )
      }

      case 'textarea':
        return (
          <FormItem key={key} {...formItemLayout} label={fields[key].label}>
            {getFieldDecorator(key, {
              rules: fields[key].rules,
              initialValue: fields[key].initialValue
            })(
              <TextArea
                autosize={fields[key].autosize || true}
                placeholder={fields[key].label}
                addonBefore={fields[key].addonBefore}
                prefix={
                  fields[key].icon && (
                    <Icon
                      type={fields[key].icon}
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )
                }
              />
            )}
          </FormItem>
        )
      case 'phone':
        return (
          <FormItem key={key} {...formItemLayout} label={fields[key].label}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
        )
      case 'array':
        return (
          <FormItem key={key} {...formItemLayout} label={fields[key].label}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules
            })(<Cascader options={fields[key].options} />)}
          </FormItem>
        )

      case 'checkbox':
        return (
          <FormItem key={key} {...tailFormItemLayout}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules,
              valuePropName: 'checked'
            })(<Checkbox>{fields[key].label}</Checkbox>)}
          </FormItem>
        )

      case 'select':
        return (
          <FormItem key={key} label={fields[key].label} {...formItemLayout}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules
            })(
              <Select
                mode={fields[key].mode}
                showSearch
                optionFilterProp="children"
                placeholder={fields[key].placeholder}
              >
                {fields[key].options.map(option => (
                  <Option key={option.label} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
        )

      case 'radio':
        return (
          <FormItem key={key} label={fields[key].label} {...formItemLayout}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules
            })(
              <RadioGroup>
                {fields[key].options.map(option => (
                  <RadioButton key={option.label} value={option.value}>
                    {option.label}
                  </RadioButton>
                ))}
              </RadioGroup>
            )}
          </FormItem>
        )

      case 'number':
        return (
          <FormItem key={key} label={fields[key].label} {...formItemLayout}>
            {getFieldDecorator(key, {
              rules: fields[key].rules,
              initialValue:
                fields[key].initialValue !== undefined
                  ? fields[key].initialValue
                  : 0
            })(
              <InputNumber
                size="large"
                min={fields[key].min !== undefined ? fields[key].min : 0}
                max={100000}
              />
            )}
          </FormItem>
        )

      case 'date': {
        const { required } = fields[key]
        return (
          <FormItem key={key} label={fields[key].label} {...formItemLayout}>
            {getFieldDecorator(key, {
              initialValue: fields[key].initialValue,
              rules: fields[key].rules
            })(<DatePicker size="large" />)}
          </FormItem>
        )
      }
      case 'break':
        return (
          <div className="break">
            <style jsx>{`
              .break {
                margin-bottom: 20px;
              }
            `}</style>
          </div>
        )
      default:
        return null
    }
  }
  render() {
    const { fields, onSubmit, submitText, style, big } = this.props

    return (
      <Form
        id="dform"
        className={big ? 'big' : ''}
        style={{
          position: 'relative',
          // backgroundColor: '#fff',
          // padding: 20,
          // // width: 500,
          // borderRadius: 6,
          alignSelf: 'center',
          ...style
        }}
        ref={c => (this.form = c)}
        onSubmit={this.handleSubmit}
      >
        {this.props.title && <h2>{this.props.title}</h2>}
        {this.props.topContent}

        {Object.keys(fields || {}).map((f, i, a) => {
          return this.renderField(f, i, a)
        })}
        {/* {onSubmit && (
          <FormItem {...tailFormItemLayout}>
            <Button
              className="button"
              type="primary"
              style={{
                backgroundColor: BLUE,
                border: 'none',
                borderRadius: 20,
                paddingLeft: 30,
                paddingRight: 30
              }}
              htmlType="submit"
            >
              {submitText || 'Submit'}
            </Button>
          </FormItem>
        )} */}
        {this.props.bottomContent}
      </Form>
    )
  }
}

DynamicForm = Form.create()(DynamicForm)
