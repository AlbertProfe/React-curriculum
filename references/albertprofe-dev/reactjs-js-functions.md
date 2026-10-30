---
source: https://albertprofe.dev/reactjs/reactjs-js-functions.html
title: "JavaScript: functions"
section: "JavaScript: web scripting"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "js"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-js-functions.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# JavaScript: functions

📘 **JavaScript Functions**

Functions are a way of packaging functionality that you wish to reuse.

It’s possible to define a body of code as a function that executes when you call the function name in your code. This is a good alternative to repeatedly writing the same code.

---

# 1 Overview

## 1.1 Where do I find functions?

**In JavaScript, you’ll find functions everywhere.**

In fact, we’ve been using functions all the way through the course so far; we’ve just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you’re not using a common built-in language structure like a `for loop`, `while` or `do...while loop`, or `if...else` statement, you are making use of a function.

## 1.2 Built-in browser functions

We’ve used functions built into the browser a lot in this course.

Every time we manipulated a text string, for example:

```
App.js
```

```jsx
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Or every time we manipulated an array:

```
App.js
```

```jsx
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Or every time we generate a random number:

```
App.js
```

```jsx
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself.

In fact, some of the code you are calling when you **invoke** (a fancy word for run, or execute) a built-in browser function couldn’t be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

## 1.3 Functions versus methods

**Functions** that are part of objects are called **methods**.

You don’t need to learn about the inner workings of structured JavaScript objects yet — you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own.

The built-in code we’ve made use of so far comes in both forms: functions and methods.

You can check the full list of the built-in functions, as well as the built-in objects and their corresponding methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

## 1.4 Invoking functions

You are probably clear on this by now, but just in case, to actually use a function after it has been defined, you’ve got to run — or **invoke** — it.

This is done by including the name of the function in the code somewhere, followed by parentheses.

```
App.js
```

```jsx
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

Note

This form of creating a function is also known as function declaration. It is always hoisted so that you can call the function above the function definition and it will work fine.

# 2 Reference

- [Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

Back to top
