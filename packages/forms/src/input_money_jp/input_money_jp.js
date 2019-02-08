// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatMoneyJP
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Define class.
class InputMoneyJP extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputMoney
        {...this.props}
        countryCode='JP'
        mask={formatMoneyJP}
      />
    )
  }
}

// Export.
export default InputMoneyJP
