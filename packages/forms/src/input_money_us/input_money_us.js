// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyUS
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyUS extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='US'
        mask={formatMoneyUS}
      />
    )
  }
}

// Export.
export default InputMoneyUS
