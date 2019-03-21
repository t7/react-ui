# @t7/tabs

Create a React tab compoent and related panel content from a single formatted structure

## Installation
```sh
npm install @t7/tabs --save
```

## Usage
```js
import Tabs, { TabPanel } from '@t7/tabs'
import '@t7/tabs/dist/index.css'
```
```js
/* create a "handler" if your appliction requires additional processing when tabs are selected */
const handleClick = (e, index, label) => {
  <do something interesting>

  /*
    `e` is the event,
    'index' is the index of the tab in the order declared,
    `label` is the text itself.
  */
}

.
.
.

/* create your tabs as a single logical grouping */
<Tabs selected={0} handleClick={handleClick}>
  <TabPanel label='Tab 1'>
    <p>
      Tab content for Tab 1
    </p>
  </TabPanel>
  <TabPanel label='Tab 2'>
    <p>
      Tab content for Tab 2
    </p>
  </TabPanel>
  <TabPanel label='Tab 3'>
    <p>
      Tab content for Tab 3
    </p>
  </TabPanel>
</Tabs>
```
&nbsp;
&nbsp;

### Note regarding the use of the _required_ CSS
_*if your build process will not resolve the CSS in a module copy the file `@t7/tabs/dist/index.css` from the node_modules folder and reference the copy with an HTML link *_

```html
e.g.
<link rel="stylesheet" type="text/css" href="<your stylesheet folder>/@t7/tabs/dist/index.css">
```
