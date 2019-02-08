// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  trim
} from '@t7/utils'

// Define class.
class Button extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Button click.
  handleClick (e = {}) {
    // Props
    const { buttonData } = this.props

    // Callback.
    this.props.handleClick(e, buttonData)
  }

  // Render method.
  render () {
    // Props.
    const {
      ariaControls,
      disabled,
      children,
      className,
      href,
      mode,
      size,
      style,
      target,
      title,
      type
    } = this.props

    // Events.
    const { handleClick } = this

    // Set in conditional.
    let rel
    let tabIndex

    // Not disabled?
    if (!disabled) {
      tabIndex = 0

      // External link?
      if (href && target) {
        rel = 'noopener noreferrer'
      }
    }

    // Props for both.
    const propsForBoth = {
      children,
      disabled,
      tabIndex,
      title,

      // Class name.
      className: (
        trim(
          [
            't7-button',
            className
          ].join(' ')
        )
      ),

      // Mode.
      'data-mode': mode,

      // Size.
      'data-size': size,

      // Events.
      onClick: (
        disabled
          ? null
          : handleClick
      ),

      // Style.
      style: style
    }

    // Props for link.
    const propsForLink = {
      ...propsForBoth,
      rel,
      href: (
        disabled
          ? null
          : href
      ),
      target: (
        disabled
          ? null
          : target
      )
    }

    // Props for button.
    const propsForButton = {
      ...propsForBoth,
      type,
      'aria-controls': ariaControls
    }

    // Presuppose `<button>`.
    let button = (
      <button
        {...propsForButton}
      />
    )

    // Is it a link?
    if (href) {
      // Build link.
      button = (
        <a
          {...propsForLink}
        />
      )
    }

    // Expose the UI.
    return button
  }
}

// Validation.
Button.propTypes = {
  ariaControls: PropTypes.string,
  buttonData: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  mode: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  target: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,

  // Events.
  handleClick: PropTypes.func
}

// Prop defaults.
Button.defaultProps = {
  disabled: false,
  mode: 'default',
  size: 'default',
  type: 'button',

  // Events.
  handleClick: () => {}
}

// Export.
export default Button
