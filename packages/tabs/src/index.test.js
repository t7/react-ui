import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Tabs, { TabPanel } from './'

describe('ListInline component', () => {
  afterAll(cleanup)

  const { getAllByTestId } = render(
    <Tabs selected={0}>
      <TabPanel label='Tab 1'>
        <p>
          Tab content for "Tab 1"
        </p>
      </TabPanel>
      <TabPanel label='Tab 2'>
        <p>
          Tab content for "Tab 2"
        </p>
      </TabPanel>
    </Tabs>
  )

  const tabs = getAllByTestId('tab')
  const panels = getAllByTestId('panel')

  it('has child tabs', () => {
    expect(tabs.length).toBe(2)
  })

  it('has child panels', () => {
    expect(panels.length).toBe(2)
  })

  it('responds to clicks', () => {
    // First panel = off.
    expect(tabs[0].getAttribute('aria-selected')).toBe('true')
    expect(panels[0].getAttribute('aria-hidden')).toBe('false')

    // Second panel = on.
    expect(tabs[1].getAttribute('aria-selected')).toBe('false')
    expect(panels[1].getAttribute('aria-hidden')).toBe('true')

    // Second tab clicked.
    fireEvent.click(tabs[1])

    // First panel = off.
    expect(tabs[0].getAttribute('aria-selected')).toBe('false')
    expect(panels[0].getAttribute('aria-hidden')).toBe('true')

    // Second panel = on.
    expect(tabs[1].getAttribute('aria-selected')).toBe('true')
    expect(panels[1].getAttribute('aria-hidden')).toBe('false')
  })
})
