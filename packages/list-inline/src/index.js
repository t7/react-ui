// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

// Define class.
class ListInline extends React.Component {
  // Render method.
  render () {
    return (
      <ul className={styles['list-inline']}>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ListInline.propTypes = {
  children: PropTypes.node
}

// Defaults.
ListInline.defaultProps = {
  children: null
}

// Export.
export default ListInline
