import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './index.module.scss'

const Container = ({ children, className }) => {
  return (
    <div
      children={children}
      className={classnames(styles.container, className)}
    />
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Container
