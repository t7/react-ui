// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import { trim } from '@t7/utils'

// UI components.
import { Input } from '../'

// Describe `<Component/>` name.
describe('Input', () => {
  // Reset.
  beforeEach(() => {
    Object.defineProperty(document, 'activeElement', {
      writable: true,
      value: null
    })

    Object.defineProperty(window, 'requestAnimationFrame', {
      writable: true,
      value: (f) => {
        f()
      }
    })
  })

  // Dummy class name.
  const className = 'CLASS_NAME'

  // Dummy style.
  const style = {
    fontWeight: 'bold'
  }

  // Dummy props.
  const props = {
    classNameForAbbr: className,
    classNameForError: className,
    classNameForInput: className,
    classNameForLabel: className,
    disabled: true,
    errorMessage: 'example_error',
    id: 'example_id',
    label: 'example_label',
    name: 'example_name',
    placeholder: 'example_placeholder',
    required: true,
    size: 10,
    type: 'search',
    value: '$500.00',
    width: 'auto',
    styleForAbbr: style,
    styleForError: style,
    styleForInput: style,
    styleForLabel: style,

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Input
      {...props}
    />
  )

  // Get content.
  const abbr =
    T.findRenderedDOMComponentWithTag(el, 'abbr')

  const errorMessage =
    T.findRenderedDOMComponentWithTag(el, 'span')

  const input =
    T.findRenderedDOMComponentWithTag(el, 'input')

  const label =
    T.findRenderedDOMComponentWithTag(el, 'label')

  // ====================
  // Test for class name.
  // ====================

  it('has correct class name', () => {
    expect(abbr.className)
      .toContain(className)

    expect(errorMessage.className)
      .toContain(className)

    expect(input.className)
      .toContain(className)

    expect(label.className)
      .toContain(className)
  })

  // ======================
  // Test for inline style.
  // ======================

  it('has correct class names', () => {
    expect(abbr.style.fontWeight)
      .toBe(style.fontWeight)

    expect(errorMessage.style.fontWeight)
      .toBe(style.fontWeight)

    expect(input.style.fontWeight)
      .toBe(style.fontWeight)

    expect(label.style.fontWeight)
      .toBe(style.fontWeight)
  })

  // ===============
  // Test for label.
  // ===============

  it('is has correct label', () => {
    expect(label.textContent)
      .toBe(props.label + ' *')
  })

  // ==================
  // Test for disabled.
  // ==================

  it('is disabled', () => {
    expect(input.disabled)
      .toBe(true)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(input.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(input.name)
      .toBe(props.name)
  })

  // ====================
  // Test for placeholer.
  // ====================

  it('has placeholer', () => {
    expect(input.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(input.hasAttribute('required'))
      .toBe(true)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(input.value)
      .toBe(props.value)
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    expect(input.type)
      .toBe(props.type)
  })

  // ==============
  // Test for size.
  // ==============

  it('has correct size', () => {
    expect(input.size)
      .toBe(props.size)
  })

  // ====================
  // Test for auto width.
  // ====================

  it('has auto width', () => {
    expect(input.className)
      .toContain('t7-input--width-auto')
  })

  // ============================
  // Test for "apply mask" event.
  // ============================

  it('handles "apply mask" event', () => {
    // Dummy value.
    const value = '$1,000.00'

    // Dummy event.
    const e = {
      currentTarget: {
        selectionStart: 99,
        setSelectionRange: jest.fn()
      }
    }

    // Simulate "active" state.
    document.activeElement = e.currentTarget

    // Fire event.
    const newValue = el.applyMask(e, value)

    const n = expect.any(Number)

    expect(e.currentTarget.setSelectionRange)
      .toBeCalledWith(n, n)

    expect(newValue)
      .toBe(value)
  })

  // ======================
  // Test for "blur" event.
  // ======================

  it('handles "change" event', () => {
    // Dummy value.
    const value = ' FOO  BAR '

    // Dummy event.
    const e = {
      currentTarget: {
        value,
        selectionStart: 99,
        setSelectionRange: jest.fn()
      },
      type: 'blur'
    }

    // Simulate "active" state.
    document.activeElement = e.currentTarget

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, trim(value))
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const value = ' FOO  BAR '

    // Dummy event.
    const e = {
      currentTarget: {
        value,
        selectionStart: 99,
        setSelectionRange: jest.fn()
      },
      type: 'Not "blur" event'
    }

    // Simulate "active" state.
    document.activeElement = e.currentTarget

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, value)
  })

  // =====================
  // Test for props/state.
  // =====================

  it('handles props/state change', () => {
    // Dummy props.
    const newProps = {
      value: 'new_value',

      // Mask value.
      mask: (value = '') => {
        return value + '.'
      }
    }

    // Dummy state.
    const oldState = {
      value: 'old_value'
    }

    // Fire event.
    const newState =
      Input.getDerivedStateFromProps(newProps, oldState)

    expect(newState.value)
      .toBe(newProps.mask(newProps.value))
  })
})
