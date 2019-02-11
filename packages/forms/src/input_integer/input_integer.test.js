// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatInteger
} from '@t7/utils'

// UI components.
import { InputInteger } from '../'

// Describe `<Component/>` name.
describe('InputInteger', () => {
  // Dummy props.
  const props = {
    value: '!@#$ ABC 123 !@#$',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputInteger
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
    expect(formatInteger(props.value))
      .toBe(input.value)
  })
})
