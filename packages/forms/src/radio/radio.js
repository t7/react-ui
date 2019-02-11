// Dependencies.
import React from 'react'

// UI components.
import { Checkbox } from '../'

// Define class.
class Radio extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <Checkbox
        {...this.props}
        type='radio'
      />
    )
  }
}

// Export.
export default Radio
