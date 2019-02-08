// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  contentOnChange,
  contentOnFocus,
  contentOnPaste,
  contentToMarkup,
  contentToText,
  exists,
  trim,
  unique
} from '@t7/utils'

// UI components.
import {
  ErrorMessage,
  Label
} from '../'

// Define class.
class Textdiv extends React.Component {
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

  // Focus event.
  handleFocus (e) {
    contentOnFocus(e)
  }

  // When user types.
  handleKeyUp (e) {
    contentOnChange(e)
    this.handleChange(e)
  }

  // When user pastes text.
  handlePaste (e) {
    contentOnPaste(e)
    this.handleChange(e)
  }

  // When value changes.
  handleChange (e = {}) {
    // Props.
    const { placeholder } = this.props

    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // Get value.
    let {
      innerHTML: value
    } = el

    // Format.
    value = contentToText(value)

    // Clear value?
    if (value === placeholder) {
      value = ''
    }

    // Set attribute.
    if (typeof el.setAttribute === 'function') {
      el.setAttribute('data-has-placeholder', !value)
    }

    // Callback.
    this.props.handleChange(e, value)
  }

  // Render method.
  render () {
    // State.
    const { id } = this.state

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
      name,
      placeholder,
      readonly,
      required,
      styleForAbbr,
      styleForError,
      styleForInput,
      styleForLabel
    } = this.props

    // Get value.
    let { value } = this.state

    // Use fallback?
    value = (
      value ||
      placeholder
    )

    // Format.
    const dangerouslySetInnerHTML = {
      __html: contentToMarkup(value)
    }

    // Events.
    const {
      handleChange,
      handleFocus,
      handleKeyUp,
      handlePaste
    } = this

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
      dangerouslySetInnerHTML,
      disabled,
      id,
      name,
      placeholder,
      required,
      value,
      autoFocus: autofocus,
      onBlur: handleKeyUp,
      onFocus: handleFocus,
      onInput: handleChange,
      onKeyUp: handleKeyUp,
      onPaste: handlePaste,
      readOnly: readonly,
      style: styleForInput,

      contentEditable: (
        !disabled &&
        !readonly
      ),

      tabIndex: (
        disabled
          ? null
          : 0
      ),

      'data-has-placeholder': (
        !value ||
        trim(value) === trim(placeholder)
      )
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...propsForLabel}
        />

        <div
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
Textdiv.propTypes = {
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

  // Forced value.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default Textdiv
