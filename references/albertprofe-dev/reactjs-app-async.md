---
source: https://albertprofe.dev/reactjs/reactjs-app-async.html
title: "React JS App: async"
section: "ReactJS: Designing an App"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "async"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-app-async.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS App: async

## 1 Overview

📘 **async**

`Async/await` is a syntax in JavaScript that makes it easier to work with `asynchronous code` and allows you to write it easier, read and understand, by making it look more like synchronous code.

`Asynchronous programming` is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.

Once that task has finished, your program is presented with the result.

---

Many functions provided by browsers, especially the most interesting ones, can potentially [take a long time](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing), and therefore, are `asynchronous`. For example:

- Making `HTTP` **requests** using [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- Accessing a **user’s camera or microphone** using [getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- Asking a user to **select files** using [showOpenFilePicker()](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker)

[![Async/await](https://albertprofe.dev/images/reactjs/async.png)](https://albertprofe.dev/images/reactjs/async.png "Async/await")

Async/await

## 2 Synchronous programming

Synchronous code is code that is executed in a “synchronous” manner, meaning that it is executed in the order that it appears in the source code. When a line of synchronous code is executed, the program will wait for it to complete before moving on to the next line of code.

```
App.sh
```

```bash
console.log('Start');

const result = doSomething();
console.log(result);

console.log('End');
```

In this example, the code will execute the `console.log('Start')` line first, then wait for the `doSomething()` function to complete and return a result, and then log the result to the console. Finally, it will execute the `console.log('End')` line.

`Synchronous` code is easy to understand and debug, because the order of execution is clear and **predictable**. However, it can be **less efficient than asynchronous code**, because **it can block the program from moving on to other tasks until the current task is complete**.

> `Synchronous` code may be is easy but **blocking**.

This is the basic problem with long-running synchronous functions. What we need is a way for our program to:

- Start a long-running operation by calling a function.
- Have that function start the operation and return immediately, so that our program can still be responsive to other events.
- Notify us with the result of the operation when it eventually completes.

That’s precisely what `asynchronous` functions can do.

Best with async/await but [promises must be studied](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)

## 3 Asynchronous programming

`Asynchronous` programming is a programming paradigm that enables the execution of tasks independently, without waiting for previous tasks to complete.

It allows programs to handle multiple operations **concurrently**, enhancing efficiency and responsiveness.

> In asynchronous programming, tasks are initiated and then executed in the **background**, allowing the program to continue its execution **without being blocked by long-running operations.**

Non-blocking

Non-blocking refers to the characteristic of a program or system that doesn’t halt or get stuck waiting for a resource or operation.

In the context of asynchronous programming, non-blocking refers:

- to the ability of a task or operation to **proceed independently** without blocking other tasks from executing.
- It ensures that tasks can **run concurrently without causing delays,** allowing for efficient utilization of system resources and improved overall performance.
- Non-blocking operations are often used **in conjunction with asynchronous programming** to achieve scalability and responsiveness in applications.

### 3.1 `async` function

The `async` and `await` keywords enable `asynchronous`, **promise-based behavior to be written in a cleaner style**, avoiding the need to explicitly configure **promise chains**.

> The [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#try_it) declaration declares an `async` function where the `await` keyword is used within the function body.

```
App.js
```

```jsx
async function greet() {
  return 'Hello, world!';
}

async function main() {
  const message = await greet();
  console.log(message);
}

main();
```

In this example, the `greet` function is an `async` function that returns a **promise** that resolves to the string “Hello, world!”. The main function is also an `async` function that calls the `greet` function and waits for the **promise** to resolve using the `await` keyword. When the **promise** resolves, the value is assigned to the message variable and logged to the console.

`Async` functions can contain zero or more `await` expressions. `Await` expressions make **promise-returning** functions behave as though they’re `synchronous` by suspending execution until the returned **promise** is fulfilled or rejected.

The resolved value of the **promise** is treated as the return value of the `await` expression. Use of `async` and `await` enables the use of ordinary `try / catch` blocks around `asynchronous` code.

```
App.js
```

```jsx
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

## 4 Example 1:marketplace

[You’re working on an art marketplace app](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#challenges) that lets the user submit multiple orders for an art item at the same time.

Each time the user presses the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.

```
App.js
```

```jsx
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex42.png)](https://albertprofe.dev/images/reactjs/ex42.png "Initial render")

Initial render

[![Next render and async working with timeout](https://albertprofe.dev/images/reactjs/ex43.png)](https://albertprofe.dev/images/reactjs/ex43.png "Next render and async working with timeout")

Next render and async working with `timeout`

[![3 Next render, timeout finished](https://albertprofe.dev/images/reactjs/ex44.png)](https://albertprofe.dev/images/reactjs/ex44.png "3 Next render, timeout finished")

3 Next render, `timeout` finished

Back to top
