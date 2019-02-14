```js
import { InputMoneyUK } from '@t7/forms'
```

This component is used to format UK currency.

It supports the same props as a typical `<Input>` component, but the way it fires `handleChange` is slightly different. It includes an additional parameter, which represents an "API" format if is numeric.

In the following example, `apiValue` would be `0` if the value is invalid.

```js
// Event callback.
const handleChange = (e, value, apiValue) => {
  /*
    `e` = browser event.

    `value` = "£1,000.00" string.

    `apiValue` = `1000` number.
  */
}
```

```jsx
<InputMoneyUK
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Formats to "£1,000.00".
  value='1000'

  // Events.
  handleChange={handleChange}
/>
```
