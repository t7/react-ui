// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import { trim } from '@t7/utils'

// UI components.
import { ErrorMessage } from '../'

// Describe `<Component/>` name.
describe('ErrorMessage', () => {
  // Dummy props.
  const props = {
    classNameForError: 'CLASS_NAME',
    errorMessage: ' error  message ',
    styleForError: {
      fontWeight: 'bold'
    }
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ErrorMessage
      {...props}
    />
  )

  // Get content.
  const span =
    T.findRenderedDOMComponentWithTag(el, 'span')

  // ====================
  // Test for class name.
  // ====================

  it('has correct class name', () => {
    expect(span.className)
      .toContain(props.classNameForError)
  })

  // =======================
  // Test for error message.
  // =======================

  it('has correct error message', () => {
    expect(span.textContent)
      .toBe(trim(props.errorMessage))

    expect(span.title)
      .toBe(trim(props.errorMessage))
  })

  // ======================
  // Test for inline style.
  // ======================

  it('has correct inline style', () => {
    expect(span.style.fontWeight)
      .toBe(props.styleForError.fontWeight)
  })
})
