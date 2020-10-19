# Item Flowing

Item Flowing, allows items to change depending on time.

- You can determine how long the items will change.
- You can determine the total duration of the change process.
- You can make the items change within the loop within the specified time.

## Demo

![city](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/city.gif)

![counter](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/counter.gif)

![loading](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/loading.gif)

## Installation & Usage

```bash
npm install item-flowing
```

### Include the Component

```bash
import ItemsFlowing from 'item-flowing';
```

### Main Props

| Attributes  |   Type    | Default | Description                                                                                                                                                                                                                                                                      |
| :---------- | :-------: | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| flowItems   |  `array`  | `null`  | An array of numbers or texts to flow. container                                                                                                                                                                                                                                  |
| changedTime | `integer` | `1000`  | Change times of items.                                                                                                                                                                                                                                                           |
| topTime     | `integer` | `null`  | The time period when all items will change. The longer the time, the slower the change speed of the items.                                                                                                                                                                       |
| loop        | `boolean` | `true`  | If you want to use `topTime` and `changedTime` together, the `loop` must be **true**. The **true** of the loop allows the items to change at the desired time within a certain time period. And it does this in a loop. That's why `changedTime` can't be bigger than `topTime`. |

### Usage

```bash
import React from 'react'
import ItemsFlowing from 'item-flowing';

function App() {
  const flowArray = ['Paris', 'Doha', 'Amsterdam', 'Venice', 'Kyoto'];
}
```

_Allows `flowArray` items to change 1 per second._

```bash
     return (
      <ItemFlowing
          flowItems={flowArray}
          changedTime={1000}  #1s
        />
  );
```

_Allows all `flowArray` items to change within 20 seconds._

```bash
return (
      <ItemsFlowing
          flowItems={flowArray}
          topTime={20000} #20s
        />
  );
```

_Allows `flowArray` items to change every .5 seconds. And it does this in a loop for 60 seconds_

```bash
return (
      <ItemsFlowing
          flowItems={flowArray}
          changedTime={500} #0.5s
          topTime={60000} #1m
          loop={true}
        />
  );
```

#### Version 1.0.1

In this version, only texts and numbers are flowing in time.

## Contribute

If you have an idea for a missing feature send it up via PR to the `src/components` folder.

## Author

Kenan Günen

## License

MIT. Copyright (c) 2020 Kenan Günen.
