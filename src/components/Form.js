import React from 'react'
import { Picker, View, Animated } from 'react-native'
import { TextField } from 'components/TextField'
import ActivityButton from 'components/ActivityButton'
import { WHITE, BLUE } from 'ui'
import { Heading } from '@shoutem/ui/components/Text'

export class Form extends React.Component {
  state = { keyboardHeight: new Animated.Value(0) }

  animateKeyboardHeight = (toValue, duration) => {
    Animated.timing(this.state.keyboardHeight, { toValue, duration }).start()
  }

  componentWillReceiveProps({ errors }) {
    if (errors && typeof errors === 'object') {
      let es = {}

      for (const e in errors) {
        if (errors.hasOwnProperty(e) && errors[e]) {
          es[`${e}$error`] = Array.isArray(errors[e]) ? errors[e][0] : errors[e]
        }
      }

      this.setState(es)
    }
  }

  onSubmit = async () => {
    // const { isSaving, keyboardHeight, ...data } = this.state
    const { fields, onSubmit } = this.props
    let data = {}

    for (const f in fields) {
      if (fields.hasOwnProperty(f) && this.state[f]) {
        data[f] = this.state[f]
      }
    }

    // this.props.onSubmit && this.props.onSubmit(data)

    if (onSubmit) {
      this.setState({ isSaving: true })
      await this.props.onSubmit(data)
      this.setState({ isSaving: false })
    }
  }

  validate = () => {
    const { fields } = this.props
    var flag = true

    for (var f in fields)
      if (fields.hasOwnProperty(f))
        if (fields[f].required && !this.state[f]) {
          flag = false

          break
        }

    return flag
  }

  onNext = (f, i, a) => {
    if (a.length > i + 1) {
      const field = this[a[i + 1]]

      field && field.focus && field.focus()
    } else {
      this.onSubmit()
    }
  }

  _scrollToInput = reactNode => this.scroll.scrollToFocusedInput(reactNode)

  renderField = (f, i, a) => {
    const { fields } = this.props

    switch (fields[f].type) {
      case 'text':
        return (
          <TextField
            key={f}
            showPasswordAccessory={fields[f].secure}
            title={fields[f].title}
            characterRestriction={fields[f].characterRestriction}
            error={this.state[`${f}$error`]}
            // onFocus={e => this._scrollToInput(findNodeHandle(e.target))}
            returnKeyType={a.length > i + 1 ? 'next' : 'send'}
            onSubmitEditing={() => this.onNext(f, i, a)}
            ref={e => (this[f] = e)}
            label={fields[f].label}
            onChangeText={t => this.setState({ [f]: t, [`${f}$error`]: null })}
          />
        )
      case 'phone':
        return (
          <TextField
            key={f}
            // onFocus={e => this._scrollToInput(findNodeHandle(e.target))}
            returnKeyType={a.length > i + 1 ? 'next' : 'send'}
            title={fields[f].title}
            characterRestriction={fields[f].characterRestriction}
            error={this.state[`${f}$error`]}
            onSubmitEditing={() => this.onNext(f, i, a)}
            ref={e => (this[f] = e)}
            keyboardType="phone-pad"
            label={fields[f].label}
            onChangeText={t => this.setState({ [f]: t, [`${f}$error`]: null })}
          />
        )
      case 'picker':
        return (
          <Picker
            key={f}
            ref={e => (this[f] = e)}
            selectedValue={this.state[f]}
            onValueChange={value => this.setState({ [f]: value })}
            collapsable={true}
          >
            {(fields[f].options || []).map(o => (
              <Picker.Item key={o.label} label={o.label} value={o.value} />
            ))}
          </Picker>
        )

      default:
        return null
    }
  }
  render() {
    const { fields, onSubmit, submitText, storage } = this.props

    return (
      <View
        style={{
          alignSelf: 'center',
          //   marginHorizontal: 50,
          backgroundColor: '#fff',
          width: 350,
          padding: 20,
          borderRadius: 10
        }}
      >
        <div
          className="heading"
          style={{
            fontWeight: 'bold',
            marginTop: 30,
            alignSelf: 'center'
          }}
        >
          {submitText}
        </div>
        <View
          style={{
            alignSelf: 'center',
            //   marginHorizontal: 50,
            width: 300,
            marginTop: 30,
            marginHorizontal: 2,
            marginBottom: 30,
            backgroundColor: '#fff'
            // borderRadius: 5,
            // elevation: 2
          }}
        >
          {Object.keys(fields || {}).map((f, i, a) =>
            this.renderField(f, i, a)
          )}
          {onSubmit || storage ? (
            <ActivityButton
              title={submitText || 'Submit'}
              disabled={!this.validate()}
              isLoading={this.state.isSaving}
              onPress={this.onSubmit}
              buttonStyle={{
                alignSelf: 'center',
                marginTop: 30,
                height: 40,
                width: 120,
                borderRadius: 30,
                backgroundColor: BLUE
              }}
              indicatorColor={WHITE}
              textStyle={{ color: '#fff' }}
            />
          ) : null}
        </View>
        {this.props.bottomContent}
      </View>
    )
  }
}
