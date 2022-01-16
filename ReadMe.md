### **Link List** (haha, punny)
  - [Big O](#bigO)

&ensp;

<h1 id=bigO>Big-O</h1>

![Big-O Complexity Chart](./bigO_Complexity_Chart.jpeg)

**Link List**
  ##### &ensp;&ensp; - [Time Testing](#timeTesting)
  ##### &ensp;&ensp; - [O(1)](#o1)
  ##### &ensp;&ensp; - [O(n)](#on)
  ##### &ensp;&ensp; - [O(n^2)](#on2)
  ##### &ensp;&ensp; - [O(2^n)](#o2n)
  ##### &ensp;&ensp; - [Calculating Big-O](#calculation)
  ##### &ensp;&ensp; - [Reduction Rules](#rules)

&ensp;

 *Official Term* - Big-O Asymptotic Analysis

 *Use Case* - Denotes how scalable an algorithm is. How much longer does the algorithm take to run as the data set grows?

&ensp;

<h2 id=timeTesting><b>Time Testing</b></h2>
In every language, we have a way to test how long a function takes to run. A good tool to have, although functions do have different run times on different machines based on CPU or even the same machine based on how many other processes are taking place at the same time.

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

<h2 id=o1><b>O(1)</b></h2>

*Constant Time*

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  return array.shift()
}

func(arr)
```

Denotes that no matter how many data points are in the data set, the function will always iterate the same amount of times.

&ensp;

<h2 id=on><b>O(n)</b></h2>

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

<h2 id=on2><b>O(n^2)</b></h2>

*Nested Iteration*

```js
const arr = ['a', 'b', 'c', 'd', 'e']

const func = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(array[i], array[j])
    }
  }
}

func(arr)
```

Denotes that n is in a certain amount of nested loops. If the function runs one loop and then another, Big-O is O(n + n)(we'll go over that later), if the function runs one loop inside of another, Big-O is O(n * n). A number multiplied by itself is simplified into an exponential so Big-O is O(n^2). If there was a loop nested in a loop nested in a loop, Big-O would be O(n^3). You see the pattern. As the data set increases linearly, run time increases exponentially.

&ensp;


<h2 id=calculation><b>Calculating Big-O</b></h2>

```js
function halfSumCalc(array){
  const half = Math.floor(array.length / 2) // O(1)
  let halfSum = 0 // O(1)

  for(let i = 0; i < half; i++){// O(1) O(n/2)
    halfSum += array[i] // O(n/2)
  }

  let index = 0 // O(1)
  while(index < array.length){
    console.log('hi') // O(n)
    index++ // O(n)
  }
  return halfSum // O(1)
}
halfSumCalc(arr)
```

&ensp;

Let's take into account `halfSumCalc`, the first step has a Big-O of O(1) because regardless of input length, that step only runs once. Why does `halfSum += array[i]` have a Big-O of O(n/2)? For the same reason as `i++`, because the computer will always have to calculate that section of code half as many times as the data set is long. Then why does `index++` have a Big-O of O(n)? Because that section will be run as many times as the number of data points. If we add up all of our Big-O notations for each line of code, we get the cumulative Big-O for the function. In this case O(1 + 1 + 1 + 1 + 1 + n + n + n/2 + n/2). Reduced? O(5 + 3n). For practical reasons, we reduce this even further and just call it O(n). Why? We'll discuss that in the next section.

&ensp;

<h2 id=rules><b>Reduction Rules</b></h2>

##### [1. Worst Case](#rule1)

##### [2. Remove Constants](#rule2)

##### [3. Different Terms For Inputs](#rule3)

##### [4. Drop Non Dominants](#rule4)

&ensp;

<h3 id=rule1><i>Rule 1: Worst Case</i></h3>

```js
const arr = new Array(50).fill('element')
arr.includes("element")
```

According to this rule, we always calculate Big-O based on the worst case senario. Pertaining to the example code block, the array method `array.prototype.incudes()` is a built in loop function that searches for an element in the array that strictly equals the input parameter. If it finds a "match", the function then breaks and returns a truthy boolean because its only goal is to see if a match exists at least once. While this is technically more efficient than if it were to loop through the whole array, even once a match was found, Big-O only takes into account the worst case senario. In the case of `array.prototype.incudes()`, the function runs fastest if the match is the first element in the array and slowest if the match is last in the array. Thus, we calculate Big-O for when the match is last, so that would be O(n). Why? Because if the potential data set (in this case that would be an array) were to increase in a linear fashion, so would the run time of this function when the parameter match is at the last index (the worst case scenario). What type of Big-O denotes a linear relationship between run time and data set length? O(n).

&ensp;

<h3 id=rule2><i>Rule 2: Remove Constants</i></h3>

```js
function halfSumCalc(array){
  const half = Math.floor(array.length / 2)
  let halfSum = 0

  for(let i = 0; i < half; i++){
    halfSum += array[i]
  }

  let index = 0
  while(index < array.length){
    console.log('hi')
    index++
  }
  return halfSum
}
halfSumCalc(arr)
```

According to this rule, we remove constants from or Big-O calculation. We do this because the minutae of the calculation become more and more insignificant as we scale for larger, more realistic, data sets. Let's go back to `halfSumCalc`. As we previously calculated, it's Big-O was O(5 + 3n). How did we go from that to just O(n). This can be explained a few different ways, I'm going to give the one that makes the most sense to me. Big-O, as used in computer science, is basically just a way to convey the relationship of data set length, to how long a particular function will take to run. With that in mind, all of the extra numbers become superfluous, as we just basically need to know that, if we were to increase the data set in a linear way, the run time of this function would also increase in a linear way. We show that by simply saying the Big-O is O(n) because when we see that, we know everything we need to know about the relationship this function's run time will have with a given data set's length. In other words, the only times numbers should be in our simplified Big-O notation are to denote a constant relationship, e.g O(1), or when we have an exponential relationship, e.g. O(4^n), O(n^5), etc.

&ensp;

<h3 id=rule3><i>Rule 3: Different Terms For Inputs</i></h3>

```js
function halfSumCalc(array1, array2){
  const half = Math.floor(array1.length / 2)
  let halfSum = 0

  for(let i = 0; i < half; i++){
    halfSum += array1[i]
  }

  let index = 0
  while(index < array2.length){
    console.log('hi')
    index++
  }
  return halfSum
}
halfSumCalc(arr)
```
This rule means that we need to have different terms for each parameter, i.e. input, the function takes in. Lets give our old friend `halfSumCalc` another parameter where it takes in another array. In this example what is the Big-O? Well, if we use our new rule and give each parameter a different term (lets say "n" and "m"), we can reduce the Big-O mathmatically to O(5 + n + 2m). If we use rule 2 to rid ourselves of the superfluities then we can further reduce the function to O(n + m).

&ensp;

<h3 id=rule4><i>Rule 4: Drop Non Dominants</i></h3>

&ensp;
