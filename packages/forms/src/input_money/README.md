```js
import { InputMoney } from '@t7/forms'
```

This is a base `class`, used by other components via composition. You probably shouldn't use it directly.

It will take an incoming `string` or `number` value and will apply a mask that is provided by its parent.

It is used by components such as these:

- `InputMoneyDE`
- `InputMoneyIN`
- `InputMoneyJP`
- `InputMoneyKR`
- `InputMoneyUS`
- `InputMoneyUK`
