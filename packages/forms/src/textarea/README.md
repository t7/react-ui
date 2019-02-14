```js
import { Textarea } from '@t7/forms'
```

This component is a typical `<textarea>`. When the `blur` event fires, it will trim the content, and ensure that all unnecessary whitespace is removed, while still retaining `\n\n` as a visual "paragraph."

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
const styleForAbbr = {color: 'red'}

// Default: none.
const styleForError = {color: 'red'}

// Default: none.
const styleForInput = {color: 'red'}

// Default: none.
const styleForLabel = {color: 'red'}

// Default: none.
const value = 'string'

// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = string value of the input.
  */
}
```

To use the component, pass these props.

```jsx
<Textarea
  autofocus={autofocus}
  disabled={disabled}
  errorMessage={errorMessage}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}
  value={value}

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

  // Events.
  handleChange={handleChange}
/>
```
