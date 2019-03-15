The **Pager** component provides a way to navigate paged data.

The component will calculate the page numbers to show based on the size
of the data set (`totalItems`) and the number of items per page (`pageSize`). 
The component has 2 layout modes.  The default calculates the number of pages
to show based on the container's width (`autoLayout`).  If `autoLayout` is false,
you can set the maximum number of buttons that will appear in the component
with the `maxButtons` property.  

The actual data handling is controlled by the parent and this component will
supply the current page via the `onPageChanged` property.  When a page changes, 
the current page number will be passed to the supplied function.  

```jsx static
import React, { Component } from 'react'
import Pager from '@t7/paging'

export class XComponent extends Component { 

  state = {
    pageIndex: 0
  }

  data = [
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true },
      { fake: true }
  ]

  handlePageChanged = (pageIndex) => {
      this.setState({pageIndex})
  }

  render() {
    const { data, handlePageChanged } = this
    const { pageIndex } = state

    return (
      <x-component>
        <Pager onPageChanged={handlePageChanged} totalItems={data.length} pageIndex={pageIndex} pageSize={3} />
      </x-component>
    )
  }
}
```
Note: `pageIndex` is 0-based.
