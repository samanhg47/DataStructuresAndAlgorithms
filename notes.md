### **Link List** (haha, punny)
  - [Big O](#bigO)

&ensp;

<h1 id=bigO>Big-O</h1>

 *Official Term* - Big-O Asymptotic Analysis

 *Use Case* - Denotes how scalable an algorithm is

 **Link List**
  ##### &ensp;&ensp; - [Time Testing](#timeTesting)

  &ensp;

<h2 id=timeTesting><B>Time Testing</B></h2>

Javascript:

```js
function funcToCheck(array){
  let t0 = preformance.now()
  //algorithm
  let t1 = preformance.now()
  console.log(`funcToCheck took ${t1-t0}ms to run`)
}
```

*preformance.now() is a is a function, built into javascript, which returns time in milliseconds*

&ensp;

Python:

```py
import time
```