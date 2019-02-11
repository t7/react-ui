/*
  NOTE:
  This unit test is comparatively light,
  because <Radio> just uses <Checkbox>.
  - It only has a different `type`.
  - Everything else works the same.
*/

// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Radio } from '../'

// Describe `<Component/>` name.
describe('Radio', () => {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Radio />
  )

  // Get parent label.
  const parent =
    T.findRenderedDOMComponentWithTag(el, 'label')

  // Get content.
  const input =
    parent.querySelector('input')

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    expect(input.type)
      .toBe('radio')
  })
})
