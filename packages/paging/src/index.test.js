import React from 'react'
import { configure, mount } from 'enzyme'
import Pagination from './index'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Component: Pagination, not auto-resized', () => {
  const props = {
    totalItems: 51,
    pageSize: 5,
    maxButtons: 7,
    autoLayout: false,
    className: 'test-class'
  }

  const component = mount(<Pagination {...props} />)

  it('should render with defaults', () => {
    const control = component.find('[data-test-id="pagination-control"]')

    expect(control.length).toBe(1)
  })

  it('If on page 1, previous arrow should be disabled', () => {
    expect(
      component.find('[data-test-id="pager-button-previous"]').props().disabled
    ).toBe(true)
  })

  it('If not on page 1, previous arrow should be enabled', () => {
    component.setProps({ pageIndex: 1 })

    expect(
      component.find('[data-test-id="pager-button-previous"]').props().disabled
    ).toBe(false)
  })

  it('If not on page 1, page 1 should be selected', () => {
    component.setProps({ pageIndex: 1 })

    expect(
      component
        .find('[data-test-id="pager-button"]')
        .at(1)
        .props().selected
    ).toBe(true)
  })

  it('If on last page, next arrow should be disabled', () => {
    component.setProps({ pageIndex: 10 })

    expect(
      component.find('[data-test-id="pager-button-next"]').props().disabled
    ).toBe(true)
  })

  it('Page changes, function gets called', () => {
    const spy = jest.fn()
    const component2 = mount(<Pagination {...props} onPageChanged={spy} />)

    component2.find('[data-test-id="pager-button-next"]').simulate('click')

    expect(spy.mock.calls.length).toBe(1)
  })

  it('Next button clicked, fires function with next page', () => {
    const spy = jest.fn()
    const component2 = mount(<Pagination {...props} onPageChanged={spy} />)

    component2.find('[data-test-id="pager-button-next"]').simulate('click')

    expect(spy).toHaveBeenCalledWith(1)
  })

  it('Next button clicked, fires function with next page', () => {
    const spy = jest.fn()
    const component2 = mount(
      <Pagination {...props} onPageChanged={spy} pageIndex={4} />
    )

    component2.find('[data-test-id="pager-button-previous"]').simulate('click')

    expect(spy).toHaveBeenCalledWith(3)
  })

  it('If max number of buttons is set, do not exceed that number', () => {
    component.setProps({ maxButtons: 3 })

    expect(component.find('PagerItem').length).toBe(5)
  })

  it('If 501 items exist, and page size is 10, last button should be page 51', () => {
    component.setProps({ totalItems: 501, pageSize: 10 })

    expect(
      component
        .find('[data-test-id="pager-button"]')
        .last()
        .text()
    ).toBe('51')
  })

  it('If there are less pages than the page size, no buttons should be rendered', () => {
    component.setProps({ totalItems: 5, pageSize: 10 })

    expect(component.find('PagerItem').length).toBe(0)
  })

  it('If is 1 more item than the page size, 2 button should be rendered', () => {
    component.setProps({ totalItems: 6, pageSize: 5 })

    expect(component.find('PagerItem').length).toBe(2)
  })

  it('Should not dispatch a change page function if same page is clicked', () => {
    const spy = jest.fn()
    const component2 = mount(
      <Pagination {...props} onPageChanged={spy} pageIndex={0} />
    )

    component2
      .find('[data-test-id="pager-button"]')
      .first()
      .simulate('click')

    expect(spy.mock.calls.length).toBe(0)
  })

  it('Should show ellipsis', () => {
    component.setProps({
      totalItems: 501,
      pageSize: 10,
      maxButtons: 5
    })

    expect(
      component
        .find('[data-test-id="pager-button"]')
        .at(3)
        .text()
    ).toBe('...')
  })

  it('Classnames should be retained', () => {
    expect(component.hasClass('test-class')).toBe(true)
  })
})

describe('Component: Pagination, not auto-resized', () => {
  const props = {
    totalItems: 551,
    pageSize: 5,
    autoLayout: true,
    className: 'test-class'
  }

  const func = jest.fn()
  const component = mount(<Pagination onPageChanged={func} {...props} />)

  it('Should not exceed number of pager buttons with given width', () => {
    // TBD - needs to be written in e2e test
  })

  it('Pager button calculation should update when width changes', () => {
    // TBD - needs to be written in e2e test
  })

  it('Should have minimum of 5 total pager buttons at any given width', () => {
    expect(component.find('PagerItem').length).toBe(5)
  })
})
