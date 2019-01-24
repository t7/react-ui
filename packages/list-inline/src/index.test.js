import React from 'react'
import { render } from 'react-testing-library'
import ListInline from './'

describe('ListInline component', () => {
  it('should render with text', () => {
    const { container } = render(<ListInline />)
    expect(container.textContent).toBe('This is a ListInline component!')
  })
})
