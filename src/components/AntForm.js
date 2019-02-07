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

export class AntForm extends React.Component {
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

  renderField = field_key => {
    const { fields } = this.props

    const { getFieldDecorator } = this.props.form

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '234'
    })(
      <Select style={{ width: 80 }}>
        <Option value="234">+234</Option>
        <Option value="263">+263</Option>
      </Select>
    )

    switch (fields[field_key].type) {
      case 'text':
        return (
          <FormItem
            key={field_key}
            {...formItemLayout}
            label={fields[field_key].label}
          >
            {getFieldDecorator(field_key, {
              rules: fields[field_key].rules,
              initialValue: fields[field_key].initialValue
            })(
              <Input
                placeholder={fields[field_key].label}
                addonBefore={fields[field_key].addonBefore}
                // style={{ fontSize: 25 }}
                prefix={
                  fields[field_key].icon && (
                    <Icon
                      type={fields[field_key].icon}
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )
                }
              />
            )}
          </FormItem>
        )
      case 'textarea':
        return (
          <FormItem
            key={field_key}
            {...formItemLayout}
            label={fields[field_key].label}
          >
            {getFieldDecorator(field_key, {
              rules: fields[field_key].rules,
              initialValue: fields[field_key].initialValue
            })(
              <TextArea
                placeholder={fields[field_key].label}
                addonBefore={fields[field_key].addonBefore}
                autosize
                prefix={
                  fields[field_key].icon && (
                    <Icon
                      type={fields[field_key].icon}
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
          <FormItem
            key={field_key}
            {...formItemLayout}
            label={fields[field_key].label}
          >
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
        )
      case 'array':
        return (
          <FormItem
            key={field_key}
            {...formItemLayout}
            label={fields[field_key].label}
          >
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules
            })(<Cascader options={fields[field_key].options} />)}
          </FormItem>
        )

      case 'checkbox':
        return (
          <FormItem key={field_key} {...tailFormItemLayout}>
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules,
              valuePropName: 'checked'
            })(<Checkbox>{fields[field_key].label}</Checkbox>)}
          </FormItem>
        )

      case 'select':
        return (
          <FormItem
            key={field_key}
            label={fields[field_key].label}
            {...formItemLayout}
          >
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules
            })(
              <Select
                mode={fields[field_key].mode}
                showSearch
                optionFilterProp="children"
                placeholder={fields[field_key].placeholder}
              >
                {fields[field_key].options.map(option => (
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
          <FormItem
            key={field_key}
            label={fields[field_key].label}
            {...formItemLayout}
          >
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules
            })(
              <RadioGroup>
                {fields[field_key].options.map(option => (
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
          <FormItem
            key={field_key}
            label={fields[field_key].label}
            {...formItemLayout}
          >
            {getFieldDecorator(field_key, {
              rules: fields[field_key].rules,
              initialValue:
                fields[field_key].initialValue !== undefined
                  ? fields[field_key].initialValue
                  : 0
            })(
              <InputNumber
                size="large"
                min={
                  fields[field_key].min !== undefined
                    ? fields[field_key].min
                    : 0
                }
                max={100000}
              />
            )}
          </FormItem>
        )

      case 'date': {
        const { required } = fields[field_key]
        return (
          <FormItem
            key={field_key}
            label={fields[field_key].label}
            {...formItemLayout}
          >
            {getFieldDecorator(field_key, {
              initialValue: fields[field_key].initialValue,
              rules: fields[field_key].rules
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
        className={big ? 'big' : ''}
        style={{
          position: 'relative',
          // backgroundColor: '#fff',
          // padding: 20,
          // // width: 500,
          // borderRadius: 6,
          alignSelf: 'center',
          marginTop: 50,
          ...style
        }}
        onSubmit={this.handleSubmit}
      >
        {this.props.title && <h2>{this.props.title}</h2>}
        {this.props.topContent}

        {Object.keys(fields || {}).map((f, i, a) => {
          if (!fields[f].removable) return this.renderField(f, i, a)

          return (
            <View style={{ flexDirection: 'row' }}>
              {this.renderField(f, i, a)}
              <div
                style={{
                  height: '100%',
                  fontSize: 20,
                  marginLeft: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: '#eee',
                  borderRadius: 8
                }}
              >
                X
              </div>
            </View>
          )
        })}
        {onSubmit && (
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
        )}
        {this.props.bottomContent}
      </Form>
    )
  }
}

AntForm = Form.create()(AntForm)
