

| No. | Questions |
| --- | --------- |
| 1 | [Introduction to JavaScript](#Introduction-to-JavaScript) |
| 2 | [Execution Context](#Execution-context-in-javascript)|
| 3 | [Lexical Environment](#Lexical-Environment)|
| 4 | [Dynamic Scope And Lexical Scope](#Dynamic-Scope-And-Lexical-Scope)|
| 5 | [Coercion and Conversion ](#Coercion-Conversion)|
| 6 | [Primitive values](#Primitive-values)|
| 7 | [Non-Primitive Values](#Non-Primitive-Values)|
| 8 | [Concept of Call() apply() bind()](#Concept-of-Call-apply-bind)|
| 9 | [Context vs Scope](#Context-vs-Scope)|
| 10 | [Let Var Const](#let-var-const)|
|   |  [use strict](#use-strict)|
| 11 | [What is a prototype chain](#what-is-a-prototype-chain) |
| 12 | [What is the Difference Between `call`, `apply`, and `bind`](#what-is-the-difference-between-call-apply-and-bind) |
| 13 | [What is JSON and its common operations](#what-is-json-and-its-common-operations) |
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||


### Introduction to JavaScript

**JavaScript (JS)** is a **versatile, high-level**, general-purpose scripting language primarily used to create **interactive and dynamic content** on websites.
It is one of the three core technologies of web development, alongside **HTML** and **CSS**.

JavaScript is widely supported by all modern browsers and enables dynamic behavior on the client-side, such as updating the DOM, responding to user events, and handling form validations.

Developed by NetScape.

**Characteristics**

| Feature                | Description |
|------------------------|-------------|
| Interpreted Language   | Runs directly in the browser without prior compilation. |
| Dynamically Typed      | Data types are determined at runtime. |
| Event-driven           | Responds to events like clicks, keypresses, and form submissions. |
| Prototype-based OOP    | Uses prototypes instead of classical inheritance. |
| First-Class Functions  | Functions can be assigned to variables, passed as arguments, and returned. |
| Cross-platform         | Runs on any operating system with a modern browser. |


**[⬆ Back to Top](#table-of-contents)**

---
### Execution context in javascript

An **Execution Context** is the environment in which JavaScript code is executed.

It is Synchonous language

JavaScript is a single-threaded interpreted language. Every browser has its own JavaScript engine. Google Chrome has the V8 engine

When the JavaScript engine scans a script file, it makes an environment called the 
**Execution Context** that handles the entire transformation and execution of the code.
 
 **Types of Execution Context:**

- **Global Execution Context** (GEC) Created when your script first runs. Only one per program.
- **Function Execution Context:** (FEC)	Created every time a function is invoked.
- **Eval Execution Context:** (rarely used)	Created when eval() runs code.

    

    ### Phases of Execution Context (3 Phases):
    1. **Creation Phase**
    - Creates global object (`window` in browsers, `global` in Node.js).
    - Allocates memory for variables and functions.
    - Variables initialized to `undefined`.

    2. **Execution Phase**
    - Executes the code line-by-line.
    - Assigns values to variables and invokes functions.

    3. **Destruction Phase**
    - Memory is cleaned up after function execution.

###  Lexical Environment

Lexical Environment = Local memory + Reference to parent environment.

Determined by **where a function is defined**, not called.

JavaScript uses **Lexical Scope**, not dynamic scope.

The first Lexical Environment is the global environment.

**Example**

    ```js
    function printName() {
        return "Shital Padole";
    }

    function WriteName() {
        function a() {
            // inner lexical scope
        }
        return printName();
    }

    function sayName() {
        return WriteName();
    }

    sayName();

    ```
**[⬆ Back to Top](#table-of-contents)**

---

###  Dynamic Scope And Lexical Scope

In modern JavaScript (ES6+), prefer arrow functions when you want to preserve the context (this) of the outer function — they make code cleaner and easier to reason about.

 **Arrow function** has lexical scope which come in Es6 in above code we can create arrow function insted of calling another function. 

Just doing Arrow function we call reduce confusion before  Es6 we use bind method.

```js
const a = function()
{
  console.log('a',this);  //a window Object
  const b = function()
  {
    console.log('b',this); //b window Object
    const c = {
      hi: function()
      {
        console.log('c',this) //c {hi :f }
      }
    }
    c.hi()
  }
  b()
}
a()

//Before Es6
const obj = {
  name:'Billy',
  sing()
  {
    console.log(this);
    var anotherFunc = function()
    {
      console.log('b',this);
    }
    return anotherFunc.bind(this);
  }
}
console.log(obj.sing()) 

// { name: 'Billy', sing: [Function: sing] }
// [Function: bound anotherFunc]

console.log(obj.sing()())

 a { name: 'Billy', sing: [Function: sing] }
b { name: 'Billy', sing: [Function: sing] }
undefined 
```

**[⬆ Back to Top](#table-of-contents)**

---

### Scope Chain
The scope chain in JavaScript is a mechanism that defines how variable names are resolved in nested functions. When a variable is used, JavaScript looks for it in the current scope and, if not found, continues to search in outer (parent) scopes, forming a chain.

The scope chain is the series of variable environments (or lexical environments) JavaScript checks when trying to resolve a variable name.

```js
function sayMyName()
{
  let a= 'a';
  return function findName()
  {
    let b ='b';
    return  function printName()
    {
      let c ='c';
      
      return function writeName()
      {
        let d = 'd';
        console.log(a);
        return 'Shital Padole';
      }
    }
  }
}
sayMyName()()()()
```
**[⬆ Back to Top](#table-of-contents)**

---

## Context vs Scope
In programming, scope and context are distinct concepts related to how variables and functions are accessed, but they serve different purposes. Scope defines the accessibility of variables within different parts of your code, while context determines the value of the this keyword within a function. 

**Scope**

Scope determines where variables are visible and accessible in your code. 
It dictates whether a variable can be accessed from a specific function or block of code. 
JavaScript has different types of scope: global, function, and block scope. 
The scope of a variable is determined by where it is declared (e.g., inside a function or block). 

**Context**

Context, in JavaScript, is represented by the this keyword.
It refers to the object to which a function is bound or the object in which the function is executed.
The value of this can change depending on how the function is called (e.g., as a method of an object, as a standalone function, or with call, apply, or bind).
Understanding context is crucial for understanding how functions interact with objects and their properties. 


**[⬆ Back to Top](#table-of-contents)**

---


### JavaScript Fundamentals
---
### Coercion and Type Conversion
Type coercion is the process of converting one type of value into another. There are 3 types of conversion in JavaScript.
• to stringx
• to boolean
• to number

==  - loose equality compares two values without  Variable type
=== - strict equality (triple equals)
loose equality ==, not ===
In JavaScript, type conversion and type coercion both involve changing a value from one data type to another, but they differ in how this conversion is initiated.

```js

//String coercion
typeof " " ==="string"; // true
typeof 1 === "number"; // true
typeof true === "boolean";  // true

typeof 'bla' === 'string'; // true
typeof `template literal` === String; // false
typeof `template literal` === "string"; // false

typeof "1" === "string"; // true
typeof typeof"1" === "string";  // true
typeof String(1) === "string"; // true
typeof String(1) === typeof "1"; // true

//typeof 1 === typeof "1"; // false
//typeof 1 === typeof String(1); // true
//typeof 1 === typeof Number(1); // true


// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number
typeof 42n === "bigint";

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or
falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()
// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";
// Objects
typeof { a: 1 } === "object";
// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";
typeof new Date() === "object";
typeof /regex/ === "object"; // See Regular expressions section for historical results
// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";
// Functions
typeof function() {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";

//Common gotches with Coercion
false == 0         // true
"" == 0            // true
null == undefined  // true
[] == false        // true
[] == ![]          // true 😵‍💫

//Falsey  or truthy values
if ("")        // false (empty string is falsy)
if ("hello")   // true  (non-empty string is truthy)
if (0)         // false (0 is falsy)
if (123)       // true  (non-zero number is truthy)
```

**[⬆ Back to Top](#table-of-contents)**

---
## Var
- Function-scoped or globally scoped.
- Can be redeclared and reassigned.
- Gets hoisted and initialized as undefined.

```js
var x = 10;
var y;

function foo() {
    var y = 20;
}
foo();

console.log(x); // 10
console.log(y); // undefined


function two()
{
    var isValid;
    console.log(isValid);
}

function one()
{
    var isValid = true;
    two();
    console.log(isValid);
}

var isValid = false;
one();

//Execution context
//two - isValid - undefined
//one() --isValid=true


function loop()
{
  for(var i = 0 ; i<5;i++)
  {
    console.log(i) //1 2 3 4
  }
  console.log('final',i);  //final 5
}
loop();


```
## let
- Block-scoped.
- Can be reassigned but not redeclared within the same scope.
- Hoisted but not initialized (Temporal Dead Zone).

let b = 3;

function demo() {
    let b = 9;
    console.log(b); // 9
}

demo();

b = 5;
console.log(b); // 5

```js
function loop()
{
  for(let i = 0 ; i<5;i++)
  {
    console.log(i) //1 2 3 4
  }
  console.log('final',i); // i isnot define
}
loop();


```

## const
- Block-scoped.
- Cannot be reassigned after declaration.
- Objects and arrays declared with const can still be mutated.
```js
const user = { name: "Shital" };
user.name = "Padole"; // ✅ Allowed

// const user = 10;
// user = 20; ❌ Error
```
### Primitive values 

**Primitive** - Primitive values are defined by being immutable, they cannot be altered. The variable assigned to a primitive type may be reassigned to a new value, but the original
value can not be changed in the same way objects can be modified. 
Primitives are **passed by value**, meaning their values are copied and then placed somewhere else in the memory. 
They are also compared by value. There are currently 7 primitive data types in JavaScript.

- string
- number
- bigint
- boolean
- null
- undefined
- symbol

### Non-Primitive Values
**Non Primitive** - The only type that leaves us with is objects. Objects are able to be mutated and their properties are **passed by reference**, meaning their properties are not stored separately in memory. 

A new variable pointing to an object will not create a copy, but reference the original objects location in memory. Therefore, changing the 2nd object will also change the first.
**Example**
- Object
- Function

**[⬆ Back to Top](#table-of-contents)**

### Pass by Value 

Variables in JavaScript can either be passed by value or passed by reference,depending on the type of data they hold.

both really know value of each other.

It copy value of variable and put it into new new memory.

```js

//Call by Value for variable
var a = 5;
var b = a;
b++;
console.log(a); //5
console.log(b); //6

```

### Pass By Refrence 

**Pass By refrence** applies to objects (including arrays and functions)

When an object or array is passed as an argument to a function, what is actually 

passed is a reference to that object or array in memory.

function receives a copy of the memory address where the original object or array resides.

Object.assign() or use the spread operator {...}

```js
// objects are passed by reference 
let obj = {    //non primitive data type object
name:"shital",
age: 30,
};
let newObj = obj; // points to same place in memory as obj
newObj.name = "newObj"; // modifies the memory

// Since both point to the same place...
console.log(obj); // {name: newObj}
console.log(newObj); // {name: newObj}
// They are both modified.
let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [1, 2, 3, 4]
```
**[⬆ Back to Top](#table-of-contents)**

---

## Use Strict

As height is not declared in varibale, their is chance of memory likage to over come this handling error javascript use **use Strict**

"use strict" is a directive introduced in ES5 (ECMAScript 5) that enforces stricter parsing and error handling in your JavaScript code. 

It helps you write cleaner, safer, and more predictable code.

It is use to Prevents accidental global variable creation.

Makes debugging easier by giving early warnings

```js
'use strict'

function wired()
{
  var height = 50;
  return height; 
}
wired()
```
```js

"use strict"
var demo = function doodle() {
 
  return 'demo'
}
demo();
doodle(); //ReferenceError: doodle is not defined
    
```

**[⬆ Back to Top](#table-of-contents)**

---

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 

Remember that JavaScript only hoists declarations, not initialisation.

JavaScript moves declarations (not initializations) to the top of their scope during compilation.

var variables are hoisted and initialized as undefined.

let and const are hoisted but not initialized → accessing them before declaration throws ReferenceError.

```js
var favoriteFood = "grapes";

var foodThoughts = function () {
    console.log("Original favorite food: " + favoriteFood); // undefined
    var favoriteFood = "sushi";
    console.log("New favorite food: " + favoriteFood); // sushi
};

foodThoughts();

```
Function declarations are also hoisted:
Avoid using var to reduce hoisting confusion. Prefer let and const.


```js

a(); // Outputs: "bye"


function a() {
    console.log("hi");
}

function a() {
    console.log("bye");
}

```


###  Concept of Call(), apply(), bind()

  In JavaScript, `call`, `apply`, and `bind` are methods on Function prototype.
  
  That allow you to control the context (`this` value) in which a function is executed. While their purposes are similar, they differ in how they handle arguments and when the function is invoked.

  ---

  #### `call`

  - **Description:**  
    The `call()` method invokes a function immediately, allowing you to specify the value of `this` and pass arguments individually (comma-separated).

  - **Syntax:**  
    ```js
    func.call(thisArg, arg1, arg2, ...)
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
    invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `apply`

  - **Description:**  
    The `apply()` method is similar to `call()`, but it takes the function arguments as an array (or array-like object) instead of individual arguments.

  - **Syntax:**  
    ```js
    func.apply(thisArg, [argsArray])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
    invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `bind`

  - **Description:**  
    The `bind()` method creates a new function with a specific `this` value and, optionally, preset initial arguments. Unlike `call` and `apply`, `bind` does **not** immediately invoke the function; instead, it returns a new function that you can call later.

  - **Syntax:**  
    ```js
    var boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);

    inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
    inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### Summary

  | Method | Invokes Function Immediately? | How Arguments Are Passed         | Returns      |
  |--------|-------------------------------|----------------------------------|--------------|
  | `call` | Yes                           | Comma-separated list             | Function's result |
  | `apply`| Yes                           | Array or array-like object       | Function's result |
  | `bind` | No                            | (Optional) preset, then rest     | New function      |

  ## Key Points

  - **`call`** and **`apply`** are almost interchangeable; both invoke the function immediately, but differ in how arguments are passed.
      - _Tip:_ "Call is for Comma-separated, Apply is for Array."
  - **`bind`** does not execute the function immediately. Instead, it creates a new function with the specified `this` value and optional arguments, which can be called later.

  - Use `call` or `apply` when you want to immediately invoke a function with a specific `this` context. Use `bind` when you want to create a new function with a specific `this` context to be invoked later.
  


**[⬆ Back to Top](#table-of-contents)**


###  Shallow Copy  

**Shallow copy**: Shallow copy is a bit-wise copy of an object.

A new object is created that has an exact copy of the values in the original object. 

If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

```js
const originalObj = {
nested: {
nestedKey: "nestedValue"
},
key: "value"
};
// originalObj points to location 1 in memory
const assignObj = originalObj;
// assignObj will point to 1 in memory
const shallowObj = { ...originalObj };
// shallowObj points to a new location 2, but references location 1 for the nested
object
const deepObj = JSON.parse(JSON.stringify(originalObj));
// deepObj clones all parts of the object to a new memory address


// const originalObj = {
// nested: {
// nestedKey: "nestedValue"
// },
// key: "value"
// };
// const assignObj = originalObj;
// const shallowObj = { ...originalObj };
// const deepObj = JSON.parse(JSON.stringify(originalObj));
// console.log("originalObj: ", originalObj);
// console.log("assignObj: ", assignObj);
// console.log("shallowObj: ", shallowObj);
// console.log("deepObj: ", deepObj);
/*
originalObj: {nested: {
nestedKey: "changed value"
},
key: "changed value"}
assignObj: {nested: {
nestedKey: "changed value"
},
key: "changed value"}
shallowObj: {nested: {
nestedKey: "changed value"
},
key: "value"}
deepObj: {nested: {
nestedKey: "nestedValue"
},
key: "value"}
*/
```

### Deep Copy

**Deep copy** A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields.

A deep copy occurs when an object is copied along with the objects.

```js

let obj ={a:'b',b:'b', d:{deep:'Inside deep cloning'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}   //make copy of object this is also called shallow copy

obj.c = 5;
let deepCopy = JSON.parse(JSON.stringify(obj))

// var =
 obj.d.deep = 'hahaha';
console.log(obj) //{ a: 'b', b: 'b', d: { deep: 'hahaha' }, c: 5 }
//Shallow copy will also change the value of obj.d.deep
console.log(clone) //{ a: 'b', b: 'b', d: { deep: 'hahaha' } }
// console.log(clone)
console.log(clone2,'Shallowcopy')
console.log(deepCopy,'deepCopy') 
```

**[⬆ Back to Top](#table-of-contents)**

###  Es6+-  We use Arrow function
Using Arrow Function we can Inherits from outer scope this way we can solve issue.

```js
const obj = {
  name:'Billy',
  sing()
  {
    console.log(this);
    var anotherFunc = () =>
    {
      console.log('b',this);
    }
    anotherFunc();
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### This keyword

The this keyword in JavaScript refers to the object that is currently executing or calling the function.

**Global Context**

When this is used in the global scope (outside of any function), it refers to the global object (e.g., window in browsers, global in Node.js).

1: Give methods access to their object

```js
const obj = {
name:"Shital",
sing: function() {
    return "lalala Billy " + this.name;
},
singAgain()
{
return this.sing() + '!'; 
}
}

console.log(obj.singAgain()) //lalala Billy Shital!
```
2: execute same code for multiple objects
    
```js
function importantPerson()
{
console.log(this.name)
}

const name = 'Sunny';
const obj1 ={
name :'Cassy',
importantPerson: importantPerson
}

const obj2 ={
name :'Jacob',
importantPerson: importantPerson
}
console.log(name); //Sunny
console.log(obj1.importantPerson()); //Cassy

```


3: Lexically scope Program
```js
var b = {
  name : 'jay',
  say() {console.log(this)}
}

var c ={
  name:'jay',
  say() { return function() {console.log(this)}}
}

var d = {
  name :'jay',
  say() { return () => console.log(this)} //this keyword is lexically scope
}

b.say(); //{ name: 'jay', say: [Function: say] }
c.say()(); //It will Show an error [Function]
console.log(d.say()()); //{ name: 'jay', say: [Function: say] }
```

**[⬆ Back to Top](#table-of-contents)**

---


## Functions
- Functions are blocks of reusable code.
- Can be defined as declarations, expressions, or arrow functions.

 ### Function Expression
  - Not hoisted
  - Can be anonymous or named.
    ```js
    let canda = function () {
    console.log('canda');
    };

   
    ```

### Arrow Functions

  ```js
   function canda1 = () => {
    console.log("canda")
    }
  ```

###  Immediately Invoked Function Expression (IIFE)
- Executes immediately after definition.
- Used to create private scope.


```js
(function() {
  console.log("IIFE runs immediately");
})();
```

- with arrow function
```js
(() => {
  console.log("Arrow IIFE");
})();
```

### Parameteried Function



#### Arguments: 
- These are the actual values provided when you call the function. 
- They correspond to the parameters in the order they are listed.
- Arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

```js
 function marry(person1, person2)
 {
  return `${person1} is now married to ${person2}` {0:'Tin',1:'Min'}
 }

 console.log(marry('Tin','Min')); //Tin is now married to Min

 ```

#### Rest Parameter:
- The rest parameter syntax (...parameterName) allows a function to accept an indefinite number of arguments as an array. 
- This provides a more modern and flexible way to handle variable arguments compared to the arguments object.
 
 ```js
 function marry2(...args) { 
  
  return `${args[0]} is now married to ${args[1]}`
  
 }

 console.log(marry2('Tim','Tina'));
 
 ```
