// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatInteger
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Define class.
class InputInteger extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <Input
        {...this.props}
        mask={formatInteger}
      />
    )
  }
}

// Export.
export default InputInteger
