---
source: https://albertprofe.dev/reactjs/reactjs-hook-state.html
title: "ReactJS: useState"
section: "ReacJS 18: Hooks"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "hooks", "useState"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-hook-state.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# ReactJS: useState

📘 **hookState**

`useState` is a React Hook that lets you add a state variable to your component.

`const [state, setState] = useState(initialState)`

The `useState` hook takes a single argument, which is the initial state for the state variable. In the example above, the initial state is `initialState`. The hook returns an array with two elements: the current state value and a function that can be used to update the state value.

---

[State: what-is-state-and-rendering-updaterender-cycle](https://albertprofe.dev/reactjs/reactjs-what-props.html#what-is-state-and-rendering-updaterender-cycle)

## 1 Introduction

`const [state, setState] = useState(initialState)`

[![useState hook provides you with functionality to set state for a variable and automatically update the DOM with the new state](https://albertprofe.dev/images/reactjs/usestate.jpeg)](https://albertprofe.dev/images/reactjs/usestate.jpeg "useState hook provides you with functionality to set state for a variable and automatically update the DOM with the new state")

`useState` hook provides you with functionality to set state for a variable and automatically update the DOM with the new state

- `initialState`: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.
- `useState` returns an array with exactly two values:
  1. `state`: The current `state`. During the first render, it will match the `initialState` you have passed.
  2. `setState`: The set function that lets you update the state to a different value and trigger a re-render.

## 2 Why hooks are so important

[![If you used classes in React before, this code should look familiar](https://albertprofe.dev/images/reactjs/usestate-class.png)](https://albertprofe.dev/images/reactjs/usestate-class.png "If you used classes in React before, this code should look familiar")

If you used classes in React before, this code should look familiar

`useState` is a hook in React that allows you to add state to **functional components**. Prior to the introduction of hooks, the only way to add state to a React component was to use a **`class` component**, [which required](https://reactjs.org/docs/hooks-state.html) you **to write more code and follow a different syntax.**

[![Hooks allow you to use state: modular, reusable and easy to mantain](https://albertprofe.dev/images/reactjs/usestate-function.png)](https://albertprofe.dev/images/reactjs/usestate-function.png "Hooks allow you to use state: modular, reusable and easy to mantain")

Hooks allow you to use state: modular, reusable and easy to mantain

> Hooks allow you to use state and other features in functional components, which can make your code more concise and easier to read. They also allow you to reuse stateful logic across your components, which can make your code more modular and easier to maintain.

## 3 Example 1

[In this example, rahter than changing a value directly,](https://freecontent.manning.com/managing-component-state-with-the-usestate-hook/) we call a updater function. Calling `useState` returns a value and a updater function.

[![The updater function changes the value and React updates the display with the recalculated UI from the component](https://albertprofe.dev/images/reactjs/managing-component-state_03.png)](https://albertprofe.dev/images/reactjs/managing-component-state_03.png "The updater function changes the value and React updates the display with the recalculated UI from the component")

The updater function changes the value and React updates the display with the recalculated UI from the component

[![The useState function returns an array with two elements: a value and an updater function](https://albertprofe.dev/images/reactjs/managing-component-state_04.png)](https://albertprofe.dev/images/reactjs/managing-component-state_04.png "The useState function returns an array with two elements: a value and an updater function")

The useState function returns an array with two elements: a value and an updater function

## 4 Example 2

[In this example](https://beta.reactjs.org/reference/react/useState#examples-basic), the `count` state variable holds a number. Clicking the `button` increments it.

```
App.js
```

```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}
```

[![Executing App.js, calling component Gallery, importing it and using it](https://albertprofe.dev/images/reactjs/ex16.png)](https://albertprofe.dev/images/reactjs/ex16.png "Executing App.js, calling component Gallery, importing it and using it")

Executing App.js, calling component Gallery, importing it and using it

[![Executing App.js, calling component Gallery, importing it and using it](https://albertprofe.dev/images/reactjs/ex17.png)](https://albertprofe.dev/images/reactjs/ex17.png "Executing App.js, calling component Gallery, importing it and using it")

Executing App.js, calling component Gallery, importing it and using it

## 5 Example 3

[In this example](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#what-happens-if-you-update-state-after-replacing-it), what about this event handler? What do you think **number will be in the next render**?

```
App.js
```

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

```
App.js
```

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
      }}>Increase the number</button>
    </>
  )
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex56.png)](https://albertprofe.dev/images/reactjs/ex56.png "Initial render")

Initial render

[![Next render](https://albertprofe.dev/images/reactjs/ex57.png)](https://albertprofe.dev/images/reactjs/ex57.png "Next render")

Next render

[![Next render](https://albertprofe.dev/images/reactjs/ex58.png)](https://albertprofe.dev/images/reactjs/ex58.png "Next render")

Next render

Here’s what this event handler tells React to do:

1. `setNumber(number + 5)`: number is 0, so `setNumber(0 + 5)`. React adds *replace with 5* to its **queue**.
2. `setNumber(n => n + 1): n => n + 1` is an **updater** function. React adds that function to its **queue**.

During the next render, **React goes through the state queue**:

[![React stores 6 as the final result and returns it from useState.](https://albertprofe.dev/images/reactjs/react-state-queue.png)](https://albertprofe.dev/images/reactjs/react-state-queue.png "React stores 6 as the final result and returns it from useState.")

React stores *6* as the final result and returns it from `useState`.

## 6 Example 4

[Let’s try one more example](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#what-happens-if-you-replace-state-after-updating-it). What do you think number will be in the next render?

```
App.js
```

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

[![Next render](https://albertprofe.dev/images/reactjs/ex59.png)](https://albertprofe.dev/images/reactjs/ex59.png "Next render")

Next render

[![React stores 42 as the final result and returns it from useState.](https://albertprofe.dev/images/reactjs/react-state-queue-2.png)](https://albertprofe.dev/images/reactjs/react-state-queue-2.png "React stores 42 as the final result and returns it from useState.")

React stores *42* as the final result and returns it from `useState`.

## 7 Updating arrays without mutation

### 7.1 Example 1

Updating arrays without mutation is important in React because it helps to ensure that the state of your application remains predictable and easy to debug. When you mutate an array in place, you change its original value, which can make it difficult to understand what has changed and why.

In React, it’s generally recommended to avoid mutating the state directly, and instead to create new copies of the state with the desired changes applied. This ensures that the original state is preserved, and makes it easier to understand how the state of your application is changing over time.

Here’s an example of how you might update an **array without mutation in Reac**t using the `map` function:

```
App.js
```

```jsx
const [items, setItems] = useState([1, 2, 3]);

const updateItem = index => {
  setItems(items.map((item, i) => (i === index ? item * 2 : item)));
};
```

Updating arrays **without mutation can help to ensure that the state of your code remains predictable and easy to understand**, which can make it easier to develop and maintain.

In this example, the updateItem function takes an index as an argument, and uses the map function to create a new array with the item at the specified index doubled. The setItems function is then called with the new array, which updates the state of the items array without mutating the original value.

### 7.2 Example 2

[Adding to array](https://beta.reactjs.org/learn/updating-arrays-in-state#adding-to-an-array) with `useState`:

> And instead of using `push()`, we will create a **new array which contains the existing items and a new item at the end**. There are multiple ways to do this, but the easiest one is to use the `...` array `spread` syntax:

```
App.js
```

```jsx
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
```

[![array using ... spread inital render](https://albertprofe.dev/images/reactjs/ex21.png)](https://albertprofe.dev/images/reactjs/ex21.png "array using ... spread inital render")

array using `... spread` inital render

[![array using ... spread new render](https://albertprofe.dev/images/reactjs/ex22.png)](https://albertprofe.dev/images/reactjs/ex22.png "array using ... spread new render")

array using `... spread` new render

The array `spread` syntax also lets you **prepend an item by placing it before the original** `...artists`:

```
App.js
```

```jsx
setArtists([
  { id: nextId++, name: name },
  ...artists // Put old items at the end
]);
```

In this way, `spread` can do the job of both `push()` by adding to the end of an array and `unshift()` by adding to the beginning of an array.

Back to top
