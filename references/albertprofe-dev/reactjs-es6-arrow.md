---
source: https://albertprofe.dev/reactjs/reactjs-es6-arrow.html
title: "React JS ES6: arrow functions"
section: "ES6: ECMAScript 6"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "es6", "arrow"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-es6-arrow.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS ES6: arrow functions

## 1 Overview

📘 **Arrow function**

An arrow function is a type of **anonymous function expression in JavaScript**, with a syntax that is **shorter** and **more concise** than a regular function expression.

Arrow functions are also known as `fat arrow` functions, due to the use of the `fat arrow operator (=>)` to define the function.

---

Here is the basic syntax for defining an arrow function:

```
profile.js
```

```bash
(parameters) => { statements }
```

The parameters are the input values that are passed to the function, and the statements are the code that the function executes. For example, here is a simple arrow function that takes a single number parameter and returns the square of that number:

```
profile.js
```

```bash
const square = (x) => {
  return x * x;
};
```

If the function has only one parameter, you can omit the parentheses around the parameter:

```
profile.js
```

```bash
const square = x => {
  return x * x;
};
```

If the function has no parameters, you can use an empty pair of parentheses:

```
profile.js
```

```bash
const greet = () => {
  console.log('Hello, World!');
};
```

If the function consists of a single statement that returns a value, you can omit the curly braces and the “return” keyword:

```bash
const square = (x) => x * x;
```

Arrow functions are often used in modern JavaScript as a concise alternative to regular function expressions, especially when defining callback functions or working with higher-order functions.

Important

They do not have their own `this` value, and they cannot be used as constructors.

Back to top
