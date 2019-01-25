import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Accordion from './'
import AccordionPanel from './template_panel'

describe('Accordion component', () => {
  afterAll(cleanup)

  const selected = {
    0: true
  }

  const { container } = render(
    <Accordion selected={selected}>
      <AccordionPanel label='Item 1'>
        <p>Content for Item 1</p>
      </AccordionPanel>
      <AccordionPanel label='Item 2'>
        <p>Content for Item 2</p>
      </AccordionPanel>
    </Accordion>
  )

  const headers = container.querySelectorAll('dt')
  const panels = container.querySelectorAll('dd')

  it('has child headers', () => {
    expect(headers.length).toBe(2)
  })

  it('has child panels', () => {
    expect(panels.length).toBe(2)
  })

  it('responds to clicks', () => {
    // First panel = off.
    expect(headers[0].getAttribute('aria-selected')).toBe('true')
    expect(headers[0].getAttribute('aria-hidden')).toBe('false')

    // Second panel = on.
    expect(headers[1].getAttribute('aria-selected')).toBe('false')
    expect(headers[1].getAttribute('aria-hidden')).toBe('true')

    // Second header clicked.
    fireEvent.click(headers[1], {})

    // First panel = off.
    expect(headers[0].getAttribute('aria-selected')).toBe('false')
    expect(headers[0].getAttribute('aria-hidden')).toBe('true')

    // Second panel = on.
    expect(headers[1].getAttribute('aria-selected')).toBe('true')
    expect(headers[1].getAttribute('aria-hidden')).toBe('false')
  })
})
