// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Describe `<Component/>` name.
import { InputDateUK } from '../'

// ========== //
// ========== //
// Input: UK. //
// ========== //
// ========== //

describe('InputDateUK', () => {
  // Dummy props.
  const props = {
    value: '2018-12-31',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputDateUK
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
    expect(input.value)
      .toBe('31/12/2018')
  })
})
