// Dependencies.
import React from 'react'
import Render from '@t7/render'
import PropTypes from 'prop-types'

// Utility methods.
import { trim } from '@t7/utils'

// Define class.
class ErrorMessage extends React.Component {
  // Render method.
  render () {
    // Props.
    const {
      classNameForError,
      styleForError
    } = this.props

    let { errorMessage } = this.props
    errorMessage = trim(errorMessage)

    // Props for error.
    const propsForError = {
      children: errorMessage,
      style: styleForError,
      title: errorMessage,

      // Build class name.
      className: trim(
        [
          classNameForError,
          't7-input__error'
        ].join(' ')
      )
    }

    // Expose UI
    return (
      <Render if={errorMessage}>
        <span
          {...propsForError}
        />
      </Render>
    )
  }
}

// Validation.
ErrorMessage.propTypes = {
  classNameForError: PropTypes.string,
  errorMessage: PropTypes.string,
  styleForError: PropTypes.object
}

// Export.
export default ErrorMessage
