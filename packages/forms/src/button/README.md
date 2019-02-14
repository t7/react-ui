```js
import { Button } from '@t7/forms'
```

The `<Button>` component can be used as a form element (typical use case) or as a link.

Below is an example of all the props that it can use, though some are mutually exclusive. For instance, you could specify the `type` of button as `submit`, but wouldn't set the `type` of a link.

By passing `href`, the component will be used as an `<a>` link, otherwise a `<button>` tag will be generated.

```js
// Default: none.
const ariaControls = 'string'

// Default: none.
const children = 'string' // or element(s)

// Default: none.
const disabled = true

// Default: none.
const href = 'https://example.com/'

// Default: "default".
const mode = 'info | negative | positive | warn'

// Default: "default".
const size = 'small | big'

// Default: none.
const target = 'string'

// Default: none.
const title = 'string'

// Default: "button".
const type = 'submit | reset'

/*
  Data you might want to associate
  to the button, to be reported via
  callback when/if it is clicked.
*/
const buttonData = {
  foo: 'bar'
}

// Event callback.
const handleClick = (e, buttonData) => {
  /*
    `e` = browser event.

    `buttonData` is your custom data.
  */
}
```

```jsx
// Link.
<Button
  buttonData={buttonData}
  disabled={disabled}
  href={href}
  mode={mode}
  size={size}
  target={target}
  title={title}

  // Events.
  handleClick={handleClick}
>
  Text and/or elements

  (aka children={…})
</Button>
```

```jsx
// Button.
<Button
  ariaControls={ariaControls}
  buttonData={buttonData}
  disabled={disabled}
  mode={mode}
  size={size}
  title={title}
  type={type}

  // Events.
  handleClick={handleClick}
>
  Text and/or elements

  (aka children={…})
</Button>
```
