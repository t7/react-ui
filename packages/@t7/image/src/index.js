// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import { bind } from '@t7/utils'

// Cached obervers.
const OBSERVERS = new WeakMap()
const REACT_MAP = new WeakMap()

/**
 * The `<Image>` component displays an
 * image when it is nearly/fully visible.
 *
 * @typedef {Object} Image
 */
class Image extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)

    /**
     * The primary image.
     *
     * @member {Image} image
    */
    this.image = React.createRef()

    /**
     * The preloader image.
     *
     * @member {Image} preloader.
    */
    this.preloader = new window.Image()

    /**
     * Styles temporarily overridden on the image.
     *
     * @member {Object} preservedStyle
    */
    this.preservedStyle = {}
  }

  /**
   * First mount.
   */
  componentDidMount () {
    // Map element to instance.
    REACT_MAP.set(this.image.current, this)

    // Get observer.
    const intersectionObserver =
      this.getIntersectionObserver({
        root: this.props.root,
        rootMargin: this.props.rootMargin,
        thresholds: this.props.thresholds
      })

    // Add observer.
    intersectionObserver.observe(this.image.current)

    // Add events.
    this.addEventListeners()
  }

  /**
   * Clean up.
   */
  componentWillUnmount () {
    // Get observer.
    const intersectionObserver =
      this.getIntersectionObserver({
        root: this.props.root,
        rootMargin: this.props.rootMargin,
        thresholds: this.props.thresholds
      })

    // Remove observer.
    intersectionObserver.unobserve(this.image.current)

    // Remove events.
    this.removeEventListeners()

    // Clean up.
    REACT_MAP.delete(this.image.current)
  }

  /**
   * Runs after render.
   */
  componentDidUpdate (prevProps = {}) {
    // New source?
    if (this.props.src !== prevProps.src) {
      // Remove events.
      this.removeEventListeners()

      // Set preloader source.
      this.preloader.src = this.props.src

      // Add events.
      this.addEventListeners()
    }

    // New intersection?
    if (
      this.props.rootMargin !== prevProps.rootMargin ||
      this.props.thresholds !== prevProps.thresholds
    ) {
      // Get observer.
      const prevIntersectionObserver =
        this.getIntersectionObserver({
          root: prevProps.root,
          rootMargin: prevProps.rootMargin,
          thresholds: prevProps.thresholds
        })

      // Get observer.
      const intersectionObserver =
        this.getIntersectionObserver({
          root: this.props.root,
          rootMargin: this.props.rootMargin,
          thresholds: this.props.thresholds
        })

      // Remove observer.
      prevIntersectionObserver.unobserve(this.image.current)

      // Add observer.
      intersectionObserver.observe(this.image.current)
    }
  }

  /**
   * Add events.
   */
  addEventListeners () {
    this.preloader.addEventListener('load', this.onPreloaderLoad)
    this.preloader.addEventListener('error', this.onPreloaderError)
  }

  /**
   * Remove events.
   */
  removeEventListeners () {
    this.image.current.removeEventListener('load', this.onImageLoad)
    this.preloader.removeEventListener('load', this.onPreloaderLoad)
    this.preloader.removeEventListener('error', this.onPreloaderError)
  }

  /**
   * Preloader load.
   */
  onPreloaderLoad () {
    // Add event.
    this.image.current.addEventListener('load', this.onImageLoad)

    // Update source.
    this.image.current.src = this.preloader.src
  }

  /**
   * Preloader fail.
   */
  onPreloaderError () {
    if (this.props.fallback) {
      // Add event.
      this.image.current.addEventListener('load', this.onImageLoad)

      // Update source.
      this.image.current.src = this.props.fallback
    }
  }

  /**
   * Image load.
   */
  onImageLoad (event) {
    // Remove placeholder styles.
    this.image.current.style.backgroundImage =
      this.preservedStyle.backgroundImage

    // Conditionally run load event.
    if (this.image.current.src === this.props.src) {
      this.props.onLoad(event)
    }

    // Conditionally run fallback event.
    if (this.image.current.src === this.props.fallback) {
      this.props.onFallback({
        type: 'fallback',
        target: this.image.current
      })
    }
  }

  /**
   * Image intersection.
   */
  onIntersection () {
    // Get background.
    this.preservedStyle.backgroundImage =
      this.image.current.style.backgroundImage

    // Backgrounds.
    const bg1 =
      `url(${this.props.placeholder})`

    const bg2 =
      `url(${this.preservedStyle.backgroundImage})`

    const both =
      [bg1, bg2].join(',')

    // Placeholder exists?
    if (this.props.placeholder) {
      // Set background.
      this.image.current.style.backgroundImage = (
        // Existing background?
        this.preservedStyle.backgroundImage
          ? both
          : bg1
      )
    }

    // Update source?
    if (this.props.src) {
      this.preloader.src = this.props.src
    }

    // Fire event.
    this.props.onIntersection({
      type: 'intersection',
      target: this.image.current
    })
  }

  /**
   * Inline SVG with width and height.
   *
   * The width of the image.
   * @param {Number|String} width
   *
   * The height of the image.
   * @param {Number|String} height
   *
   * The inline SVG as a data source.
   * @return {String}
   */
  getPreloaderSrc (width, height) {
    const w = Number(width) || 0
    const h = Number(height) || 0

    // Expose SVG.
    return (
      `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"%3E%3C/svg%3E`
    )
  }

  /**
  * Return a cached intersection observer.
  *
  * The rootMargin being used.
  * @param {Number|String} rootMargin
  *
  * The thresholds being used.
  * @param {Array|Number|String} thresholds
  *
  * The intersection observer.
  * @return {String}
  *
  * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API Intersection Observer API}
  */
  getIntersectionObserver ({ root, rootMargin, thresholds }) {
    // Ensure node.
    const base = (
      root instanceof window.Node
        ? root
        : window
    )

    // Does cache exist?
    if (!OBSERVERS.has(base)) {
      OBSERVERS.set(base, {})
    }

    // Get cache.
    const c = OBSERVERS.get(base)

    // To string.
    const strMargin = String(rootMargin)

    // Set in conditional.
    let list

    // Array?
    if (thresholds instanceof Array) {
      list = thresholds

      // Assume number/string.
    } else {
      list = (
        String(thresholds)
          .trim()
          .split(/\s+/)
      )
    }

    // Convert to numeric array.
    const normalizedThresholds =
      list.map((threshold) => {
        return Number(threshold) || 0
      })

    // Convert thresholds array into string.
    const strThresholds =
      normalizedThresholds.join(' ')

    // Add layer?
    if (!c[strMargin]) {
      c[strMargin] = {}
    }

    // Does observer exist?
    if (!c[strMargin][strThresholds]) {
      // Callback.
      const f = (entries = []) => {
        // Loop through entries.
        entries.forEach((entry = {}) => {
          // Past threshold?
          if (entry.intersectionRatio > 0) {
            // Remove observer.
            c[strMargin][strThresholds] &&
            c[strMargin][strThresholds].unobserve(entry.target)

            // Fire event.
            REACT_MAP.has(entry.target) &&
            REACT_MAP.get(entry.target).onIntersection()
          }
        })
      }

      // Options.
      const options = {
        root,
        rootMargin: strMargin,
        thresholds: normalizedThresholds
      }

      // Create observer.
      c[strMargin][strThresholds] =
        new window.IntersectionObserver(f, options)
    }

    // Expose observer.
    return c[strMargin][strThresholds]
  }

  /**
   * Renders image, placeholder, and fallback.
   *
   * @return {Image} - The image element.
   * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img Image}.
   */
  render () {
    // Get source.
    const src =
      this.getPreloaderSrc(
        this.props.width,
        this.props.height
      )

    // Props for image.
    const propsForImage = {
      src,
      alt: this.props.alt,
      height: this.props.height,
      style: this.props.style,
      width: this.props.width,

      // Assign ref.
      ref: this.image
    }

    // Expose UI.
    return (
      <img {...propsForImage} />
    )
  }
}

