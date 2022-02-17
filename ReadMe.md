### **Link List** (haha, punny)
  - [Big O](#bigO)
  - [Data Structures](#ds)

&ensp;

<h1 id=bigO>Big-O</h1>

![Big-O Complexity Chart](./bigO_Complexity_Chart.jpeg)

**Link List**
  ##### &ensp;&ensp; - [Time Testing](#timeTesting)
  ##### &ensp;&ensp; - [Reduction Rules](#rules)
  ##### &ensp;&ensp; - [Time Complexity](#tc)
  ##### &ensp;&ensp; - [Space Complexity](#sc)

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
  const half = Math.floor(array.length / 2) // O(1)
  let halfSum = 0 // O(1)

  for(let i = 0; i < half; i++){// O(1) O(1) O(n/2)
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

According to this rule, we remove constants from or Big-O calculation. We do this because the minutae of the calculation become more and more insignificant as we scale for larger, more realistic, data sets. Let's take into account `halfSumCalc`, the first step has a Big-O of O(1) because regardless of input length, that step only runs once. Why does `halfSum += array[i]` have a Big-O of O(n/2)? For the same reason as `i++`, because the computer will always have to calculate that section of code half as many times as the data set is long. Then why does `index++` have a Big-O of O(n)? Because that section will be run as many times as the number of data points. If we add up all of our Big-O notations for each line of code, we get the cumulative Big-O for the function. In this case O(1 + 1 + 1  + 1 + 1 + 1 + n + n + n/2 + n/2). Reduced? O(6 + 3n). How do we go from that to just O(n). This can be explained a few different ways, I'm going to give the one that makes the most sense to me. Big-O, as used in computer science, is basically just a way to convey the relationship of data set length, to how long a particular function will take to run. With that in mind, all of the extra numbers become superfluous, as we only need to know that, if we were to increase the data set in a linear way, the run time of this function would also increase in a linear way. We show that by simply saying the Big-O is O(n) because when we see that, we know everything we need to know about the relationship this function's run time will have with a given data set's length. In other words, the only times numbers should be in our simplified Big-O notation are to denote a constant relationship, e.g O(1), or when we have an exponential relationship, e.g. O(4^n), O(n^5), etc.

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
This rule means that we need to have different terms for each parameter, i.e. input, the function takes in. Lets give our old friend `halfSumCalc` another parameter where it takes in another array. In this example what is the Big-O? Well, if we use our new rule and give each parameter a different term (lets say "n" and "m"), we can reduce the Big-O mathmatically to O(5 + n + 2m). If we use rule 2 to rid ourselves of the superfluities then we can further reduce the function to O(n + m). if the `while` loop was nested in the `for` loop, our Big-O would be O(n*m).

&ensp;

<h3 id=rule4><i>Rule 4: Drop Non Dominants</i></h3>

```js
function (chars) {
  console.log('these are our chars:')
  chars.forEach(a => console.log(a))

  console.log('these are their pairs')
  chars.forEach((a) => {
    chars.forEach((b) => {
      console.log(a, b)
    })
  })
}
```
This rule says that if we have two ways of handling an input, we only need to care pay attention to the most impactful of the two. Basically, this follows the same vibe as rule 2, we just need to pay attention to what will have the most impact at the end of the day. In the above example, what would the Big-O be based on what we already know? O(n + n^2) because steps that happen on the same level get added together and steps that are nested get multiplied. Abiding by rule 4, we would further reduce this to O(n^2) because the quadratic relationship will have *much* more of an impact on the run time than the linear relationship.

&ensp;

<h2 id=tc><b>Time Complexity</b></h2>

An algorithm's time complexity denotes the relationship between the size of the input and the amount of time it would take a computer to complete the tasks assigned by the algorithm. So what types of actions cost time in an algorithm? Mathmatical operations, comparisons, looping, and the calling of outside functions.

  ##### &ensp;&ensp; - [O(1): Constant Time](#To1)
  ##### &ensp;&ensp; - [O(n): Linear Time](#Ton)
  ##### &ensp;&ensp; - [O(n^2): Quadratic Time](#Ton2)
  ##### &ensp;&ensp; - [O(2^n)](#To2n)
  ##### &ensp;&ensp; - [O(n!): Factorial Time](#Tonf)

&ensp;

<h3 id=To1><b>O(1)</b> - <i>Constant Time</i></h3>

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  return array.pop()
}

func(arr)
```

Denotes that no matter how large the input is, the function will always iterate the same amount of times. As the input increases, the run time will stay relatively the same.

&ensp;

<h3 id=Ton><b>O(n)</b> - <i>Linear Time</i></h3>

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  array.forEach(a => a.concat(' processed'))
}

func(arr)
```

Denotes that for every increase in input, one iteration (i.e. loop/pass) must be made. As the input increases linearly, so does the run time.

&ensp;

<h3 id=Ton2><b>O(n^2)</b> - <i>Quadratic Time</i></h3>

```js
const arr = ['a', 'b', 'c', 'd', 'e']

const func = (array) => {
  array.forEach((a) => {
    array.forEach((b) => {
      console.log(a, b)
    })
  })
}

func(arr)
```

Denotes that n is in a certain amount of nested loops. If the function runs one loop and then another, Big-O is O(n + n)(we'll go over that later), if the function runs one loop inside of another, Big-O is O(n * n). A number multiplied by itself is simplified into an exponential so Big-O is O(n^2). If there was a loop nested in a loop nested in a loop, Big-O would be O(n^3). You see the pattern. As the input increases linearly, run time increases in quadratic time.

&ensp;

<h3 id=Tonf><b>O(n!)</b> - <i>Factorial Time </i></h3>

```js
const func = (num) => {
  for(let i = 0; i < num; i++){
    func(num-1)
  }
}

func(6)
```

Denotes that as the input increases in a linear fashion the algorithm must run another nested loop, thus multiplying the Big-O by "n".

&ensp;

<h2 id=sc><b>Space Complexity</b></h2>

An algorithm's space complexity denotes the relationship between the size of the input and the amount of memory it would take a computer to complete the tasks assigned by the algorithm. So what types of actions cost space in an algorithm? Variable assignment / element creation, the type data structure(s), allocations, and the calling of outside functions.

&ensp;

  ##### &ensp;&ensp; - [O(1): Constant Space](#So1)
  ##### &ensp;&ensp; - [O(n): Linear Space](#Son)

&ensp;

<h3 id=So1><b>O(1)</b> - <i>Constant Space</i></h3>

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  array.forEach(el => console.log('hi'))
}

func(arr)
```

Denotes that no matter how many data points are in the data set, the function will always use up the same amount of space.

&ensp;

<h3 id=Son><b>O(n)</b> - <i>Linear Space</i></h3>

```js
const arr = new Array(100).fill("element")

const func = (array) => {
  array.forEach(a => a.concat(' processed'))
}

func(arr)
```

Denotes that for every data point (e.g. elements in an array), one iteration (i.e. loop, pass) must be made. As the data set increases, so does the run time in a linear fashion.

&ensp;

<h1 id=ds>Data Structures</h1>

### *Definition* - A collection of values, given certain relationships to specialize them for specific use cases.

### Types

- [Arrays](#arrays)
- [Hash Tables](#hashTables)
- [Linked Lists](#linkedLists)
- [Stacks](#stacks)
- [Queues](#queues)
- [Trees](#trees)
- [Tries](#tries)
- [Graphs](#graphs)

### Operations

- **Insertion:** Adding an item to a structure
- **Deletion:** Removing an item from a structure
- **Traversal:** Accessing each data item once for processing
- **Searching:** Searching for a specific item or category within the structure
- **Sorting:** Organizing data in a way that's understandable and comprehensive
- **Access:** Method of picking out a specific item or items

&ensp;

<h2 id='arrays'><b>Arrays</b></h2>

### **Time Complexities**

- *Insertion:* O(n)
- *Deletion:* O(n)
- *Traversal:* O(n)
- *Search:* O(n)
- *Sorting:* Depends
- *Access:* O(1)

### **Types**

- [Static](#staticArr)
- [Dynamic](#dynamicArr)

<h3 id='staticArr'><b>Static Arrays</b></h3>

Static arrays have a set length, decided upon creation. Once created, they are then filled with data. Static arrays are useful when either you know exactly how long your data set will be or you know it wont exceed a certain length. Because the length is set upon creation, so is its place in your memory.

<h3 id='dynamicArr'><b>Dynamic Arrays</b></h3>

Dynamic arrays have the ability to  "dynamically" change in length but, as with everything, there is a trade off. Because you get the added flexibility of an array with an essentially infine length, as your array grows in length it will need to be saved in new places in the machine's memory. Thus, it must be iterated over are resaved in a new partition. This obviously increases time and spece complexities on certain operations.

&ensp;

<h2 id='hashTables'><b>Hash Tables</b></h2>

### **Time Complexities**

- *Insertion:* O(1)
- *Deletion:* O(1)
- *Traversal:* O(n)
- *Search:* O(1)
- *Sorting:* Depends
- *Access:* O(1)

Hash tables are basically unordered arrays, where you choose to save a `value` and a `key` in reference to it. The way arrays work, when you add the first item (e.g. `x`) it saves it as `{0: x}`. So Arrays are hash tables where the key is automatically just the value's ordered position. For hash tables, theoretically, you can have any data type be a key and any datatype be a value; certain languages do have constraints (e.g. Javascript's `object` prototype can only store strings and numbers as keys, whereas its `map` prototype can store any datatype as a key). Some languages have numerate their hash structures by default. The afforementioned `map` prototype in Javascript saves the order key/value pairs are saved into the structure. Python's `dictionary` does the same thing.

&ensp;

<h2 id='linkedLists'><b>Linked Lists</b></h2>

Linked list are composed of two-part nodes. The first part or element in a node is the value stored at the node. The second element of the node is a pointer, which directs you to the next node. Linked lists are null-terminated, which means the last value is `null`, which lets the function traversing it that it's at the end. The node before `null` is called the tail and the first node is called the head

### **Types**
- [Singly Linked](#singlyLinked)
- [Doubly Linked](#doublyLinked)

### **Time Complexities**

- *Insertion:* O(1)
- *Deletion:* O(1)
- *Traversal:* O(n)
- *Search:* O(n)
- *Sorting:* already sorted
- *Access:* O(n)


Because Javascript is my base language and it doesn't come out of the box with an object for linked lists, I've included a pretty good model below. Below that, I break down the functions that are critical to it working like it's supposed to.

### Critical Functions
- [Node Class](#nodeClass)
- [Linked List Constructor](#LLConstructor)
- [LinkedList.appendOne()](#LLAppendOne)
- [LinkedList.prependOne()](#LLPrependOne)
- [LinkedList.insertOne(index, value)](#LLInsertOne)
- [LinkedList.remove(index)](#LLRemove)

<h3 id='nodeClass'><b>Node Class</b></h3>

```js
class Node{
	constructor(value, next){
  	this.value = value
    this.next = next
  }
}
```

To learn about linked lists we first need to learn what nodes are. A node is a data point within a linked list comprised of two things, a value and a pointer. A value is pretty self-explanatory, it's the value stored within the node. The pointer is basically the address of the next node within the linked list. It tells the machine where in its memory bank to search for the next node, holding the next value; thus creating the links of our list. As a fan of object-oriented programming, I've created a class for our nodes so that we don't have to keep rewriting the same block of code every time we want to create a new node. For ease of use, it takes in two parameters, the value to be held within the node and the "address" of the next node. Linked lists  are  null-terminated, which means that the last node in our links list must have a pointer which points to a `null` value.

<h3 id='LLConstructor'><b>Linked List Constructor</b></h3>

```js
constructor(input) {
  if (arguments.length === 1) {
    const inputIsArray = Array.isArray(input)
    if (inputIsArray) {
      this._createNewList()
      if (input.length > 0) {
        this._fillList(input)
      }
    } else {
      throw new Error('Input Must Be An Array')
    }
  } else if (arguments.length === 0) {
    this._createNewList()
  } else {
    throw new Error('One Input Maximum')
  }
}
_createNewList() {
  this.head = null
  this.tail = null
  this.length = 0
}
_fillList(array) {
  this.head = new Node(array[0], null)
  this.tail = this.head
  this.length = 1
  if (array.length > 1) {
    let index = 1
    while (index < array.length) {
      this.appendOne(array[index])
      index++
    }
  }
}
```

 The constructor function  of our linked list will do different things depending on the input. This function is designed to handle one input in the form of an array. If no input is given, an empty linked list will be created where the head and tail are both null values and the length is zero. If more than one input is given or the input given is not an array an error will be thrown. If the correct input is given, a function will run that fills the list with the elements of the array in the order in which they appear (i.e. the first element will be the value stored at the head, the second element will be the value stored at the second node in the list, and so on).

<h3 id='LLAppendOne'><b>LinkedList.appendOne()</b></h3>

```js
appendOne(value) {
    const newNode = new Node(value, null)
    if (this.length > 0) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }
```

First, we create a new `Node` object with a value of our parameter and and a pointer directing us to null as this new node will become the tail of our linked list. We then set a conditional to determine whether or not the list is empty. If it is empty, we set this new node as the tail and the head of our list as there is only one node at this time. If it's not empty, we replace the null value that our current tail is pointing to with the new node we just created, as it will now be the second to last node. After that we will replace the tail with our new node. This doesn't delete the node that used to be the tail because remember, the node before it is still holding it's "address" as the value of it's `next` key/value pair. Lastly we increment the length of our list to preserve its accuracy.

<h3 id='LLPrependOne'><b>LinkedList.prependOne()</b></h3>

```js
prependOne(value) {
    const newNode = new Node(value, this.head)
    if (this.length === 0) {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }
```

Prepending is pretty similar. We first create a new `node` object, in which we store the value we want and a pointer to the object that used to be the head. Next, we set this new node pointing to the old head as the new head. Lastly, we increment the size to keep an accurate record. If the list is empty we also need to set our new head as the tail.

<h3 id='LLInsertOne'><b>LinkedList.insertOne(index, value)</b></h3>

```js
insertOne(index, value) {
  if (this._checkIndex(index, false)) {
    if (index === 0) {
      return this.prependOne(value)
    } else if (index < this.length) {
      let node = this._nodeAt(index - 1)
      const newNode = new Node(value, node.next)
      node.next = newNode
      this.length++
      return this
    }
    return this.appendOne(value)
  }
}
```

  to insert a node into our link to list we must provide the function with and the index at ways to insert said no and the value to be stored there. The first thing this function will do is  check that the index is in fact a natural number. Once the index is verified, if the index is zero we simply need to prepend the value. If the index points to the last note in our list or greater, we simply need to append the value. In all other cases, we iterate into our list until we reach the node before the given index and save that node to a variable. Once we have that node, We create a new note with the  value that was given to us as an argument which points To what the saved node used to point to. Now we make the saved node point to our new node, increment the length of our list, and c'est fin.

<h3 id='LLRemove'><b>LinkedList.remove(index)</b></h3>

```js
remove(index) {
  if (this._checkIndex(index, false)) {
    if (index === 0) {
      const newHead = this.head.next
      this.head = newHead
    } else {
      let node
      if (index >= this.length - 1) {
        index = this.length - 1
        node = this._nodeAt(index - 1)
        const newNext = node.next.next
        node.next = newNext
        this.tail = node
      } else {
        node = this._nodeAt(index - 1)
        const newNext = node.next.next
        node.next = newNext
      }
    }
    this.length--
    return this
  }
}
```

 To remove a node from our list, we call a function that intakes the index and which the node resides. We again check that the node is a natural number. Once the node is checked we can begin the process of removing the node.  if the index given is zero, we simply save the known that the head of our list points to as a variable. We then delete the head of our list. After that we assign the node that we saved to a variable as the new head of our linked list. If the index is greater than zero,  we simply create a variable called `node` and save the node before the given index to that variable. We then save  what the node at the given index points to to a variable called `newNext`. Finally, we make the node at our `node` variable point to our `newNext`. If the index given is pointing to the tail or greater, that simply adds a step to the beginning and end of our process. At the beginning of a process we now reassign our index to equal the length of our list minus one. At the end of our process we reassign the tail to equal our `node` variable.

<h3 id='singlyLinked'><b>Singly Linked List</b></h3>

```js
function isNaturalNumber(num) {
  const isInteger = Number.isInteger(num)
  const isNatural = num >= 0
  return isInteger && isNatural
}
class Node{
	constructor(value, next){
  	this.value = value
    this.next = next
  }
}
class LinkedList {
  constructor(input) {
    if (arguments.length === 1) {
      const inputIsArray = Array.isArray(input)
      if (inputIsArray) {
        this._createNewList()
        if (input.length > 0) {
          this._fillList(input)
        }
      } else {
        throw new Error('Input Must Be An Array')
      }
    } else if (arguments.length === 0) {
      this._createNewList()
    } else {
      throw new Error('One Input Maximum')
    }
  }
  _createNewList() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  _fillList(array) {
    this.head = new Node(array[0], null)
    this.tail = this.head
    this.length = 1
    if (array.length > 1) {
      let index = 1
      while (index < array.length) {
        this.appendOne(array[index])
        index++
      }
    }
  }
  _checkIndex(index, checkLength = true) {
    if (isNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      throw new Error('That Index Is Undefined')
    }
    throw new Error('Index Must Be A Natural Number (This Includes 0)')
  }
  checkIndex(index, checkLength = true) {
    if (isNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      return false
    }
    return false
  }
  _nodeAt(index) {
    let node = this.head
    let counter = 0
    while (counter < index) {
      node = node.next
      counter++
    }
    return node
  }
  appendOne(value) {
    const newNode = new Node(value, null)
    if (this.length > 0) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }
  appendMany(values) {
    for (let value of values) {
      this.appendOne(value)
    }
    this.length += values.length
    return this
  }
  prependOne(value) {
    const newNode = new Node(value, this.head)
    if (this.length === 0) {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }
  prependMany(values) {
    for (let i = values.length - 1; i > -1; i--) {
      this.prependOne(values[i])
    }
    this.length += values.length
    return this
  }
  insertOne(index, value) {
    if (this._checkIndex(index, false)) {
      if (index === 0) {
        return this.prependOne(value)
      } else if (index < this.length) {
        let node = this._nodeAt(index - 1)
        const newNode = new Node(value, node.next)
        node.next = newNode
        this.length++
        return this
      }
      return this.appendOne(value)
    }
  }
  insertMany(index, values) {
    if (Array.isArray(values)) {
      if (this._checkIndex(index, false)) {
        if (index === 0) {
          this.prependMany(values)
        } else if (index < this.length - 1) {
          const node = this._nodeAt(index - 1)
          values.push(node.next)
          const nodeCluster = new LinkedList(values)
          node.next = nodeCluster.head
          this.length += values.length
        } else {
          this.appendMany(values)
        }
        return this
      }
    } else {
      throw new Error(
        'Values must be in their desired order as elements in an array'
      )
    }
  }
  remove(index) {
    if (this._checkIndex(index, false)) {
      if (index === 0) {
        const newHead = this.head.next
        delete this.head
        this.head = newHead
      } else {
        index = index >= this.length ? this.length - 1 : index
        let node = this._nodeAt(index - 1)
        const newNext = node.next.next
        delete node.next
        node.next = newNext
      }
      this.length--
      return this
    }
  }
  changeValue(index, value) {
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      node.value = value
      return this
    }
  }
  valueAt(index) {
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      return node.value
    }
  }
  indexOf(value) {
    let node = this.head
    let counter = 0
    let index
    while (index === undefined || counter < this.length) {
      node.value === value && (index = counter)
      node = node.next
      counter++
    }
    if (index !== undefined) {
      return index
    }
    throw new Error('Value does not exist within list')
  }
  asArray() {
    let node = this.head
    let counter = 0
    const arr = [node.value]
    while (counter < this.length - 1) {
      node = node.next
      arr.push(node.value)
      counter++
    }
    return arr
  }
  hashed() {
    let node = this.head
    let counter = 0
    const hash = new Map()
    let value
    while (counter < this.length) {
      value = node.value
      if (hash.get(value)) {
        hash.set(value, hash.get(value) + 1)
      } else {
        hash.set(value, 1)
      }
      node = node.next
      counter++
    }
    return hash
  }
}
```

<h3 id='LLFinalNote'><b>Final Note</b></h3>

now that you understand what a linked list is and the basic functions necessary to make it work correctly, I encourage you to look over the rest of the clothes that creates the links list class that I've written. Try to come to your own understanding of the reasoning behind certain functions and their processes. If you want to take it a step further, re-write the functions in your own words. Good luck!
