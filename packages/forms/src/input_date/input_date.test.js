// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { InputDate } from '../'

// =======
// Helper.
// =======

const renderWithProps = (props = {}) => {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputDate
      {...props}
    />
  )

  // Get content.
  const parent =
    T.findRenderedDOMComponentWithTag(el, 'input')

  // Expose object.
  return {
    el,
    parent
  }
}

// ========================= //
// ========================= //
// Date input: "MM/DD/YYYY". //
// ========================= //
// ========================= //

describe('InputDate -- "MM/DD/YYYY"', () => {
  // Dummy props.
  const props = {
    dateFormat: 'MM/DD/YYYY',
    value: '2018-12-31',

    // Events.
    handleChange: jest.fn()
  }

  // Get content.
  const {
    el,
    parent
  } = renderWithProps(props)

  // =======================
  // Test for initial value.
  // =======================

  it('has correct initial value', () => {
    expect(parent.value)
      .toBe('12/31/2018')
  })

  // ==============================
  // Test for "valid" value change.
  // ==============================

  it('handles "valid" value change', () => {
    // Fake event.
    const e = {
      foo: true
    }

    // Dummy value.
    const BEFORE = '11/30/2020'
    const AFTER = '2020-11-30'

    // Fire event.
    el.handleChange(e, BEFORE)

    expect(props.handleChange)
      .toBeCalledWith(e, BEFORE, AFTER)
  })

  // ================================
  // Test for "invalid" value change.
  // ================================

  it('handles "invalid" value change', () => {
    // Fake event.
    const e = {
      foo: true
    }

    // Dummy value.
    const BEFORE = '99/99/202'
    const AFTER = ''

    // Fire event.
    el.handleChange(e, BEFORE)

    expect(props.handleChange)
      .toBeCalledWith(e, BEFORE, AFTER)
  })
})

// ========================= //
// ========================= //
// Date input: "DD/MM/YYYY". //
// ========================= //
// ========================= //

describe('InputDate -- "DD/MM/YYYY"', () => {
  // Dummy props.
  const props = {
    dateFormat: 'DD/MM/YYYY',
    value: '2018-12-31',

    // Events.
    handleChange: jest.fn()
  }

  // Get content.
  const {
    el,
    parent
  } = renderWithProps(props)

  // =======================
  // Test for initial value.
  // =======================

  it('has correct initial value', () => {
    expect(parent.value)
      .toBe('31/12/2018')
  })

  // ==============================
  // Test for "valid" value change.
  // ==============================

  it('handles "valid" value change', () => {
    // Fake event.
    const e = {
      foo: true
    }

    // Dummy value.
    const BEFORE = '30/11/2020'
    const AFTER = '2020-11-30'

    // Fire event.
    el.handleChange(e, BEFORE)

    expect(props.handleChange)
      .toBeCalledWith(e, BEFORE, AFTER)
  })

  // ================================
  // Test for "invalid" value change.
  // ================================

  it('handles "invalid" value change', () => {
    // Fake event.
    const e = {
      foo: true
    }

    // Dummy value.
    const BEFORE = '30/11/202'
    const AFTER = ''

    // Fire event.
    el.handleChange(e, BEFORE)

    expect(props.handleChange)
      .toBeCalledWith(e, BEFORE, AFTER)
  })

  // ============================
  // Test for props/state change.
  // ============================

  it('handles props/state change', () => {
    // Dummy props.
    const props = {
      dateFormat: 'MM/DD/YYYY',
      value: '2018-99-99'
    }

    // Dummy state.
    const state = {
      errorMessage: '',
      oldValue: '2018-12-31'
    }

    // Fire event.
    const newState =
      InputDate.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe('Date is invalid')
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
      InputDate.getDerivedStateFromProps(props, state)

    expect(newState.errorMessage)
      .toBe(props.errorMessage)
  })
})
