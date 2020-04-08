import React from 'react'
import Input from 'antd/lib/input/Input'
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button/button'

import Select from 'antd/lib/select'
import Cascader from 'antd/lib/cascader'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import RadioGroup from 'antd/lib/radio/group'
import RadioButton from 'antd/lib/radio/radioButton'
import InputNumber from 'antd/lib/input-number'
import DatePicker from 'antd/lib/date-picker'

import { Form } from '@ant-design/compatible'
import { View, Text } from 'react-native'

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
    sm: { span: 20 }
  }
}

export class Dynamic extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  }

  handleSubmit = values => {
    console.log('Received values of form: ', values)
    this.props.onSubmit && this.props.onSubmit(values)
  }

  renderField = field_key => {
    const { fields } = this.props

    let {
      label,
      addonBefore,
      secureEntry,
      icon,
      type,
      rules = [],
      initialValue,
      options,
      mode,
      placeholder,
      min,
      max,
      name
    } = fields[field_key]

    const antFormItem = child => (
      <FormItem
        {...formItemLayout}
        key={field_key}
        label={label}
        name={name || field_key}
        rules={rules}
        initialValue={initialValue}
      >
        <>{child}</>
      </FormItem>
    )

    switch (type) {
      case 'text':
        return antFormItem(
          <Input
            placeholder={label}
            addonBefore={addonBefore}
            type={secureEntry ? 'password' : 'text'}
            prefix={
              icon && <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
            }
          />
        )

      case 'array':
        return antFormItem(<Cascader options={options} />)

      case 'checkbox':
        return (
          <FormItem
            {...tailFormItemLayout}
            key={field_key}
            name={field_key}
            initialValue={initialValue}
            rules={rules}
            valuePropName="checked"
          >
            <Checkbox>{label}</Checkbox>
          </FormItem>
        )

      case 'select': {
        const { dependencyData = {} } = this.props
        const { getFieldsValue } = this.form
        const { filter } = fields[field_key]

        if (filter) {
          options = filter(getFieldsValue(), dependencyData).map(
            (dependency, index) => ({
              label: dependency.name,
              value: index
            })
          )
        }

        return antFormItem(
          <Select
            mode={mode}
            showSearch
            optionFilterProp="children"
            placeholder={placeholder}
          >
            {options.map(option => (
              <Option key={option.label} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )
      }

      case 'radio':
        return antFormItem(
          <RadioGroup>
            {options.map(option => (
              <RadioButton key={option.label} value={option.value}>
                {option.label}
              </RadioButton>
            ))}
          </RadioGroup>
        )

      case 'number': {
        initialValue = initialValue !== undefined ? initialValue : 0
        return antFormItem(
          <InputNumber
            size="default"
            min={min !== undefined ? min : 0}
            // max={max || 100000}
          />
        )
      }

      case 'date':
        return antFormItem(<DatePicker size="medium" />)

      case 'break':
        return <div key={label} style={{ height: 20 }} />

      case 'section-head':
        return (
          <div key={label} className="ant-form-item-control-wrapper ant-col-24">
            <div className="ant-form-item-control">
              <span className="ant-form-item-children">
                <span className="ant-input-affix-wrapper">
                  <View style={{ marginTop: 20, marginBottom: 18 }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 17,
                        color: '#6e534a'
                      }}
                    >
                      {label}
                    </Text>
                  </View>
                </span>
              </span>
            </div>
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
          ...style
        }}
        ref={c => {
          this.form = c
        }}
        name="form"
        size="large"
        scrollToFirstError
        onFinish={this.handleSubmit}
      >
        <h2>{this.props.title}</h2>
        {this.props.topContent}

        {Object.keys(fields || {}).map((f, i, a) => {
          return this.renderField(f, i, a)
        })}
        {onSubmit && (
          <div style={{ display: 'block', width: '100%', float: 'left' }}>
            <Button
              className="button"
              type="primary"
              style={{
                backgroundColor: '#05f',
                border: 'none',
                borderRadius: 20,
                paddingLeft: 30,
                paddingRight: 30
              }}
              htmlType="submit"
            >
              {submitText || 'Submit'}
            </Button>
          </div>
        )}
      </Form>
    )
  }
}
