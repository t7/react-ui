// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  formatInteger,
  formatPhoneUS
} from '@t7/utils'

// UI components.
import { Input } from '../'

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
  static convertToApiValue (value = '') {
    // Only numbers.
    let apiValue =
      formatInteger(value).slice(0, 10)

    // Valid length?
    if (apiValue.length < 10) {
      apiValue = ''
    }

    // Expose string.
    return apiValue
  }

  // Error message.
  static getErrorMessage (value = '') {
    // From UI to API format.
    const apiValue =
      that.convertToApiValue(value)

    // Set in conditional.
    let errorMessage = ''

    if (
      value.length >= 12 &&
      apiValue.length !== 10
    ) {
      errorMessage = 'Phone format is invalid'
    }

    // Expose string.
    return errorMessage
  }
}

// ============= //
// ============= //
// Define class. //
// ============= //
// ============= //

class InputPhoneUS extends React.Component {
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
      value,
      errorMessage: propsErrorMessage
    } = this.props

    // Error message.
    const errorMessage = (
      propsErrorMessage ||
      that.getErrorMessage(value)
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
      value,
      errorMessage: propsErrorMessage
    } = props

    // New error.
    const newErrorMessage =
      that.getErrorMessage(value)

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

    // Expose object
    return newState
  }

  // Change event.
  handleChange (e, value = '') {
    // Props.
    const {
      errorMessage: propsErrorMessage
    } = this.props

    // Convert to number.
    const apiValue =
      that.convertToApiValue(value)

    // Get error message.
    const errorMessage = (
      propsErrorMessage ||
      that.getErrorMessage(value)
    )

    // Update.
    this.setState({ errorMessage })

    // Callback.
    this.props.handleChange(e, value, apiValue)
  }

  // Render method.
  render () {
    // State.
    const { errorMessage } = this.state

    // Events.
    const { handleChange } = this

    // Expose UI.
    return (
      <Input
        {...this.props}
        errorMessage={errorMessage}
        mask={formatPhoneUS}
        maxlength='12'
        placeholder='000-000-0000'
        handleChange={handleChange}
      />
    )
  }
}

// Validation.
InputPhoneUS.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.string,

  // Events.
  handleChange: PropTypes.func
}

// Defaults.
InputPhoneUS.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default InputPhoneUS
