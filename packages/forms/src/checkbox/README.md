```js
import { Checkbox } from '@t7/forms'
```

This component has custom UI, but fuctions like a regular `<input>`.

It accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const disabled = true

// Ensured unique, if blank.
const id = 'string'

// Default: none.
const label = 'Radio label'

// Default: none.
const name = 'string'

// Default: none.
const required = true

// Default: none.
const value = 'string'

// Default: false.
const checked = true

// Event callback.
const handleChange = (e, value, checked) => {
  /*
    `e` = browser event.

    `value` = string value of the input.

    `checked` is a boolean.
  */
}
```

```jsx
<Checkbox
  autofocus={autofocus}
  checked={checked}
  disabled={disabled}
  id={id}
  label={label}
  name={name}
  required={required}
  value={value}

  // Events.
  handleChange={handleChange}
/>
```
