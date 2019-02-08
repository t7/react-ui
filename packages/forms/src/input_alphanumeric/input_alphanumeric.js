// Dependencies.
import React from 'react'

// Utility methods.
import {
  formatAlphanumeric
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Define class.
class InputAlphanumeric extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <Input
        {...this.props}
        mask={formatAlphanumeric}
      />
    )
  }
}

// Export.
export default InputAlphanumeric
