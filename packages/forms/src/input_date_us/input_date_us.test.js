// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { InputDateUS } from '../'

// Describe `<Component/>` name.
describe('InputDateUS', () => {
  // Dummy props.
  const props = {
    value: '2018-12-31',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputDateUS
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
      .toBe('12/31/2018')
  })
})
