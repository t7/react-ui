import React from 'react'
import PropTypes from 'prop-types'

// Define class.
class Render extends React.Component {
  // Render method.
  render () {
    // Fallback.
    let ui = null

    // Check boolean.
    if (this.props.if) {
      ui = this.props.children
    }

    // Expose UI.
    return (
      <React.Fragment>
        {ui}
      </React.Fragment>
    )
  }
}

// Validation.
Render.propTypes = {
  children: PropTypes.node,

  // Any "truthy" values.
  if: PropTypes.any
}

// Defaults.
Render.defaultProps = {
  children: null,
  if: false
}

// Export.
export default Render
