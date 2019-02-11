// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  formatDate,
  trim
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Date formats.
const DD_MM_YYYY = 'DD/MM/YYYY'
const MM_DD_YYYY = 'MM/DD/YYYY'

const MM_DD_YYYY_TO_API = '$3-$1-$2'
const MM_DD_YYYY_TO_UI = '$2/$3/$1'

const DD_MM_YYYY_TO_API = '$3-$2-$1'
const DD_MM_YYYY_TO_UI = '$3/$2/$1'

const FORMAT_FROM_API = /^(\d{4})-(\d{2})-(\d{2})/
const FORMAT_FROM_UI = /^(\d{2})\/(\d{2})\/(\d{4})/

const CONVERT_TO_API = {
  [DD_MM_YYYY]: DD_MM_YYYY_TO_API,
  [MM_DD_YYYY]: MM_DD_YYYY_TO_API
}

const CONVERT_TO_UI = {
  [DD_MM_YYYY]: DD_MM_YYYY_TO_UI,
  [MM_DD_YYYY]: MM_DD_YYYY_TO_UI
}

const PLACEHOLDER_FORMAT = {
  [DD_MM_YYYY]: DD_MM_YYYY,
  [MM_DD_YYYY]: MM_DD_YYYY
}

// =============== //
// =============== //
// Helper methods. //
// =============== //
// =============== //

/*
  NOTE: We're using a helper class here,
  because we cannot call `this.*` from
  within `getDerivedStateFromProps`.
*/

class that {
  // Convert to API.
  static convertToApiValue (value = '', dateFormat) {
    // Regex.
    const BEFORE = FORMAT_FROM_UI
    const AFTER = CONVERT_TO_API[dateFormat]

    // Format?
    let apiValue = (
      BEFORE.test(value)
        ? value.replace(BEFORE, AFTER)
        : ''
    )

    // Invalid?
    if (!that.isValidDate(apiValue)) {
      apiValue = ''
    }

    // Expose string.
    return apiValue
  }

  // Convert to UI.
  static convertToUiValue (value = '', dateFormat) {
    // Trim to 10 characters.
    value = trim(value).slice(0, 10)

    // Regex.
    const BEFORE = FORMAT_FROM_API
    const AFTER = CONVERT_TO_UI[dateFormat]

    // Format to "MM/DD/YYYY".
    value = value.replace(BEFORE, AFTER)

    // Expose string.
    return value
  }

  // Error message.
  static getErrorMessage (value = '', dateFormat) {
    // From API to UI format.
    value =
      that.convertToUiValue(value, dateFormat)

    // Clean up.
    value =
      formatDate(value)

    // From UI to API format.
    const apiValue =
      that.convertToApiValue(value, dateFormat)

    // Valid date?
    const isValidDate =
      that.isValidDate(apiValue)

    // Set in conditional.
    let errorMessage = ''

    if (
      !isValidDate &&
      value.length === 10
    ) {
      errorMessage = 'Date is invalid'
    }

    // Expose string.
    return errorMessage
  }

  // Valid date?
  static isValidDate (x = '') {
    // Get date.
    const date = new Date(x)
    const bool = !isNaN(date.getTime())

    // Expose boolean
    return bool
  }
}

// ============= //
// ============= //
// Define class. //
// ============= //
// ============= //

class InputDate extends React.Component {
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
      dateFormat,
      value,
      errorMessage: propsErrorMessage
    } = this.props

    // Error message.
    const errorMessage = (
      propsErrorMessage ||
      that.getErrorMessage(value, dateFormat)
    )

    // Update.
    this.state = {
      errorMessage,
      oldValue: value
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // State.
    const {
      oldValue,
      errorMessage: oldErrorMessage
    } = state

    // Props.
    const {
      dateFormat,
      value,
      errorMessage: propsErrorMessage
    } = props

    // New error.
    const newErrorMessage =
      that.getErrorMessage(value, dateFormat)

    // Set in conditional.
    let newState = null

    // Update?
    if (propsErrorMessage) {
      newState = {
        errorMessage: propsErrorMessage
      }
    } else if (
      value !== oldValue &&
      exists(newErrorMessage) &&
      newErrorMessage !== oldErrorMessage
    ) {
      newState = {
        errorMessage: newErrorMessage
      }
    }

    // Expose object.
    return newState
  }

  // Change event.
  handleChange (e, value = '') {
    // Props.
    const {
      dateFormat,
      errorMessage: propsErrorMessage
    } = this.props

    // Get API value.
    const apiValue =
      that.convertToApiValue(value, dateFormat)

    // Get error message.
    const errorMessage = (
      propsErrorMessage ||
      that.getErrorMessage(value, dateFormat)
    )

    // Update.
    this.setState({ errorMessage })

    // Callback.
    this.props.handleChange(e, value, apiValue)
  }

  // Placeholder.
  getPlaceholder () {
    const { dateFormat } = this.props

    // Expose string.
    return PLACEHOLDER_FORMAT[dateFormat]
  }

  // Render method.
  render () {
    // State.
    const { errorMessage } = this.state

    // Props.
    const { dateFormat } = this.props

    let { value } = this.props
    value = that.convertToUiValue(value, dateFormat)

    // Placeholder.
    const placeholder = this.getPlaceholder()

    // Events.
    const { handleChange } = this

    // Expose UI.
    return (
      <Input
        {...this.props}
        errorMessage={errorMessage}
        placeholder={placeholder}
        value={value}

        // Events.
        handleChange={handleChange}
        mask={formatDate}
      />
    )
  }
}

// Validation.
InputDate.propTypes = {
  dateFormat: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,

  // Events.
  handleChange: PropTypes.func
}

// Defaults.
InputDate.defaultProps = {
  dateFormat: DD_MM_YYYY,

  // Events.
  handleChange: () => {}
}

// Export.
export default InputDate
