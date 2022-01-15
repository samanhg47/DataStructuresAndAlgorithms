### **Link List** (haha, punny)
  - [Big O](#bigO)

&ensp;

<h1 id=bigO>Big-O</h1>

![Big-O Complexity Chart](./bigO_Complexity_Chart.jpeg)

**Link List**
  ##### &ensp;&ensp; - [Time Testing](#timeTesting)
  ##### &ensp;&ensp; - [O(n)](#on)

&ensp;

 *Official Term* - Big-O Asymptotic Analysis

 *Use Case* - Denotes how scalable an algorithm is. How much longer does the algorithm take to run as we the data set grows?

&ensp;

<h2 id=timeTesting><B>Time Testing</B></h2>
A good tool to have, although functions do have different run times on different machines based on CPU or even the same machine based on how many other processes are taking place at the same time.

&ensp;

Javascript:

```js
function funcToCheck(params){
  let t0 = preformance.now()
  // algorithm
  let t1 = preformance.now()
  console.log(`funcToCheck took ${t1 - t0}ms to run`)
}

funcToCheck(params)
```

*`preformance.now()` is a is a function, built into javascript, which returns the time since time origin in milliseconds*

&ensp;

Python:

```py
import time

def funcToCheck(params):
  t0 = time.time()
  # algorithm
  t1 = time.time()
  print('funcToCheck took {t}se to run'.format(t = t1 - t0))

funcToCheck(params)
```
*`time.time()` is a function in the `time` library object (which is built into python) that returns the time since epoch in seconds.*

&ensp;

<h2 id=on><B>O(n)</B></h2>

*Linear Time*

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  array.forEach(a => a.concat(' processed'))
}

func(arr)
```

Denotes that for every data point (e.g. elements in an array), one iteration (i.e. loop, pass) must be made. As the data set increases, so does the run time in a linear fashion.

&ensp;

<h2 id=o1><B>O(1)</B></h2>

*Constant Time*

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  return array.shift()
}

func(arr)
```

Denotes that no matter how many data points are in the data set, the function will always iterate the same amount of times. 