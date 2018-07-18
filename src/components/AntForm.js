import React from 'react'
import { Animated } from 'react-native'
import Input from 'antd/lib/input/Input'
import Icon from 'antd/lib/icon'
import Form from 'antd/lib/form/Form'
import Button from 'antd/lib/button/button'

import Select from 'antd/lib/select'
import Cascader from 'antd/lib/cascader'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import AutoComplete from 'antd/lib/auto-complete'
import RadioGroup from 'antd/lib/radio/group'
import RadioButton from 'antd/lib/radio/radioButton'

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
    keyboardHeight: new Animated.Value(0),
    confirmDirty: false,
    autoCompleteResult: []
  }

  animateKeyboardHeight = (toValue, duration) => {
    Animated.timing(this.state.keyboardHeight, { toValue, duration }).start()
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
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
      callback('Two passwords that you enter is inconsistent!')
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
  // componentWillMount() {
  //   if (Platform.OS === 'android') {
  //     this.keyboardShowListener = Keyboard.addListener(
  //       'keyboardDidShow',
  //       ({ endCoordinates }) => {
  //         this.animateKeyboardHeight(endCoordinates.height, 0)
  //       }
  //     )
  //     this.keyboardHideListener = Keyboard.addListener(
  //       'keyboardDidHide',
  //       () => {
  //         this.animateKeyboardHeight(0, 300)
  //       }
  //     )
  //   }
  // }

  _scrollToInput = reactNode => this.scroll.scrollToFocusedInput(reactNode)

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
              rules: fields[field_key].rules
            })(
              <Input
                placeholder={fields[field_key].label}
                addonBefore={fields[field_key].addonBefore}
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
              rules: fields[field_key].rules
            })(<Cascader options={fields[field_key].options} />)}
          </FormItem>
        )

      case 'checkbox':
        return (
          <FormItem key={field_key} {...tailFormItemLayout}>
            {getFieldDecorator(field_key,  {
              rules: fields[field_key].rules
            ,
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
              rules: fields[field_key].rules
            })(
              <Select placeholder={fields[field_key].placeholder}>
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

      default:
        return null
    }
  }
  render() {
    const { fields, onSubmit, submitText } = this.props

    return (
      <Form
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 6,
          alignSelf: 'center'
        }}
        onSubmit={this.handleSubmit}
      >
        {Object.keys(fields || {}).map((f, i, a) => this.renderField(f, i, a))}
        {onSubmit && (
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {submitText || 'Submit Application'}
            </Button>
          </FormItem>
        )}
        {this.props.bottomContent}
        <Animated.View style={{ height: this.state.keyboardHeight }} />
      </Form>
    )
  }
}

AntForm = Form.create()(AntForm)
