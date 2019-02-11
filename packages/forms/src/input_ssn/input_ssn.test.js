// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatInteger,
  formatSSN
} from '@t7/utils'

// UI components.
import { InputSSN } from '../'

// Describe `<Component/>` name.
describe('InputSSN', () => {
  // Dummy props.
  const props = {
    value: '333224444',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputSSN
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
    expect(formatSSN(props.value))
      .toBe(input.value)

    expect(formatInteger(input.value))
      .toBe(props.value)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const value = '77700555'

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
      value: '1-2-3-4-5-6'
    }

    // Dummy state.
    const state = {
      errorMessage: '',
      oldValue: '333-22-4444'
    }

    // Fire event.
    const newState =
      InputSSN.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe('SSN format is invalid')
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
      InputSSN.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe(props.errorMessage)
  })
})
