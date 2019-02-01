/* global
describe
expect
it
jest
*/

// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import ListInline from './'

jest.disableAutomock()

// Describe `<Component/>` name.
describe('ListInline', () => {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ListInline>
      <li>
        list_item_0
      </li>
      <li>
        list_item_1
      </li>
    </ListInline>
  )

  // Get the `<ul>`.
  const ul = T.findRenderedDOMComponentWithClass(el, 't7-list-inline')

  // Get the `<li>`.
  const li = ul.querySelectorAll('li')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', () => {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for list.
  // ==============

  it('has list items', () => {
    expect(li.length).toBe(2)
    expect(li[0].innerHTML).toBe('list_item_0')
    expect(li[1].innerHTML).toBe('list_item_1')
  })
})
