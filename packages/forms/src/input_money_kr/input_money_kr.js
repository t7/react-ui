// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyKR
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyKR extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='KR'
        mask={formatMoneyKR}
      />
    )
  }
}

// Export.
export default InputMoneyKR
