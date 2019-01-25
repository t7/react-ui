import React from 'react'
import PropTypes from 'prop-types'
import { cloneDeep, isEqual } from 'lodash'

// Utility methods.import fake from '../../fake'
import {
  bind,
  unique
} from '@t7/utils'

import styles from './index.css'

// UI Components.
import AccordionHeader from './template_header'
import AccordionPanel from './template_panel'

// Define class.
class Accordion extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      id: this.props.id || unique(),
      selected: this.props.selected
    }
  }

  // Override state, if need be.
  componentWillReceiveProps (nextProps) {
    const newSelected = nextProps.selected
    const oldSelected = this.props.selected
    const isValid = !isEqual(newSelected, oldSelected)

    if (isValid) {
      this.setState({
        selected: newSelected
      })
    }
  }

  // Click handler.
  handleClick (e, index, label) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const multi = this.props.multi

    let selected = cloneDeep(this.state.selected)
    const isSelected = selected[index]

    // If `multi` isn't supported,
    // then we reset state object.
    if (!multi) {
      selected = {}
    }

    // Set current selection.
    selected[index] = !isSelected

    this.setState({
      selected: selected
    })

    // Parent component's click handler.
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index, label, selected)
  }

  // Render method.
  render () {
    // Unique ID, for tab group.
    const id = this.state.id

    // Get selected state.
    const selected = this.state.selected

    // Get the children.
    const children = this.props.children

    // Multi-select?
    const multi = this.props.multi

    // Events.
    const handleClick = this.handleClick

    // Populated in `map`.
    const output = []

    // Build the output.
    children.map((panel, i) => {
      // For accessibility.
      const idPanel = 'accordion_panel_' + i + '_' + id
      const idHeader = 'accordion_header_' + i + '_' + id

      // Active state.
      const isActive = selected[i]

      // Panel label & content.
      const label = panel.props.label
      let content = panel.props.children

      if (typeof content === 'string') {
        content = (
          <p>
            {content}
          </p>
        )
      }

      // Add the `<dt>`.
      output.push(
        <AccordionHeader
          ariaControls={idPanel}
          ariaExpanded={isActive}
          ariaSelected={isActive}
          className={styles.header}
          id={idHeader}
          index={i}
          key={idHeader}
          label={label}

          handleClick={handleClick}
        />
      )

      // Add the `<dd>`.
      output.push(
        <dd
          aria-hidden={!isActive}
          aria-labelledby={idHeader}
          className={styles.panel}
          id={idPanel}
          key={idPanel}
          role='tabpanel'
        >
          {content}
        </dd>
      )
    })

    // Expose the UI.
    return (
      <dl
        className={styles.accordion}
        id={id}
        role='tablist'
        aria-multiselectable={multi}
      >
        {output}
      </dl>
    )
  }
}

// Validation.
Accordion.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  multi: PropTypes.bool,
  selected: PropTypes.object,

  // Events.
  handleClick: PropTypes.func
}

// Defaults.
Accordion.defaultProps = {
  children: null,
  multi: false,
  selected: {}
}

// Export.
export default Accordion
export { AccordionHeader, AccordionPanel }
