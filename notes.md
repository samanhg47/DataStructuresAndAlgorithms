### **Link List** (haha, punny)
  - [Big O](#bigO)

&ensp;

<h1 id=bigO>Big-O</h1>

 **Link List**
  ##### &ensp;&ensp; - [Time Testing](#timeTesting)

  &ensp;


 *Official Term* - Big-O Asymptotic Analysis

 *Use Case* - Denotes how scalable an algorithm is. How much longer does the algorithm take to run as we the data set grows?

 &ensp;

<h2 id=timeTesting><B>Time Testing</B></h2>

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