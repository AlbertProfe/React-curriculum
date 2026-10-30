---
source: https://albertprofe.dev/reactjs/reactjs-js-variables.html
title: "JavaScript: variables"
section: "JavaScript: web scripting"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "js"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-js-variables.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# JavaScript: variables

📘 **JavaScript: variables**

Variables are **containers for storing data**, JavaScript Variables can be declared in 4 ways:

- Automatically
- Using `var`
- Using `let`
- Using `const`

---

Note

- The `var` keyword was used in all JavaScript code from 1995 to 2015.
- The `let` and `const` keywords were added to JavaScript in 2015.
- The `var` keyword should only be used in code written for older browsers.

# 1 `Var`

Before the advent of **[ES6](https://www.w3schools.com/react/react_es6.asp#:~:text=What%20is%20ES6%3F,also%20known%20as%20ECMAScript%202015.)**, `var` declarations ruled, `var` declarations are:

- **globally** scoped or
- function/**locally** scoped.

**What is ES6?** ES6 stands for **ECMAScript 6**: ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015

The scope is:

- **global** when a `var` variable is declared outside a function. This means that any variable that is declared with `var` outside a function block is **available for use in the whole window.**
- `var` is function **scoped** when it is declared within a function. This means that it is available and can be **accessed only within that function**.

```
App.js
```

```jsx
  var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
```

Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:

```
App.js
```

```jsx
    var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
```

We’ll get an error which is as a result of hello not being available outside the function.

It is considered good programming practice to always declare variables before use.

# 2 `Let`

`let` is now preferred for variable declaration. It’s no surprise as it comes as an improvement to var declarations. It also solves the problems with var.

`let` is block scoped

A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with `let` is only available for use within that block, `let` can be **updated but not re-declared.**

```
App.js
```

```jsx
  let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
```

We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped.

# 3 `const`

Variables declared with the `const` maintain constant values. `const` declarations share some similarities with let declarations.

Back to top
