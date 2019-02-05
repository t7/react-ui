import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ArrowRightIcon from './icons/arrow_right'
import throttle from './utils/throttle'
import classNames from 'classnames'
import './index.css'
import PagerItem from './components/pager_item'

class Paging extends PureComponent {
  state = {
    calculatedMaxButtons: 0
  }

  handlePageItemClick = (index) => {
    const { pageIndex } = this.props

    if (pageIndex !== index) {
      this.dispatchPageChanged(index)
    }
  }

  dispatchPageChanged = (index) => {
    const { onPageChanged } = this.props

    if (typeof onPageChanged === 'function') {
      onPageChanged(index)
    }
  }

  componentDidMount () {
    const { autoLayout } = this.props

    if (autoLayout) {
      this.fitPagerButtonsToWidth()
      throttle('resize', 'optimizedResize')

      // Auto-fit when resized
      window.addEventListener('optimizedResize', this.fitPagerButtonsToWidth)
    }
  }

  componentWillUnmount () {
    const { autoLayout } = this.props

    if (autoLayout) {
      window.removeEventListener('optimizedResize', this.fitPagerButtonsToWidth)
    }
  }

  componentWillReceiveProps (newProps) {
    const { pageIndex } = this.props
    const { pageIndex: proposedPageIndex } = newProps

    if (pageIndex !== proposedPageIndex) {
      this.dispatchPageChanged(proposedPageIndex)
    }
  }

  fitPagerButtonsToWidth = () => {
    const pagerItems = this.container.getElementsByClassName(
      't7-react-paging__item'
    )

    if (pagerItems && pagerItems.length) {
      // Fit to width
      // Margin defaults to 10 which corresponds to the css class, as a backup
      let margin = 10

      try {
        if (window.getComputedStyle && pagerItems.length > 1) {
          const marginString = getComputedStyle(pagerItems[1]).marginLeft

          if (marginString) {
            margin = parseInt(marginString.split('px')[0], 10)
          }
        }
      } catch (error) {
        // Cannot get computed style, will use default
      }

      const pagerItemWidth = pagerItems[0].clientWidth + margin

      // Reset children and re-calculate
      this.setState({ calculatedMaxButtons: 0 })
      const { offsetWidth: containerWidth = 0 } = this.container

      // Wait for redraw
      requestAnimationFrame(() => {
        const calculatedMaxButtons =
          Math.floor(containerWidth / pagerItemWidth) - 2 // 2 is for prev/next buttons

        this.setState({ calculatedMaxButtons })
      })
    }
  }

  render = () => {
    const {
      pageIndex: currentPageIndex,
      pageSize,
      totalItems,
      maxButtons: propmaxButtons,
      className,
      autoLayout
    } = this.props

    const classes = classNames('t7-react-paging', className)

    const { calculatedMaxButtons } = this.state

    let maxPagerItems = 0

    // If calculated, use that value, else use manual value
    if (autoLayout) {
      // Ensure there are at least 3 items
      maxPagerItems = Math.max(calculatedMaxButtons, 3)
    } else {
      maxPagerItems = propmaxButtons
    }

    const maxPages = Math.max(Math.ceil(totalItems / pageSize), 1)

    // If there are more pages than the max pager items, use prev/next arrows
    const showArrows = maxPages > maxPagerItems

    // Always take the lowest amount of pager items necessary
    const count = Math.min(maxPages, maxPagerItems)

    // If the number of pager items is even or very low, set an offset for the middle number
    let centerAdjust = 0

    if (maxPagerItems % 2 === 0 || maxPagerItems < 6) {
      centerAdjust = 1
    }

    // Determine the first number of the pager
    const start = Math.min(
      Math.max(0, maxPages - maxPagerItems),
      Math.max(
        0,
        currentPageIndex - Math.floor(maxPagerItems / 2) + centerAdjust
      )
    )

    // Create an array of {count} length
    const pageData = Array(count)
      .fill()
      .map((item, index, array) => {
        const proposed = Math.min(start + index, maxPages)
        const { length } = array

        if (index < length - 2) {
          // At least 2 away from max
          return { pageIndex: proposed }
        } else if (index <= length - 2) {
          // 2nd to last shows ellipsis, unless we are in the last set
          if (maxPages - start === maxPagerItems || maxPages < maxPagerItems) {
            return { pageIndex: proposed }
          }
          // This is the 2nd to last item, show an ellipsis

          return { ellipsis: true }
        }

        // Always show the last page
        return { pageIndex: maxPages - 1 }
      })

    return (
      <div
        className={classes}
        data-test-id='pagination-control'
        ref={(element) => { (this.container = element) }}
      >
        {showArrows && (
          <PagerItem
            onClick={this.handlePageItemClick}
            disabled={currentPageIndex === 0}
            pageIndex={Math.max(currentPageIndex - 1, 0)}
            data-test-id='pager-button-previous'
          >
            <ArrowRightIcon name='arrowRight' width={5} height={9} className='t7-react-paging__arrow--previous' />
          </PagerItem>
        )}
        {count > 1
          ? pageData.map((item, index) => {
            const { ellipsis, pageIndex } = item

            return (
              <PagerItem
                key={index}
                selected={pageIndex === currentPageIndex}
                onClick={!ellipsis ? this.handlePageItemClick : null}
                pageIndex={pageIndex}
                ellipsis={ellipsis}
                data-test-id='pager-button'
              >
                {<span>{!ellipsis ? pageIndex + 1 : '...'}</span>}
              </PagerItem>
            )
          })
          : null}
        {showArrows && (
          <PagerItem
            onClick={this.handlePageItemClick}
            disabled={currentPageIndex === maxPages - 1}
            pageIndex={Math.min(currentPageIndex + 1, maxPages - 1)}
            data-test-id='pager-button-next'
          >
            <ArrowRightIcon name='arrowRight' width={5} height={9} className='t7-react-paging__arrow--next' />
          </PagerItem>
        )}
      </div>
    )
  }

  static propTypes = {
    /* eslint-disable-line */
    /** The 0-based index of the currently visible page */
    pageIndex: PropTypes.number,

    /** The number of items to render per page */
    pageSize: PropTypes.number,

    /** The total number of items */
    totalItems: PropTypes.number,

    /** When a page index changes, this is called, will fire a PageChangedEvent */
    onPageChanged: PropTypes.func,

    /** The maximum number of page buttons/controls to show, does not include next/previous buttons */
    maxButtons: PropTypes.number,

    /** If true, the number of pager buttons will fit the container width */
    autoLayout: PropTypes.bool,

    className: PropTypes.string
  }

  static defaultProps = {
    // By default, will calculate how many paging items to use
    autoLayout: true,
    pageSize: 5,
    maxButtons: 5,
    totalItems: 0,
    pageIndex: 0
  }
}

export default Paging
