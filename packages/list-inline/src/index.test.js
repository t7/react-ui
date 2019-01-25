import React from 'react'
import { cleanup, render } from 'react-testing-library'
import ListInline from './'

describe('ListInline component', () => {
  afterEach(cleanup)

  it('has list items', () => {
    const { getAllByTestId } = render(
      <ListInline>
        <li data-testid='item'>list_item_0</li>
        <li data-testid='item'>list_item_1</li>
      </ListInline>
    )
    expect(getAllByTestId('item').length).toBe(2)
  })
})
