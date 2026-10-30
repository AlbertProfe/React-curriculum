---
source: https://albertprofe.dev/reactjs/reactjs-app-events.html
title: "React JS App: events"
section: "ReactJS: Designing an App"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "events"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-app-events.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS App: events

## 1 Overview

📘 **events** React lets you add event handlers to your JSX.

[Event handlers](https://beta.reactjs.org/learn/responding-to-events) are your own functions that will be triggered in response to interactions **like clicking, hovering, focusing form inputs,** and so on.

---

## 2 Adding event handlers

You can make it show a message when a user clicks by following these three steps:

1. Declare a function called `handleClick` inside your `Button` component.
2. Implement the logic inside that function (use `alert` to show the message).
3. Add `onClick={handleClick}` to the `<button> JSX`.

Event handler functions are usually defined inside your components

```
app.jsx
```

```jsx
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

[![By convention, it is common to name event handlers as handle followed by the event name. You’ll often see onClick={handleClick}, onMouseEnter={handleMouseEnter}, and so on.](https://albertprofe.dev/images/reactjs/ex13.png)](https://albertprofe.dev/images/reactjs/ex13.png "By convention, it is common to name event handlers as handle followed by the event name. You’ll often see onClick={handleClick}, onMouseEnter={handleMouseEnter}, and so on.")

By convention, it is common to name event handlers as `handle` followed by the event name. You’ll often see `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`, and so on.

[![Alert](https://albertprofe.dev/images/reactjs/ex14.png)](https://albertprofe.dev/images/reactjs/ex14.png "Alert")

Alert

You defined the `handleClick` function and then passed it as a `prop` to `<button>`. `handleClick` is an **event handler**

Important

Functions passed to event handlers must be passed, not called. For example:

- **passing** a function (correct): `<button onClick={handleClick}>`
- **calling** a function (incorrect): `<button onClick={handleClick()}>`

The difference is subtle. In the first example, the `handleClick` function is passed as an `onClick` event handler. This tells React to remember it and only call your function when the user clicks the button.

In the second example, the `()` at the end of `handleClick()` **fires the function immediately during rendering**, without **any clicks**. This is because `JavaScript` inside the `JSX { and }` executes right away.

## 3 Passing event handlers as props

Often you’ll want the **parent component to specify a child’s event handler.** Consider buttons: depending on where you’re using a `Button` component, you might want to execute a different function—perhaps **one plays a movie and another uploads an image.**

To do this, pass a prop the component receives from its parent as the `event handler` like so:

```
index.js
```

```jsx
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
```

[![Executing index.js:](https://albertprofe.dev/images/reactjs/ex15.png)](https://albertprofe.dev/images/reactjs/ex15.png "Executing index.js:")

Executing index.js:

[![First, Toolbar component renders PlayButton and UploadButton components. Second, both of them call their functions and then, each one call Button to render the button](https://albertprofe.dev/images/reactjs/handler.png)](https://albertprofe.dev/images/reactjs/handler.png "First, Toolbar component renders PlayButton and UploadButton components. Second, both of them call their functions and then, each one call Button to render the button")

First, `Toolbar` component renders `PlayButton` and `UploadButton` components. Second, both of them call their functions and then, each one call `Button` to render the button

Here, the `Toolbar` component renders a `PlayButton` and an `UploadButton`:

- `PlayButton` passes `handlePlayClick` as the `onClick` prop to the `Button` inside.
- `UploadButton` passes`() => alert('Uploading!')` as the `onClick` prop to the `Button` inside.

Finally, your `Button` component accepts a prop called `onClick`. It passes that prop directly to the built-in browser `<button>` with `onClick={onClick}`. This tells React to call the passed function on click.

Back to top
