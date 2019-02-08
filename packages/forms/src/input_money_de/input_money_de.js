// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyDE
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyDE extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='DE'
        mask={formatMoneyDE}
      />
    )
  }
}

// Export.
export default InputMoneyDE
