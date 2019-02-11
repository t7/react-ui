// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Label } from '../'

// Describe `<Component/>` name.
describe('Label', () => {
  // Dummy props.
  const props = {
    id: 'example_id',
    label: 'example_label',
    required: true
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Label
      {...props}
    />
  )

  // Get content.
  const label =
    T.findRenderedDOMComponentWithClass(el, 't7-input__label')

  const abbr =
    label.querySelector('.t7-input__label__abbr')

  // ============
  // Test for ID.
  // ============

  it('has correct `for` to match `id`', () => {
    expect(label.htmlFor)
      .toBe(props.id)
  })

  // ====================
  // Test for label text.
  // ====================

  it('has correct label text', () => {
    expect(label.textContent)
      .toBe(props.label + ' *')
  })

  // ==================
  // Test for required.
  // ==================

  it('has correct `abbr` for `required`', () => {
    expect(abbr.textContent)
      .toBe('*')

    expect(abbr.title.toLowerCase())
      .toBe('required')
  })
})
