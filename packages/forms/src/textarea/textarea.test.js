// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Textarea } from '../'

// Describe `<Component/>` name.
describe('Textarea', () => {
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
    value: 'example_value',
    styleForAbbr: style,
    styleForError: style,
    styleForInput: style,
    styleForLabel: style,

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Textarea
      {...props}
    />
  )

  // Get content.
  const abbr =
    T.findRenderedDOMComponentWithTag(el, 'abbr')

  const errorMessage =
    T.findRenderedDOMComponentWithTag(el, 'span')

  const label =
    T.findRenderedDOMComponentWithTag(el, 'label')

  const textarea =
    T.findRenderedDOMComponentWithTag(el, 'textarea')

  // ====================
  // Test for class name.
  // ====================

  it('has correct class name', () => {
    expect(abbr.className)
      .toContain(className)

    expect(errorMessage.className)
      .toContain(className)

    expect(textarea.className)
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

    expect(textarea.style.fontWeight)
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
    expect(textarea.disabled)
      .toBe(true)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(textarea.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(textarea.name)
      .toBe(props.name)
  })

  // =====================
  // Test for placeholder.
  // =====================

  it('has correct placeholder', () => {
    expect(textarea.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(textarea.hasAttribute('required'))
      .toBe(true)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(textarea.value)
      .toBe(props.value)
  })

  // ================
  // Test for change.
  // ================

  it('handles "change" event', () => {
    // Dummy value.
    const BEFORE = ' FOO \n \n BAR '
    const AFTER = 'FOO \n\n BAR'

    // Dummy event.
    const e = {
      currentTarget: {
        value: BEFORE
      },
      type: 'blur'
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // =====================
  // Test for props/state.
  // =====================

  it('handles props/state change', () => {
    // Dummy state.
    const state = {
      value: 'old_value'
    }

    // Fire event.
    const newState =
      Textarea.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)
  })
})
