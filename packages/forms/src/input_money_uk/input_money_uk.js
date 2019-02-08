// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyUK
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyUK extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='UK'
        mask={formatMoneyUK}
      />
    )
  }
}

// Export.
export default InputMoneyUK
