// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyIN
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyIN extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='IN'
        mask={formatMoneyIN}
      />
    )
  }
}

// Export.
export default InputMoneyIN
