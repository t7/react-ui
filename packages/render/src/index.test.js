import React from 'react'
import { cleanup, render } from 'react-testing-library'
import Render from './'

const renderWithProps = (props = {}) => {
  return render(<Render {...props} />)
}

describe('Render component', () => {
  afterEach(cleanup)

  it('handles valid "if" props', () => {
    const props = {
      if: true,
      children: 'TEST'
    }

    const { container } = renderWithProps(props)

    expect(container.textContent).toBe(props.children)
  })

  it('handles invalid "if" props', () => {
    const props = {
      if: false,
      children: 'TEST'
    }

    const { container } = renderWithProps(props)

    expect(container.textContent).toBe('')
  })
})
