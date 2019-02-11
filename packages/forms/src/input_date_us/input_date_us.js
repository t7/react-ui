// Dependencies.
import React from 'react'

// UI components.
import { InputDate } from '../'

// Define class.
class InputDateUS extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputDate
        {...this.props}
        dateFormat='MM/DD/YYYY'
      />
    )
  }
}

// Export.
export default InputDateUS
