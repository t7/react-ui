```js
import { InputAlphanumeric } from '@t7/forms'
```

This component is used to format an alphanumeric value.

It supports the same props as a typical `<Input>` component, but provides `formatAlphanumeric` from `@t7/utils` as its `mask` by default.

```js
// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = alphanumeric string.
  */
}
```

```jsx
<InputAlphanumeric
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Events.
  handleChange={handleChange}
/>
```
