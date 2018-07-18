import React from 'react'
import ParentTextField from 'components/TextField/field'
// import MaterialIcon from 'components/vector-icons/MaterialIcons'
import { BLACK } from 'ui'

export class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secureTextEntry: props.showPasswordAccessory,
      ...props
    }
  }

  focus = () => this.field.focus()
  blur = () => this.field.blur()
  clear = () => this.field.clear()

  componentWillReceiveProps(props) {
    this.setState(props)
  }
  // onFocus = _ => {
  //   let { errors = {} } = this.state

  //   for (let name in errors) {
  //     let ref = this[name]

  //     if (ref && ref.isFocused()) {
  //       delete errors[name]
  //     }
  //   }

  //   this.setState({ errors })
  // }

  onChangeText = text => {
    // ["password"]
    //   .map(name => ({ name, ref: this[name] }))
    //   .forEach(({ name, ref }) => {
    //     if (ref && ref.isFocused()) {
    //       this.setState({ [name]: text });
    //     }
    //   });
    const { onChangeText } = this.props
    onChangeText && onChangeText(text)
  }
  renderAccessory = _ => {
    let { secureTextEntry, showPasswordAccessory, showAccessory } = this.state
    // if (showPasswordAccessory) {
    //   let name = secureTextEntry ? 'visibility' : 'visibility-off'

    //   return (
    //     <MaterialIcon
    //       size={24}
    //       name={name}
    //       color={ParentTextField.defaultProps.baseColor}
    //       onPress={this.onAccessoryPress}
    //       suppressHighlighting
    //     />
    //   )
    // } else if (showAccessory) {
    //   return this.props.renderAccessory()
    // }

    return null
  }
  onSubmitPassword = _ => {
    this.field.blur()
  }

  onAccessoryPress = _ => {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry
    }))
  }
  render() {
    let { secureTextEntry } = this.state
    const { showPasswordAccessory, ...props } = this.props

    return (
      <ParentTextField
        ref={component => (this.field = component)}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically={true}
        // onFocus={this.onFocus}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitPassword}
        returnKeyType="done"
        // title="Choose wisely"
        // maxLength={30}
        lineWidth={2}
        // characterRestriction={20}
        tintColor={BLACK}
        // value={value}
        renderAccessory={this.renderAccessory}
        {...props}
        secureTextEntry={secureTextEntry}
      />
    )
  }
}
