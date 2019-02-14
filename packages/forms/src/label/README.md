```js
import { Label } from '@t7/forms'
```

The `<Label>` component is used by other form element components.

It is typically included alongside a form element, with the parent `props` passed down.

It accepts the following `props`.

```js
// Default: none.
const id = 'string'

// Default: none.
const label = 'string'

// Default: none.
const required = true
```

```jsx
return (
  <React.Fragment>

    <Label
      id={id}
      label={label}
      required={required}
    />

    <input
      {...propsForInput}
    />

  </React.Fragment>
)
```
