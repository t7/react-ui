```js
import { InputInteger } from '@t7/forms'
```

This component is used to format an integer (whole number) value.

It supports the same props as a typical `<Input>` component, but provides `formatInteger` from `@t7/utils` as its `mask` by default.

```js
// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = integer string.
  */
}
```

```jsx
<InputInteger
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Events.
  handleChange={handleChange}
/>
```
