// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  formatNumber
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Define class.
class InputMoney extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Get API value.
  getApiValue (x = '') {
    // Props.
    const { countryCode } = this.props

    // Germany?
    if (countryCode === 'DE') {
      x = String(x).replace(/[^0-9,]/g, '')
      x = x.replace(/,([^,]*)$/, '.' + '$1')
    }

    // To number.
    x = formatNumber(x)
    x = parseFloat(x) || 0

    // Expose number.
    return x
  }

  // Change event.
  handleChange (e, value = '') {
    // Convert to number.
    const apiValue = this.getApiValue(value)

    // Callback.
    this.props.handleChange(e, value, apiValue)
  }

  // Render method.
  render () {
    // Events.
    const { handleChange } = this

    // Expose UI.
    return (
      <Input
        {...this.props}
        maxlength='20'
        handleChange={handleChange}
      />
    )
  }
}

// Validation.
InputMoney.propTypes = {
  countryCode: PropTypes.string,

  // Events.
  handleChange: PropTypes.func
}

// Defaults.
InputMoney.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default InputMoney
