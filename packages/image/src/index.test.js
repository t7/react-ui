// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import Image from './'

// Helper.
const renderWithProps = (props = {}) => {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Image
      {...props}
    />
  )

  // Get content.
  const parent =
    T.findRenderedDOMComponentWithTag(el, 'img')

  // Expose object.
  return {
    el,
    parent
  }
}

// Describe `<Component/>` name.
describe('Image', () => {
  // ======
  // Setup.
  // ======

  // Reset.
  beforeEach(() => {
    jest.resetAllMocks()
  })

  // Observers.
  const observe = jest.fn()
  const unobserve = jest.fn()

  // Override `IntersectionObserver`.
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: (f, options) => {
      if (typeof f === 'function') {
        // Dummy entries.
        const entries = [
          {
            intersectionRatio: 1,
            target: {}
          }
        ]

        // Fire callback.
        f(entries)
      }

      // Expose object.
      return {
        observe,
        unobserve
      }
    }
  })

  // ========
  // Kickoff.
  // ========

  // Dummy props.
  const props = {
    alt: 'ALT TEXT',
    rootMargin: '0px',
    thresholds: 0.5,

    // Sources.
    fallback: 'http://localhost/fallback.jpg',
    placeholder: 'http://lodalhost/placeholder.jpg',
    src: 'http://localhost/example_1.jpg',

    // Style.
    style: {
      backgroundImage: 'http://localhost/background.jpg'
    },

    // Dimensions.
    width: 400,
    height: 400,

    // Events.
    onFallback: jest.fn(),
    onIntersection: jest.fn(),
    onLoad: jest.fn()
  }

  // Render.
  const {
    el,
    parent
  } = renderWithProps(props)

  // Spy.
  el.image.current.addEventListener = jest.fn()
  el.image.current.removeEventListener = jest.fn()
  el.preloader.addEventListener = jest.fn()
  el.preloader.removeEventListener = jest.fn()

  // ========================
  // Test for initial render.
  // ========================

  it('has correct initial render', () => {
    expect(parent.alt)
      .toBe(props.alt)

    expect(parent.height)
      .toBe(props.height)

    expect(parent.width)
      .toBe(props.width)

    expect(el.props.rootMargin)
      .toBe(props.rootMargin)

    expect(el.props.thresholds)
      .toBe(props.thresholds)

    expect(el.image.current)
      .toBe(parent)
  })

  // =====================
  // Test for mount event.
  // =====================

  it('handles mount event', () => {
    // Fire event.
    el.componentDidMount()

    expect(el.preloader.addEventListener)
      .toBeCalledWith('load', el.onPreloaderLoad)

    expect(el.preloader.addEventListener)
      .toBeCalledWith('error', el.onPreloaderError)
  })

  // =======================
  // Test for unmount event.
  // =======================

  it('handles unmount event', () => {
    // =======================
    // Methods NOT called yet.
    // =======================

    expect(unobserve)
      .not
      .toBeCalled()

    expect(el.preloader.removeEventListener)
      .not
      .toBeCalled()

    expect(el.preloader.removeEventListener)
      .not
      .toBeCalled()

    // ===========
    // Fire event.
    // ===========

    el.componentWillUnmount()

    // =========================
    // Methods HAVE BEEN called.
    // =========================

    expect(unobserve)
      .toBeCalledWith(el.image.current)

    expect(el.image.current.removeEventListener)
      .toBeCalledWith('load', el.onImageLoad)

    expect(el.preloader.removeEventListener)
      .toBeCalledWith('load', el.onPreloaderLoad)

    expect(el.preloader.removeEventListener)
      .toBeCalledWith('error', el.onPreloaderError)
  })

  // ======================
  // Test for update event.
  // ======================

  it('handles update event', () => {
    // Dummy props.
    const prevProps = {
      rootMargin: '10px',
      src: 'http://localhost/example_2.jpg',
      thresholds: 0.1
    }

    // Fire event.
    el.componentDidUpdate(prevProps)

    expect(unobserve)
      .toBeCalledWith(el.image.current)

    expect(observe)
      .toBeCalledWith(el.image.current)
  })

  // ================================
  // Test for preloader "load" event.
  // ================================

  it('handles preloader "load" event', () => {
    expect(el.image.current.addEventListener)
      .not
      .toBeCalled()

    expect(el.image.current.src)
      .not
      .toBe(el.preloader.src)

    // Fire event.
    el.onPreloaderLoad()

    expect(el.image.current.addEventListener)
      .toBeCalledWith('load', el.onImageLoad)

    expect(el.image.current.src)
      .toBe(el.preloader.src)
  })

  // =================================
  // Test for preloader "error" event.
  // =================================

  it('handles preloader "error" event', () => {
    expect(el.image.current.src)
      .not
      .toBe(props.fallback)

    // Fire event.
    el.onPreloaderError()

    expect(el.image.current.src)
      .toBe(props.fallback)
  })

  // ============================
  // Test for image "load" event.
  // ============================

  it('handles image "load" event', () => {
    expect(props.onFallback)
      .not
      .toBeCalled()

    expect(props.onLoad)
      .not
      .toBeCalled()

    // Dummy event.
    const e = {
      foo: true
    }

    // Force change.
    el.image.current.src = props.src

    // Fire event.
    el.onImageLoad(e)

    expect(props.onLoad)
      .toBeCalledWith(e)

    // Force change.
    el.image.current.src = props.fallback

    // Fire event.
    el.onImageLoad(e)

    expect(props.onFallback)
      .toBeCalledWith({
        type: 'fallback',
        target: el.image.current
      })
  })

  // ==============================
  // Test for "intersection" event.
  // ==============================

  it('handles "intersection" event', () => {
    expect(props.onIntersection)
      .not
      .toBeCalled()

    // Fire event.
    el.onIntersection()

    expect(props.onIntersection)
      .toBeCalledWith({
        type: 'intersection',
        target: el.image.current
      })
  })

  // // ===============================
  // // Test for intersection observer.
  // // ===============================

  it('builds an intersection observer', () => {
    // Dummy values.
    const rootMargin = '15px 20px 5px 10px'

    const thresholds = [
      0.2,
      0.5,
      0.75,
      1
    ]

    // Fire event.
    const observer =
      el.getIntersectionObserver({
        rootMargin,
        thresholds
      })

    expect(observer)
      .toMatchObject({
        observe,
        unobserve
      })
  })
})
