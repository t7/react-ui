// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatInteger,
  formatMoneyDE
} from '@t7/utils'

// UI components.
import { InputMoney } from '../'

// Describe `<Component/>` name.
describe('InputMoney', () => {
  // Dummy props.
  const props = {
    countryCode: 'DE',
    mask: formatMoneyDE,
    value: 1000,

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputMoney
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
      .toContain('€')

    expect(
      parseFloat(
        formatInteger(input.value).slice(0, 4)
      )
    ).toBe(1000)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const value = '2000'

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
        parseFloat(value)
      )
  })
})
