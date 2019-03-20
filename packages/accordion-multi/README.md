# @t7/accordion-multi

Create a multi-select 'accordion' style React component from a single structure

This component functions similarly to `<Accordion/>` except that it allows for multiple areas to be expanded at a time.

By default, accordion areas are collapsed. To render an area open, pass an object with the corresponding index(es) set to `true`.

## Installation
```sh
npm install @t7/accordion-multi --save
```

## Usage
```js
import AccordionMulti, { AccordionPanel } from '@t7/accordion-multi'
import '@t7/accordion/dist/index.css'
```
```js
/* indicate the selected item(s) */
let selected = {
  0: true,
  1: true
}

/* create a "handler" if your appliction requires additional processing when tabs are selected */
const handleClick = (e, index, label, selected) => {
  <do something interesting>

  /*
    `e` is the event.

    `index` is the numeric position.

    `label` is the text itself.

    `selected` is the state object.
  */
}

.
.
.

/* create your accordion as a single logical grouping */
<AccordionMulti selected={selected} handleClick={handleClick}>
  <AccordionPanel label='Item 1'>
    <p>
      Content for "Item 1"
    </p>
  </AccordionPanel>
  <AccordionPanel label='Item 2'>
    <p>
      Content for "Item 2"
    </p>
  </AccordionPanel>
  <AccordionPanel label='Item 3'>
    <p>
      Content for "Item 3"
    </p>
  </AccordionPanel>
</AccordionMulti>

```
&nbsp;
&nbsp;

### Note regarding the use of the _required_ CSS
_*if your build process will not resolve the CSS in a module copy the file `@t7/accordion-multi/dist/index.css` from the node_modules folder and reference the copy with an HTML link *_

```xml
e.g.
<link rel="stylesheet" type="text/css" href="<your stylesheet folder>/@t7/accordion-multi/dist/index.css">
```