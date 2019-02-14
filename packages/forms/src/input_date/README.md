```js
import { InputDate } from '@t7/forms'
```

This is a base class, used for building `<InputDateUK>` and `<InputDateUS>`.

You should probably use one of those directly, if `"DD/MM/YYYY"` or `"MM/DD/YYYY"` are needed.

However, if you would like to extend `<InputDate>` to handle other formats, this is the starter component you would likely use for composition.

```jsx
<InputDate
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Or: "DD/MM/YYYY".
  dateFormat='MM/DD/YYYY'
/>
```
