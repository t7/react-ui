// Dependencies.
import React from 'react'
import Render from '@t7/render'
import PropTypes from 'prop-types'

// Utility methods.
import { trim } from '@t7/utils'

// Define class.
class Label extends React.Component {
  // Render method.
  render () {
    // Props.
    const {
      classNameForAbbr,
      classNameForLabel,
      label,
      required,
      styleForAbbr,
      styleForLabel,
      id: htmlFor
    } = this.props

    // Props for label.
    const propsForLabel = {
      htmlFor,
      style: styleForLabel,

      // Build class name.
      className: trim(
        [
          't7-input__label',
          classNameForLabel
        ].join(' ')
      )
    }

    // Props for abbr.
    const propsForAbbr = {
      children: '*',
      title: 'Required',
      style: styleForAbbr,

      // Build class name.
      className: trim(
        [
          't7-input__label__abbr',
          classNameForAbbr
        ].join(' ')
      )
    }

    // Expose UI.
    return (
      <Render if={label}>

        <label {...propsForLabel}>

          {label}

          <Render if={required}>
            {' '}
            <abbr
              {...propsForAbbr}
            />
          </Render>

        </label>

        <br />

      </Render>
    )
  }
}

// Validation.
Label.propTypes = {
  classNameForAbbr: PropTypes.string,
  classNameForLabel: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  styleForAbbr: PropTypes.object,
  styleForLabel: PropTypes.object
}

// Export.
export default Label
