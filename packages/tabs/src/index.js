/*
  //=========================================
  // This approach lets you to treat each tab
  // and its content as one logical grouping.
  //=========================================
  //==============
  // React code...
  //==============
  <Tabs selected={0}>
    <TabPanel label='Foo'>
      <p>
        Tab content for "Foo"
      </p>
    </TabPanel>
    <TabPanel label='Bar'>
      <p>
        Tab content for "Bar"
      </p>
    </TabPanel>
    <TabPanel label='Baz'>
      <p>
        Tab content for "Baz"
      </p>
    </TabPanel>
  </Tabs>
*/

// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
// import fake from '../../fake'
import {
  bind,
  unique
} from '@t7/utils'

// UI components.
import Tab from './template_tab'
import TabPanel from './template_panel'
import './index.css'

// Define class.
class Tabs extends React.Component {
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

  // Click handler.
  handleClick (e, index, label) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    this.setState({
      selected: index
    })

    // Parent component's click handler.
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index, label)
  }

  // Render method.
  render () {
    // Unique ID, for tab group.
    const id = this.state.id

    // Get the children.
    const children = this.props.children

    // Get selected state.
    const selected = this.state.selected

    // Click event.
    const handleClick = this.handleClick

    return (
      <div className='t7-tabs' id={id}>
        <ul role='tablist' className='t7-tabs__list'>
          {
            children.map((panel, i) => {
              // Tab label.
              const label = panel.props.label

              // For accessibility.
              const idPanel = 'tabpanel_' + i + '_' + id
              const idTab = 'tab_' + i + '_' + id

              // Active state.
              const isActive = selected === i

              return (
                <Tab
                  ariaControls={idPanel}
                  ariaExpanded={isActive}
                  ariaSelected={isActive}
                  className='t7-tabs__item'
                  id={idTab}
                  index={i}
                  key={idTab}
                  label={label}

                  handleClick={handleClick}
                />
              )
            })
          }
        </ul>
        {
          children.map((panel, i) => {
            // For accessibility.
            const idPanel = 'tab_panel_' + i + '_' + id
            const idTab = 'tab_' + i + '_' + id
            const isActive = selected === i

            // Panel content.
            let content = panel.props.children

            if (typeof content === 'string') {
              content = (
                <p>
                  {content}
                </p>
              )
            }

            return (
              <div
                aria-hidden={!isActive}
                aria-labelledby={idTab}
                className='t7-tabs__panel'
                id={idPanel}
                key={idPanel}
                role='tabpanel'
              >
                {content}
              </div>
            )
          })
        }
      </div>
    )
  }
}

// Validation.
Tabs.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  selected: PropTypes.number,

  // Events.
  handleClick: PropTypes.func
}

// Defaults.
Tabs.defaultProps = {
  children: null,
  selected: 0
}

// Export.
export default Tabs
export { TabPanel }
