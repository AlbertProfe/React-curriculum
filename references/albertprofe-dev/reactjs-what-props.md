---
source: https://albertprofe.dev/reactjs/reactjs-what-props.html
title: "React JS: props and state"
section: "ReactJS: Principles"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "props"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-what-props.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS: props and state

📘 **Props**

**React components** use **props** (`props` stands for **properties**) to communicate with each other.

Every parent component **can pass some information to its child components by giving them props**.

Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

[![Props are properties passed to a child component that can hold many data types (e.g. array, object, number, function, others).](https://albertprofe.dev/images/reactjs/react_props.png)](https://albertprofe.dev/images/reactjs/react_props.png "Props are properties passed to a child component that can hold many data types (e.g. array, object, number, function, others).")

Props are properties passed to a child component that can hold many data types (e.g. array, object, number, function, others).

In `React JS`, data flows in one direction, **from Parent to Child**. This helps components to be **simple and predictable**.

> “Simplicity is the ultimate sophistication.” -Leonardo da Vinci

## 1 Overview

In React.js, “`props`” (**short for “properties”**) are used **to pass data from one component to another**. Props are passed as an object (which is similar to a JSON object) and contain key-value pairs of data:

- `JSON` is a lightweight data interchange format that is easy to read and write for both humans and machines.
- `props` is a reserved keyword that refers to an object containing all the properties (or props) passed to a component.

For example, let’s say we have a component called **MyComponent** that receives an object named `person` as a `prop`. This `person` `object` might look like this:

```js
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};
```

In this case, the `person` `object` contains some key-value pairs and another object. We can then pass this `person` `object` as a prop to our **MyComponent** component like this:

```js
<MyComponent person={person} />
```

Inside **MyComponent**, we can access the `person` `prop` using the props object like this:

```js
function MyComponent(props) {
  console.log(props.person.name); // 'John'
  console.log(props.person.age); // 30
  console.log(props.person.address.street); // '123 Main St'
  // ...
}
```

### 1.1 Example1

```js
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  color: 'blue'
};

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

<MyComponent person={person} car={car} />

function MyComponent(props) {
  console.log(props.person.name); // 'John'
  console.log(props.person.age); // 30
  console.log(props.person.address.street); // '123 Main St'

  console.log(props.car.make); // 'Toyota'
  console.log(props.car.model); // 'Corolla'
  console.log(props.car.year); // 2022
  console.log(props.car.color); // 'blue'
  // ...
}
```

### 1.2 Example2

Use the same syntax as HTML attributes to send props into a component:

```
profile.jsx
```

```js
function Avatar({ person, size }) {
  // person and size are available here
}
```

```
lin.jsx
```

```js
export default function Lin() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

```
carla.jsx
```

```js
export default function Carla() {
  return (
    <Avatar
      person={{ name: 'Carla Lan', imageId: 'KIU3QH1' }}
      size={60}
    />
  );
}
```

## 2 Pure Components

### 2.1 Stateful/Stateless Components

> Sateful Components: Functions that internally modify the underlying data (props).

```
profile.jsx
```

```jsx
function Hello({ name }) {
  //...
  return (
    <>
     <h1>Hello {name + ' - ' + (new Date()).toLocaleString()}!!!</h1>;
    </>
  )
}

export default function Hello() {
  //...
  return (
   <Hello name="World" />
  )
}
```

> Stateless Components: `Pure components` that respond to the underlying data received (`props`), without modifying it.

A `pure function` is a function where the return value is only determined by its input values, without observable side effects.

```
Hello.jsx
```

```jsx
function Hello({ name }) {
  //...
  return (
    <>
     <h1>Hello {name}!!!</h1>;
    </>
  )
}

export default function Hello() {
  //...
  return (
   <Hello name="World" />
  )
}
```

### 2.2 Keep Components Pure

Important

Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm

By strictly only [writing](https://react.dev/learn/keeping-components-pure) your components as `pure functions`, **you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows**. To get these benefits, though, there are a few rules you must follow.

- Rendering can happen at any time, so components **should not depend on** each others’ rendering sequence.
- You **should not mutate any of the inputs that your components use for rendering**. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
- Strive **to express your component’s logic in the JSX you return**. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.

**React’s rendering process must always be pure.** Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

Here is a component **that breaks this rule**:

```
Hello.jsx
```

```jsx
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

[![render](https://albertprofe.dev/images/reactjs/ex60.png)](https://albertprofe.dev/images/reactjs/ex60.png "render")

render

[Detecting impure calculations with StrictMode](https://react.dev/learn/keeping-components-pure#detecting-impure-calculations-with-strict-mode)

Rendering must always be a pure calculation

- Same inputs, same output.
- It minds its own business.

Otherwise, you can encounter **confusing bugs and unpredictable behavior as your codebase grows in complexity**.

When developing in `Strict Mode`, **React calls each component’s function twice**, which can help surface mistakes caused by impure functions.

## 3 What is state and rendering: update/render cycle

[![React render cycle: trigger-render-paint by @_georgemoller](https://albertprofe.dev/images/reactjs/react-cycle.PNG)](https://albertprofe.dev/images/reactjs/react-cycle.PNG "React render cycle: trigger-render-paint by @_georgemoller")

React render cycle: trigger-render-paint by @\_georgemoller

[State variables](https://beta.reactjs.org/learn/state-as-a-snapshot#setting-state-triggers-renders) might look like regular JavaScript variables that you can read and write to.

> **However, state behaves more like a snapshot**.

Setting it **does not change** the state variable you already have, [but instead triggers a re-render](https://beta.reactjs.org/learn/render-and-commit#step-1-trigger-a-render) that will print a state variable copy with the new value.

Important

State can hold any kind of JavaScript value, including objects.

But you shouldn’t change objects that you hold in the React state directly.

Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

[How it works in combination with spread opearator](https://albertprofe.dev/reactjs/reactjs-es6-spread.html#copying-objects-with-the-spread-syntax)  
[And what is a hook: useState](https://albertprofe.dev/reactjs/reactjs-hook-state.html)

> **Treat state as read-only**: in other words, you should treat any JavaScript object that you put into state as read-only.

```
App.js
```

```jsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => {
        setNumber(number++);
      }}>+1</button>

      <h1>{number}</h1>
    </>
  )
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex53.png)](https://albertprofe.dev/images/reactjs/ex53.png "Initial render")

Initial render

[![Next render: setting-update/render cycle](https://albertprofe.dev/images/reactjs/ex54.png)](https://albertprofe.dev/images/reactjs/ex54.png "Next render: setting-update/render cycle")

Next render: setting-update/render cycle

[![Next render](https://albertprofe.dev/images/reactjs/ex55.png)](https://albertprofe.dev/images/reactjs/ex55.png "Next render")

Next render

### 3.1 update/render behaviour

Any screen update in a React app happens **in three steps:**

1. Trigger
2. Render
3. Paint-Commit

You can use `Strict Mode` to find mistakes in your components React does not touch the DOM if the rendering result is the same as last time

[After](https://react.dev/learn/render-and-commit#step-3-react-commits-changes-to-the-dom) rendering (calling) your components, React will modify the `DOM`.

> **React only changes the DOM nodes if there’s a difference between renders**.

For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the `<input>`, updating its value, but **the text doesn’t disappear** when the component re-renders:

```js
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
```

[![render](https://albertprofe.dev/images/reactjs/ex61.png)](https://albertprofe.dev/images/reactjs/ex61.png "render")

render

## 4 So, Is React immutable?

The term **immutable** refers **to the idea that the state of a component should not be changed directly.** Instead, when the state of a component needs to be updated, a new copy of the state should be created with the desired changes applied.

This approach to state management can help to ensure that the state of a React application is predictable and easy to understand, as it makes it clear how the state is changing over time.

It can also make it easier to debug issues in your application, as you can more easily trace the history of the state and see how it has changed.

### 4.1 And then, what is a mutation?

You can store any kind of JavaScript value in state.

```
Hello.jsx
```

```jsx
const [x, setX] = useState(0);
```

So far you’ve been working with numbers, strings, and booleans. These kinds of JavaScript values are *immutable*, meaning unchangeable or *read-only*. **You can trigger a re-render to replace a value:**

```
Hello.jsx
```

```jsx
setX(5);
```

The `x` *state changed from 0 to 5*, but the number `0` itself did not change. It’s not possible to make **any changes to the built-in primitive values** like numbers, strings, and booleans in JavaScript.

Now consider an object in state:

```
Hello.jsx
```

```jsx
const [position, setPosition] = useState({ x: 0, y: 0 });
```

Technically, it is possible to change the contents of the object itself. This is called a **mutation**:

```
Hello.jsx
```

```jsx
position.x = 5;
```

However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always **replace** them.

## 5 Examples

### 5.1 Example 1: setting state only changes it for the next render

[In this example](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#react-batches-state-updates), you might expect that clicking the `+3` button would increment the counter three times because it calls `setNumber(number + 1)` three times.

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
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex36.png)](https://albertprofe.dev/images/reactjs/ex36.png "Initial render")

Initial render

[![Next render](https://albertprofe.dev/images/reactjs/ex37.png)](https://albertprofe.dev/images/reactjs/ex37.png "Next render")

Next render

[![3 Next render](https://albertprofe.dev/images/reactjs/ex38.png)](https://albertprofe.dev/images/reactjs/ex38.png "3 Next render")

3 Next render

Number is a state variable, not a regular variable

**Setting state only changes it for the next render**. During the first render, `number` was `0`.

And this is like this because number is … **a state.**

So, during execution lines #10, #11 and #12, **`number` value is …0!**

[This is why](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates#react-batches-state-updates), in that render’s `onClick handler`, the value of `number` is still `0` even after `setNumber(number + 1)` was called .. **three times!!!**

### 5.2 Example 2: State over time

[State over time](https://beta.reactjs.org/learn/state-as-a-snapshot#state-over-time), step by step how setting and render do not happen at same moment.

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
        alert(number);
      }}>+5</button>
    </>
  )
}
```

[![Initial render, number state is 0](https://albertprofe.dev/images/reactjs/ex39.png)](https://albertprofe.dev/images/reactjs/ex39.png "Initial render, number state is 0")

Initial render, `number` state is 0

[![setting number state to 5, but first React will execute line #11, alert, and number state still is 0](https://albertprofe.dev/images/reactjs/ex40.png)](https://albertprofe.dev/images/reactjs/ex40.png "setting number state to 5, but first React will execute line #11, alert, and number state still is 0")

setting `number` state to 5, but first React will execute line #11, alert, and `number` state **still** is 0

[![Next render, number state now is now 5](https://albertprofe.dev/images/reactjs/ex41.png)](https://albertprofe.dev/images/reactjs/ex41.png "Next render, number state now is now 5")

Next render, `number` state now is now 5

> Alert is helping us to understand why **setting and render are two different moments**

Setting `number` state to 5, but first React will execute line #11, alert, and `number` state **still** is 0

### 5.3 Example 3: email

Here is an example of **how that makes your event handlers less prone to timing mistakes**. Below is a form that sends a message with a **five-second delay**. Imagine this scenario:

1. You press the `Send` button, sending *Hello* to **Alice**.
2. Before the **five-second delay ends**, you change the value of the `To` field to **Bob**.

```
App.js
```

```jsx
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex47.png)](https://albertprofe.dev/images/reactjs/ex47.png "Initial render")

Initial render

[![Next render](https://albertprofe.dev/images/reactjs/ex48.png)](https://albertprofe.dev/images/reactjs/ex48.png "Next render")

Next render

React keeps the state values *fixed* within **one render’s event handlers**.

You don’t need to worry whether the state has changed while the code is running.

### 5.4 Example 4: state updater function

It is an uncommon use case, but if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like `setNumber(number + 1)`, you can pass a function that calculates the next state based on the previous one in the queue, like `setNumber(n => n + 1)`.

It is a way to tell React to **do something with the state value instead of just replacing it.**

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
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex49.png)](https://albertprofe.dev/images/reactjs/ex49.png "Initial render")

Initial render

[![Next render](https://albertprofe.dev/images/reactjs/ex50.png)](https://albertprofe.dev/images/reactjs/ex50.png "Next render")

Next render

Back to top
