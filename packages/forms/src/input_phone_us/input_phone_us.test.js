// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatInteger,
  formatPhoneUS
} from '@t7/utils'

// UI components.
import { InputPhoneUS } from '../'

// Describe `<Component/>` name.
describe('InputPhoneUS', () => {
  // Dummy props.
  const props = {
    value: '5558675309',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputPhoneUS
      {...props}
    />
  )

  // Get content.
  const input =
    T.findRenderedDOMComponentWithTag(el, 'input')

  // =======================
  // Test for initial value.
  // =======================

  it('has correct initial value', () => {
    expect(formatPhoneUS(props.value))
      .toBe(input.value)

    expect(formatInteger(input.value))
      .toBe(props.value)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const value = '777333444'

    // Dummy event.
    const e = {
      foo: true
    }

    // Fire event.
    el.handleChange(e, value)

    expect(props.handleChange)
      .toBeCalledWith(
        e,
        value,
        ''
      )
  })

  // ============================
  // Test for props/state change.
  // ============================

  it('handles props/state change', () => {
    // Dummy props.
    const props = {
      value: '1-2-3-4-5-6-'
    }

    // Dummy state.
    const state = {
      errorMessage: '',
      oldValue: '555-867-5309'
    }

    // Fire event.
    const newState =
      InputPhoneUS.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe('Phone format is invalid')
  })

  // =====================
  // Test for props error.
  // =====================

  it('handles props error', () => {
    // Dummy props.
    const props = {
      errorMessage: 'CUSTOM ERROR'
    }

    // Dummy state.
    const state = {}

    // Fire event.
    const newState =
      InputPhoneUS.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe(props.errorMessage)
  })
})
