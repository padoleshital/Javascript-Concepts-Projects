# JavaScript

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

- Lexical Environment = Local memory + Reference to parent environment.
- Determined by **where a function is defined**, not called.
- JavaScript uses **Lexical Scope**, not dynamic scope.
- The first Lexical Environment is the global environment.

- **Example**

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
