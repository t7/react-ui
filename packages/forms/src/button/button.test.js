// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Button } from '../'

// =========== //
// =========== //
// Button tag. //
// =========== //
// =========== //

describe('Button', () => {
  // Dummy props.
  const props = {
    ariaControls: 'example_id',
    children: 'CHILDREN',
    className: 'CLASS_NAME_FOR_BUTTON',
    disabled: true,
    mode: 'warn',
    size: 'small',
    title: 'example_title',
    type: 'submit',

    // Style.
    style: {
      fontFamily: 'monospace'
    }
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
      {...props}
    />
  )

  // Get content.
  const button =
    T.findRenderedDOMComponentWithClass(el, 't7-button')

  // =============
  // Test for tag.
  // =============

  it('has `<button>` tag', () => {
    expect(button.tagName.toLowerCase())
      .toBe('button')
  })

  // ======================
  // Test for `class` name.
  // ======================

  it('has correct `class` name', () => {
    expect(button.className)
      .toContain(props.className)
  })

  // ==============
  // Test for ARIA.
  // ==============

  it('has correct ARIA', () => {
    expect(button.getAttribute('aria-controls'))
      .toBe('example_id')
  })

  // ====================
  // Test disabled state.
  // ====================

  it('has correct disabled', () => {
    expect(button.disabled)
      .toBe(true)
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', () => {
    expect(button.textContent)
      .toBe(props.children)
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', () => {
    expect(button.title)
      .toBe(props.title)
  })

  // ==============
  // Test for mode.
  // ==============

  it('has correct mode', () => {
    expect(button.getAttribute('data-mode'))
      .toBe(props.mode)
  })

  // ==============
  // Test for size.
  // ==============

  it('has correct size', () => {
    expect(button.getAttribute('data-size'))
      .toBe(props.size)
  })

  // ===============
  // Test for style.
  // ===============

  it('has correct style', () => {
    expect(button.style.fontFamily)
      .toBe(props.style.fontFamily)
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    expect(button.type)
      .toBe(props.type)
  })
})

// ================== //
// ================== //
// Button: Link mode. //
// ================== //
// ================== //

describe('Button -- link', () => {
  // Dummy props.
  const props = {
    children: 'CHILDREN',
    className: 'CLASS_NAME_FOR_BUTTON',
    href: 'https://example.com',
    mode: 'positive',
    size: 'big',
    target: '_blank',
    title: 'example_title',

    // Button data.
    buttonData: {
      fakeData: true
    },

    // Events.
    handleClick: jest.fn(),

    // Style.
    style: {
      fontFamily: 'monospace'
    }
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
      {...props}
    />
  )

  // Get button.
  const button =
    T.findRenderedDOMComponentWithClass(el, 't7-button')

  // =============
  // Test for tag.
  // =============

  it('is `<a>` tag', () => {
    expect(button.tagName.toLowerCase())
      .toBe('a')
  })

  // ======================
  // Test for `class` name.
  // ======================

  it('has correct `class` name', () => {
    expect(button.className)
      .toContain(props.className)
  })

  // ==============
  // Test for href.
  // ==============

  it('has correct href', () => {
    expect(button.getAttribute('href'))
      .toBe(props.href)
  })

  // ================
  // Test for target.
  // ================

  it('has correct target', () => {
    expect(button.target)
      .toBe(props.target)
  })

  // =============
  // Test for rel.
  // =============

  it('has correct rel', () => {
    expect(button.rel)
      .toContain('noopener')

    expect(button.rel)
      .toContain('noreferrer')
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', () => {
    expect(button.textContent)
      .toBe(props.children)
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', () => {
    expect(button.title)
      .toBe(props.title)
  })

  // ==============
  // Test for mode.
  // ==============

  it('has correct mode', () => {
    expect(button.getAttribute('data-mode'))
      .toBe(props.mode)
  })

  // ==============
  // Test for size.
  // ==============

  it('has correct size', () => {
    expect(button.getAttribute('data-size'))
      .toBe(props.size)
  })

  // ===============
  // Test for style.
  // ===============

  it('has correct style', () => {
    expect(button.style.fontFamily)
      .toBe(props.style.fontFamily)
  })

  // =======================
  // Test for "click" event.
  // =======================

  it('handles "click" event', () => {
    // Dummy event.
    const e = {
      fakeEvent: true
    }

    // Fire event.
    el.handleClick(e)

    expect(props.handleClick)
      .toBeCalledWith(e, props.buttonData)
  })
})
