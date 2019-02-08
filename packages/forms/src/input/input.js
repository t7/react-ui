// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  regex,
  trim,
  unique
} from '@t7/utils'

// UI components.
import {
  ErrorMessage,
  Label
} from '../'

// Define class.
class Input extends React.Component {
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
      mask,
      id = unique(),
      value = ''
    } = this.props

    this.state = {
      id,
      oldValue: value,
      value: mask(String(value))
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const {
      mask,
      value
    } = props

    // State.
    const { oldValue } = state

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(value) &&
      value !== oldValue
    ) {
      newState = {
        oldValue: value,
        value: mask(String(value))
      }
    }

    // Expose object.
    return newState
  }

  // Apply mask.
  applyMask (e = {}, value = '') {
    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // To string.
    value = String(value)

    // Set in conditional.
    let oldCaret
    let oldSlice

    // Supports selection?
    if (typeof el.selectionStart === 'number') {
      /*
        Value: from start,
        to caret position.
      */
      oldCaret = el.selectionStart
      oldSlice = value.slice(0, oldCaret)
    }

    // Format.
    value = this.props.mask(value)

    // Wait for re-render.
    window.requestAnimationFrame(() => {
      // Supports selection?
      if (
        exists(oldCaret) &&
        el === document.activeElement &&
        typeof el.setSelectionRange === 'function'
      ) {
        /*
          Caret: Based on the diff
          between old/new values.
        */
        const newSlice = value.slice(0, oldCaret)

        // Match list.
        const rMatch = regex([
          ',',
          '.'
        ])

        // Ignore list.
        const rIgnore = regex([
          '/',
          '-'
        ])

        // Check for special characters.
        const newMatch = newSlice.match(rMatch) || []
        const oldMatch = oldSlice.match(rMatch) || []

        // Get diff.
        const diff = (
          newMatch.length ||
          oldMatch.length
            ? newMatch.length - oldMatch.length
            : newSlice.length - oldSlice.length
        )

        // New caret.
        const newCaret = oldCaret + diff

        // Move caret?
        if (!value.match(rIgnore)) {
          el.setSelectionRange(newCaret, newCaret)
        }
      }
    })

    // Expose string.
    return value
  }

  // Change event.
  handleChange (e = {}) {
    // Get element.
    const {
      type,
      currentTarget: el = {}
    } = e

    // Get value.
    let {
      value = ''
    } = el

    // Clean up.
    if (type === 'blur') {
      value = trim(value)
    }

    // Apply mask.
    value = this.applyMask(e, value)

    // Update state.
    this.setState({ value })

    // Callback.
    this.props.handleChange(e, value)
  }

  // Render method.
  render () {
    // State.
    const {
      id,
      value
    } = this.state

    // Props.
    const {
      autofocus,
      classNameForAbbr,
      classNameForError,
      classNameForInput,
      classNameForLabel,
      disabled,
      errorMessage,
      label,
      maxlength,
      name,
      placeholder,
      readonly,
      required,
      size,
      styleForAbbr,
      styleForError,
      styleForInput,
      styleForLabel,
      type,
      width
    } = this.props

    // Events.
    const { handleChange } = this

    // Build class name.
    let className = [
      't7-input',
      classNameForInput
    ]

    if (
      size > 0 ||
      width === 'auto'
    ) {
      className.push('t7-input--width-auto')
    }

    // Convert to string.
    className = trim(
      className.join(' ')
    )

    // Props for error.
    const propsForError = {
      classNameForError,
      errorMessage,
      styleForError
    }

    // Props for label.
    const propsForLabel = {
      classNameForAbbr,
      classNameForLabel,
      id,
      label,
      required,
      styleForAbbr,
      styleForLabel
    }

    // Props for input.
    const propsForInput = {
      className,
      disabled,
      id,
      name,
      placeholder,
      required,
      size,
      type,
      value,
      autoFocus: autofocus,
      maxLength: maxlength,
      onBlur: handleChange,
      onChange: handleChange,
      readOnly: readonly,
      style: styleForInput
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...propsForLabel}
        />

        <input
          {...propsForInput}
        />

        <ErrorMessage
          {...propsForError}
        />

      </React.Fragment>
    )
  }
}

// Validation.
Input.propTypes = {
  autofocus: PropTypes.bool,
  classNameForAbbr: PropTypes.string,
  classNameForError: PropTypes.string,
  classNameForInput: PropTypes.string,
  classNameForLabel: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  styleForAbbr: PropTypes.object,
  styleForError: PropTypes.object,
  styleForInput: PropTypes.object,
  styleForLabel: PropTypes.object,
  type: PropTypes.string,
  width: PropTypes.string,

  maxlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func,

  // Mask value.
  mask: PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  type: 'text',

  // Events.
  handleChange: () => {},

  // Mask value.
  mask: (value) => {
    return value
  }
}

// Export.
export default Input
