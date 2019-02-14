```js
import { Textdiv } from '@t7/forms'
```

**Note:** This uses the same props as the `<Textarea>` component, but has a different tag name.

While they are functionally similar, there is quite a bit more going on "under the hood" of `<Textdiv>`.

Its output is a `<div>` with `contenteditable="true"`, that converts anything pasted or typed into it to plain text, much like a default HTML `<texarea>` would.

The benefit of using a `<Textdiv>` component is that it grows with its content, without necessitating a JS grow-by-pixel approach, which is how one might handle a `<textarea>`.

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
const readonly = true

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

```jsx
<Textdiv
  autofocus={autofocus}
  disabled={disabled}
  errorMessage={errorMessage}
  id={id}
  name={name}
  placeholder={placeholder}
  readonly={readonly}
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