// Validation.
Image.propTypes = {
  /**
   * The image URL.
   */
  src: PropTypes.string,

  /**
   * The alternative text describing the image.
   */
  alt: PropTypes.string,

  /**
   * The placeholder image URL.
   */
  placeholder: PropTypes.string,

  /**
   * The fallback image URL.
   */
  fallback: PropTypes.string,

  /**
   * The intrinsic width of the image in pixels.
   */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * The intrinsic height of the image in pixels.
   */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * The root element to check intersection.
   *
   * For the window's viewport, this should
   * be left empty, and defaults to `null`.
   */
  root: PropTypes.object,

  /**
   * The amount to grow or shrink each side of
   * the document when computing intersections.
   */
  rootMargin: PropTypes.string,

  /**
   * Inline style object, to force initial
   * dimensions and proportions for image.
   */
  style: PropTypes.object,

  /**
   * A single number or array of numbers, indicating
   * at what percentage of an image's visibility its
   * observer's callback should be executed.
   */
  thresholds: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    ),
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * Function that runs when image
   * intersects with viewable area.
   */
  onIntersection: PropTypes.func,

  /**
   * Function that runs
   * when image is loaded.
   */
  onLoad: PropTypes.func,

  /**
   * Function that runs when
   * fallback image is loaded.
   */
  onFallback: PropTypes.func
}

// Defaults.
Image.defaultProps = {
  alt: '',
  width: 0,
  height: 0,
  root: null,
  rootMargin: '0px 0px 0px 0px',
  thresholds: 0.01,

  // Events.
  onFallback: () => {},
  onIntersection: () => {},
  onLoad: () => {}
}

// Export.
export default Image
