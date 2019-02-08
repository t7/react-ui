// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Select } from '../'

// Describe `<Component/>` name.
describe('Select', () => {
  // Dummy props.
  const props = {
    disabled: true,
    id: 'example_id',
    name: 'example_name',
    required: true,
    value: 'value_1',
    width: 'auto',

    options: [
      {
        value: 'value_0',
        name: 'name_0'
      },
      {
        value: 'value_1',
        name: 'name_1'
      }
    ],

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Select
      {...props}
    />
  )

  // Get the `<select>`.
  const select =
    T.findRenderedDOMComponentWithTag(el, 'select')

  // Get options.
  const options =
    select.querySelectorAll('option')

  // =================
  // Test for options.
  // =================

  it('has correct options', () => {
    expect(options.length)
      .toBe(2)

    // First option.
    expect(options[0].value)
      .toBe(props.options[0].value)

    expect(options[0].innerHTML)
      .toBe(props.options[0].name)

    // Second option.
    expect(options[1].value)
      .toBe(props.options[1].value)

    expect(options[1].innerHTML)
      .toBe(props.options[1].name)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(select.value)
      .toBe(props.value)
  })

  // ==================
  // Test for disabled.
  // ==================

  it('is disabled', () => {
    expect(select.disabled)
      .toBe(true)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(select.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(select.name)
      .toBe(props.name)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(select.hasAttribute('required'))
      .toBe(true)
  })

  // ====================
  // Test for auto width.
  // ====================

  it('has auto width', () => {
    expect(select.className)
      .toContain('t7-select--width-auto')
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy event.
    const e = {
      currentTarget: {
        value: props.options[1].value
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, e.currentTarget.value)
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
      Select.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)
  })
})
