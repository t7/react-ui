// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import Render from './'

// Helper.
const renderWithProps = (props = {}) => {
  // Element.
  const el = (
    <div className='PARENT'>
      <Render {...props} />
    </div>
  )

  // Root.
  const root =
    document.getElementById('root')

  // Render.
  ReactDOM.render(el, root)

  // Get parent.
  const parent =
    document.querySelector('.PARENT')

  // Expose object.
  return {
    el,
    parent
  }
}

// Describe `<Component/>` name.
describe('Render', () => {
  // ==============
  // Clear the DOM.
  // ==============

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
  })

  // ====================
  // Test for valid `if`.
  // ====================

  it('handles valid "if" props', () => {
    const props = {
      if: true,
      children: 'TEST'
    }

    const { parent } =
      renderWithProps(props)

    expect(parent.textContent)
      .toBe(props.children)
  })

  // ======================
  // Test for invalid `if`.
  // ======================

  it('handles invalid "if" props', () => {
    const props = {
      if: false,
      children: 'TEST'
    }

    const { parent } =
      renderWithProps(props)

    expect(parent.textContent)
      .toBe('')
  })
})
