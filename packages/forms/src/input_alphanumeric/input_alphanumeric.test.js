// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatAlphanumeric
} from '@t7/utils'

// UI components.
import { InputAlphanumeric } from '../'

// Describe `<Component/>` name.
describe('InputAlphanumeric', () => {
  // Dummy props.
  const props = {
    value: '!@#$ ABC 123 !@#$',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputAlphanumeric
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
    expect(formatAlphanumeric(props.value))
      .toBe(input.value)
  })
})
