---
source: https://albertprofe.dev/reactjs/reactjs-hook-ref.html
title: "React JS: useRef"
section: "ReacJS 18: Hooks"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "hooks", "useRef"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-hook-ref.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS: useRef

📘 **hookRef**

`useRef` is a React Hook that lets you reference a value that’s not needed for rendering: allows you **to persist values between renders**.

`const ref = useRef(initialValue)`

---

## 1 `useRef(initialValue)`

Call `useRef` at the top level of your component **to declare a `ref`**.

```
App.js
```

```jsx
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...
```

It can be used to store a **mutable value that does not cause a re-render** when updated. It can be used to access a **DOM element directly.**

### 1.1 Parameters

- `initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render.

### 1.2 Returns

`useRef` returns an object with a single property:

- `current`: Initially, it’s set to the `initialValue` you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its `current` property.

## 2 Example 1

If you show `{ref.current}` in the JSX, **the number won’t update on click**. This is because setting ref.current does not trigger a re-render. Information that’s used for *rendering should be state instead.*

```
App.js
```

```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me!
      </button>
      // Do not write or read ref.current during rendering.
      // React expects that the body of your component
      // behaves like a pure function
      // We do now just for this example
      // If you need use: useState
      <p>You have pressed the button {ref.current} times</p>
    </> 
  );
}
```

[![inital render](https://albertprofe.dev/images/reactjs/ex23.png)](https://albertprofe.dev/images/reactjs/ex23.png "inital render")

inital render

[![Clicking button and no-renders](https://albertprofe.dev/images/reactjs/ex24.png)](https://albertprofe.dev/images/reactjs/ex24.png "Clicking button and no-renders")

Clicking button and no-renders

[Examples of manipulating the DOM with useRef](https://beta.reactjs.org/reference/react/useRef#examples-dom)

## 3 Example 2

The `useRef` Hook can also be used to keep track of previous state values.

This is because we are able to persist `useRef` values between renders.

```
App.js
```

```jsx
import { useState, useEffect, useRef } from "react";

export default function Counter() {
 const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
```

[![inital render](https://albertprofe.dev/images/reactjs/ex25.png)](https://albertprofe.dev/images/reactjs/ex25.png "inital render")

inital render

[![Input and not rendering when onChange={} gets the new inputs, but we see input by using useEffect](https://albertprofe.dev/images/reactjs/ex26.png)](https://albertprofe.dev/images/reactjs/ex26.png "Input and not rendering when onChange={} gets the new inputs, but we see input by using useEffect")

Input and not rendering when `onChange={}` gets the new inputs, but we see input by using `useEffect`

This time we use a combination of `useState`, `useEffect`, and `useRef` to keep track of the previous state.

In the `useEffect`, we are updating the `useRef` current value each time the `inputValue` **is updated by entering text into the input field.**

## 4 Example 3

- [Examples of referencing a value with useRef](https://react.dev/reference/react/useRef#examples-value)

This example uses a combination of `state` and `refs`.

Both `startTime` and now are state variables because they are used for **rendering**. But we also need to hold an **interval ID so that we can stop the [interval](https://www.w3schools.com/jsref/met_win_setinterval.asp) on button press**.

You may use `console.count('counter')` to count **how many times React renders.**

Since the **interval ID** is not used for rendering, it’s appropriate to keep it in a `ref`, and manually update it

```
Stopwatch.jsx
```

```jsx
import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
```

Back to top
