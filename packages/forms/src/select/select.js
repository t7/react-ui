// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  unique
} from '@t7/utils'

// UI components.
import {
  ErrorMessage,
  Label
} from '../'

// Define class.
class Select extends React.Component {
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

  // Change event.
  handleChange (e = {}) {
    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // Get value.
    const {
      value = ''
    } = el

    // Update state.
    this.setState({ value })

    // Callback.
    this.props.handleChange(e, value)
  }

  // Build list.
  buildList () {
    // Props.
    const { options } = this.props

    // Build list.
    const list = options.map((o = {}, i) => {
      // Peel apart.
      const {
        name,
        value
      } = o

      // Expose UI.
      return (
        <option
          key={i}
          value={value}
        >
          {name}
        </option>
      )
    })

    // Expose array.
    return list
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
      name,
      readonly,
      required,
      styleForAbbr,
      styleForError,
      styleForInput,
      styleForLabel,
      width
    } = this.props

    // Events.
    const { handleChange } = this

    // Build class name.
    let className = [
      't7-select',
      classNameForInput
    ]

    if (width === 'auto') {
      className.push('t7-select--width-auto')
    }

    // Convert to string.
    className = className.join(' ')

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
      required,
      value,
      autoFocus: autofocus,
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

        <select {...propsForInput}>
          {this.buildList()}
        </select>

        <ErrorMessage
          {...propsForError}
        />

      </React.Fragment>
    )
  }
}

// Validation.
Select.propTypes = {
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
  options: PropTypes.array,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  styleForAbbr: PropTypes.object,
  styleForError: PropTypes.object,
  styleForInput: PropTypes.object,
  styleForLabel: PropTypes.object,
  width: PropTypes.string,

  // Forced value.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Select.defaultProps = {
  options: [],

  // Events.
  handleChange: () => {}
}

// Export.
export default Select
