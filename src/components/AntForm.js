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

import { Form } from 'antd'
import { View, Text } from 'react-native'
import { useCallback } from 'react'
import { useForm } from 'antd/lib/form/Form'
import TextArea from 'antd/lib/input/TextArea'

const Option = Select.Option

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
}

export function AntForm({
  fields,
  onSubmit,
  submitText,
  style,
  big,
  dependencyData = {},
  title,
  topContent,
  defaultValue,
  loading
}) {
  const [form] = useForm()
  const { getFieldsValue } = form

  const handleSubmit = useCallback(
    (values) => {
      console.log('Received values of form: ', values)
      onSubmit && onSubmit(values)
    },
    [onSubmit]
  )

  const renderField = (field, field_key) => {
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
    } = field

    switch (type) {
      case 'textarea':
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <TextArea
              placeholder={placeholder}
              // addonBefore={addonBefore}
              autoSize
              prefix={
                icon && (
                  <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
                )
              }
            />
          </Form.Item>
        )

      case 'text':
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <Input
              placeholder={placeholder}
              addonBefore={addonBefore}
              type={secureEntry ? 'password' : 'text'}
              prefix={
                icon && (
                  <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
                )
              }
            />
          </Form.Item>
        )

      case 'array':
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <Cascader options={options} />
          </Form.Item>
        )

      case 'checkbox':
        return (
          <Form.Item name={name} rules={rules} valuePropName="checked">
            <Checkbox>{label}</Checkbox>
          </Form.Item>
        )

      case 'select': {
        const { filter } = fields[field_key]

        if (filter) {
          options = filter(getFieldsValue(), dependencyData).map(
            (dependency, index) => ({
              label: dependency.name,
              value: index
            })
          )
        }

        return (
          <Form.Item name={name} label={label} rules={rules}>
            <Select
              mode={mode}
              showSearch
              optionFilterProp="children"
              placeholder={placeholder}
            >
              {options.map((option) => (
                <Option key={option.label} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )
      }

      case 'radio':
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <RadioGroup>
              {options.map((option) => (
                <RadioButton key={option.label} value={option.value}>
                  {option.label}
                </RadioButton>
              ))}
            </RadioGroup>
          </Form.Item>
        )

      case 'number': {
        initialValue = initialValue !== undefined ? initialValue : 0
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <InputNumber
              size="default"
              min={min !== undefined ? min : 0}
              // max={max || 100000}
            />
          </Form.Item>
        )
      }

      case 'date':
        return (
          <Form.Item name={name} label={label} rules={rules}>
            <DatePicker size="medium" />
          </Form.Item>
        )

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

  return (
    <Form
      {...formItemLayout}
      className={big ? 'big' : ''}
      style={{
        position: 'relative',
        // backgroundColor: '#fff',
        // padding: 20,
        // // width: 500,
        // borderRadius: 6,
        ...style
      }}
      form={form}
      layout="vertical"
      name="  "
      size="large"
      scrollToFirstError
      onFinish={handleSubmit}
      initialValues={defaultValue}
    >
      <h2>{title}</h2>
      {topContent}

      {Object.keys(fields || {}).map((f, i, a) => {
        if (!fields[f].removable)
          return (
            <React.Fragment key={f}>
              {renderField(fields[f], f, i, a)}
            </React.Fragment>
          )

        return (
          <div key={f} style={{ flexDirection: 'row', flex: 1 }}>
            {renderField(fields[f], f, i, a)}
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
          </div>
        )
      })}
      {onSubmit && (
        <div style={{ display: 'block', width: '100%', float: 'left' }}>
          <Button
            // className="button"
            loading={loading}
            disabled={loading}
            type="primary"
            style={{
              padding: '6px 22px',
              // backgroundColor: '#6548dd',
              // border: 'none',
              borderRadius: 20,
              // display: 'table',
              // marginLeft: 'auto',
              // marginRight: 'auto'
              minWidth: 150
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
