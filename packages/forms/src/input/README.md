```js
import { Input } from '@t7/forms'
```

This is a multi-purpose component for all textual inputs.

By changing the `type` you can use it as `"text"`, `"password"`, etc.

It accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const classNameForAbbr = 'string'

// Default: none.
const classNameForError = 'string'

// Default: none.
const classNameForInput = 'string'

// Default: none.
const classNameForLabel = 'string'

// Default: none.
const disabled = true

// Default: none.
const errorMessage = 'string'

// Ensured unique, if blank.
const id = 'string'

// Default: none.
const label = 'string'

// Default: none.
const name = 'string'

// Default: none.
const placeholder = 'string'

// Default: none.
const required = true

// Default: none.
const size = 10

// Default: none.
const styleForAbbr = {color: 'red'}

// Default: none.
const styleForError = {color: 'red'}

// Default: none.
const styleForInput = {color: 'red'}

// Default: none.
const styleForLabel = {color: 'red'}

// Default: "text".
const type = 'password'

// Default: 100% wide.
const width = 'auto'

// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = string value of the input.
  */
}
```

```jsx
<Input
  autofocus={autofocus}
  disabled={disabled}
  errorMessage={errorMessage}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}
  type={type}

  // Extra class names.
  classNameForAbbr={classNameForAbbr}
  classNameForError={classNameForError}
  classNameForInput={classNameForInput}
  classNameForLabel={classNameForLabel}

  // Inline styles.
  styleNameForAbbr={styleNameForAbbr}
  styleNameForError={styleNameForError}
  styleNameForInput={styleNameForInput}
  styleNameForLabel={styleNameForLabel}

  // Width overrides.
  size={size}
  width={width}

  // Events.
  handleChange={handleChange}
/>
```
