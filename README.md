# Item Flowing

Allows items to change depending on time.

- You can determine how long the items will change.
- You can determine the total duration of the change process.
- You can make the items change within the loop within the specified time.

## Demo

![asdasd](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/city.gif)

![asdasd](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/counter.gif)

![asdasd](https://raw.githubusercontent.com/kenangunen/item-flowing/master/src/gif/loading.gif)

## Installation & Usage

```bash
npm install item-flowing
```

### Include the Component

- First you need to import the package.
- The component has 4 props.
  - `flowItems :` An array of numbers or texts to flow. (**It must be array**)
  - `changedTime :` Change times of items. (**It must be integer / 1s=1000**)
  - `topTime :` The time period when all items will change. The longer the time, the slower the change speed of the items. (**It must be integer / 1s=1000**)\*\*
  - `loop :` If you want to use `topTime` and `changedTime` together, the `loop` must be **true**. The **true** of the loop allows the items to change at the desired time within a certain time period. And it does this in a loop. That's why `changedTime` can't be bigger than `topTime`. (**It must be bloen.**)

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
      <ItemsFlowing
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

#### Version 1.0.0

In this version, only texts and numbers are flowing in time.
