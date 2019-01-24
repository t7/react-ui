import React from 'react'
import { render } from 'react-testing-library'
import Tabs from './'

describe('Tabs component', () => {
  it('should render with text', () => {
    const { container } = render(<Tabs />)
    expect(container.textContent).toBe('This is a Tabs component!')
  })
})
