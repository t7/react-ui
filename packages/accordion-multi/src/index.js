// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// UI components.
import Accordion, { AccordionPanel } from '@t7/accordion'
import '@t7/accordion/dist/index.css'

// Define class.
class AccordionMulti extends React.Component {
  // Render method.
  render () {
    return (
      <Accordion {...this.props} multi />
    )
  }
}

// Validation.
AccordionMulti.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  selected: PropTypes.object
}

// Defaults.
AccordionMulti.defaultProps = {
  children: null
}

// Export.
export default AccordionMulti
export { AccordionPanel }
