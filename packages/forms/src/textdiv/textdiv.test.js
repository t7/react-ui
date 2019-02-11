// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Textdiv } from '../'

// Describe `<Component/>` name.
describe('Textdiv', () => {
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
    readonly: true,
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
    <Textdiv
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

  const textdiv =
    T.findRenderedDOMComponentWithTag(el, 'div')

  // ======
  // Reset.
  // ======

  beforeEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
    el.defaultState()
  })

  // ====================
  // Test for class name.
  // ====================

  it('has correct class name', () => {
    expect(abbr.className)
      .toContain(className)

    expect(errorMessage.className)
      .toContain(className)

    expect(textdiv.className)
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

    expect(textdiv.style.fontWeight)
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
    expect(textdiv.hasAttribute('disabled'))
      .toBe(props.disabled)
  })

  // ==================
  // Test for disabled.
  // ==================

  it('is disabled', () => {
    expect(textdiv.hasAttribute('readonly'))
      .toBe(props.readonly)
  })

  // ===================
  // Test for edit mode.
  // ===================

  it('edit mode is off', () => {
    expect(textdiv.getAttribute('contenteditable'))
      .toBe(String(!props.disabled && !props.readonly))
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(textdiv.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(textdiv.getAttribute('name'))
      .toBe(props.name)
  })

  // =====================
  // Test for placeholder.
  // =====================

  it('has correct placeholder', () => {
    expect(textdiv.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(textdiv.hasAttribute('required'))
      .toBe(props.required)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(textdiv.innerHTML)
      .toBe(props.value)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const BEFORE = ' <br>FOO<br><br><br>BAR<br> '
    const AFTER = 'FOO\n\nBAR'

    // Dummy event.
    const e = {
      currentTarget: {
        innerHTML: BEFORE
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event -- early exit', () => {
    // Dummy value.
    const BEFORE = props.placeholder
    const AFTER = ''

    // Dummy event.
    const e = {
      currentTarget: {
        innerHTML: BEFORE,
        setAttribute: jest.fn()
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)

    expect(e.currentTarget.setAttribute)
      .toBeCalledWith('data-has-placeholder', !AFTER)
  })

  // =======================
  // Test for "focus" event.
  // =======================

  it('handles "focus" event', () => {
    // Spy.
    const handleChange =
      jest.spyOn(el, 'handleChange')

    // Fire event.
    el.handleFocus()

    expect(handleChange)
      .not
      .toBeCalled()
  })

  // ========================
  // Test for "key up" event.
  // ========================

  it('handles "key up" event', () => {
    // Dummy value.
    const BEFORE = ' <br>FOO<br><br><br>BAR<br> '
    const AFTER = 'FOO\n\nBAR'

    // Dummy event.
    const e = {
      currentTarget: {
        innerHTML: BEFORE
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleKeyUp(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // =======================
  // Test for "paste" event.
  // =======================

  it('handles "paste" event', () => {
    // Spy.
    const handleChange =
      jest.spyOn(el, 'handleChange')

    // Dummy event.
    const e = {
      foo: true
    }

    // Fire event.
    el.handlePaste(e)

    expect(handleChange)
      .toBeCalledWith(e)
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
      Textdiv.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)
  })
})
