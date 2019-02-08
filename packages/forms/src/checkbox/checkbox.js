// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  trim,
  unique
} from '@t7/utils'

// Define class.
class Checkbox extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    // Props.
    const {
      checked,
      id = unique()
    } = this.props

    this.state = {
      id,
      checked: !!checked,
      oldChecked: checked
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const { checked } = props

    // State.
    const { oldChecked } = state

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(checked) &&
      checked !== oldChecked
    ) {
      newState = {
        checked,
        oldChecked: checked
      }
    }

    // Expose object.
    return newState
  }

  // Change event.
  handleChange (e = {}) {
    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // Get value.
    const {
      checked,
      value = ''
    } = el

    this.setState({
      checked: !!checked
    })

    // Callback.
    this.props.handleChange(e, value, checked)
  }

  // Render method.
  render () {
    // State.
    const {
      checked,
      id
    } = this.state

    // Props
    const {
      autofocus,
      classNameForInput,
      classNameForLabel,
      disabled,
      label,
      name,
      required,
      type,
      value,
      styleForInput,
      styleForLabel
    } = this.props

    // Events.
    const { handleChange } = this

    // Is radio?
    const isRadio = (
      type === 'radio'
    )

    // Props for label.
    const propsForLabel = {
      htmlFor: id,
      style: styleForLabel,

      // Build class name.
      className: trim(
        [
          isRadio
            ? 't7-radio__label'
            : 't7-checkbox__label',
          classNameForLabel
        ].join(' ')
      )
    }

    // Props for span.
    const propsForSpan = {
      'aria-hidden': true,
      style: styleForInput,

      // Build class name.
      className: trim(
        [
          isRadio
            ? 't7-radio__fake'
            : 't7-checkbox__fake',
          classNameForInput
        ].join(' ')
      )
    }

    // Props for input.
    const propsForInput = {
      disabled,
      id,
      name,
      required,
      type,
      value,
      autoFocus: autofocus,
      onChange: handleChange,
      onFocus: handleChange,

      // Build class name.
      className: (
        isRadio
          ? 't7-radio'
          : 't7-checkbox'
      )
    }

    // Radio?
    if (type === 'radio') {
      propsForInput.defaultChecked = checked

    // Checkbox?
    } else {
      propsForInput.checked = checked
    }

    // Expose UI.
    return (
      <label {...propsForLabel}>

        <input
          {...propsForInput}
        />

        <span
          {...propsForSpan}
        />

        {label}

      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  autofocus: PropTypes.bool,
  classNameForInput: PropTypes.string,
  classNameForLabel: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  styleForInput: PropTypes.object,
  styleForLabel: PropTypes.object,

  // Alphanumeric.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Control checked state.
  checked: PropTypes.bool,

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Checkbox.defaultProps = {
  type: 'checkbox',

  // Events.
  handleChange: () => {}
}

// Export.
export default Checkbox
