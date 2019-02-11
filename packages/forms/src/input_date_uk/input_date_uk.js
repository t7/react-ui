// Dependencies.
import React from 'react'

// UI components.
import { InputDate } from '../'

// Define class.
class InputDateUK extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <InputDate
        {...this.props}
        dateFormat='DD/MM/YYYY'
      />
    )
  }
}

// Export.
export default InputDateUK
