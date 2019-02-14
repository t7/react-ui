```js
import { InputSSN } from '@t7/forms'
```

This component is used to format a US social security number.

It supports the same props as a typical `<Input>` component, but the way it fires `handleChange` is slightly different. It includes an additional parameter, which represents an "API" format if is numeric.

In the following example, `apiValue` would be `""` if the value is invalid.

NOTE: This component will automatically display an error, if the value's format does not represent a valid social security number. The error can be overridden by passing `errorMessage` directly in props.

```js
// Event callback.
const handleChange = (e, value, apiValue) => {
  /*
    `e` = browser event.

    `value` = "333-22-4444" string.

    `apiValue` = "333224444" string.
  */
}
```

```jsx
<InputSSN
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Automatic, if omitted.
  errorMessage={errorMessage}

  // Formats to "333-22-4444".
  value='333224444'

  // Events.
  handleChange={handleChange}
/>
```
