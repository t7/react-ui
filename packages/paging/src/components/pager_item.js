import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class PagerItem extends PureComponent {
  handleClick = () => {
    const { onClick, pageIndex } = this.props
    if (typeof onClick === 'function') {
      onClick(pageIndex)
    }
  };

  render () {
    const { selected, disabled, children, ellipsis } = this.props
    const classes = classNames({
      't7-react-paging__item': true,
      't7-react-paging__item-selected': selected,
      't7-react-paging__item-ellipsis': ellipsis,
      't7-react-paging__item-disabled': disabled
    })

    return (<Fragment>
      <button disabled={disabled} className={classes} onClick={this.handleClick}>
        {children}
      </button>
    </Fragment>)
  }

  static propTypes = {
    pageIndex: PropTypes.number,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
  }

  static defaultProps = {
    disabled: false,
    ellipsis: false,
    selected: false
  }
}
