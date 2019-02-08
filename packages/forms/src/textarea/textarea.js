// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  trim,
  trimMultiLine,
  unique
} from '@t7/utils'

// UI components.
import {
  ErrorMessage,
  Label
} from '../'

// Define class.
class Textarea extends React.Component {
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
      id = unique(),
      value = ''
    } = this.props

    this.state = {
      id,
      value,
      oldValue: value
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const { value } = props

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
        value,
        oldValue: value
      }
    }

    // Expose object.
    return newState
  }

  // Called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
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
      value = trimMultiLine(value)
    }

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
      styleForAbbr,
      styleForError,
      styleForInput,
      styleForLabel
    } = this.props

    // Events.
    const { handleChange } = this

    // Build class name.
    const className = trim(
      [
        't7-textarea',
        classNameForInput
      ].join(' ')
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

        <textarea
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
Textarea.propTypes = {
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

  maxlength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func
}

// Defaults.
Textarea.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default Textarea
