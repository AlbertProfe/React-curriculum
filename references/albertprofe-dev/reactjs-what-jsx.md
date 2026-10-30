---
source: https://albertprofe.dev/reactjs/reactjs-what-jsx.html
title: "React JS: JSX"
section: "ReactJS: Principles"
published: "Tuesday, June 1, 2021"
modified: "Tuesday, November 4, 2025"
categories: ["reactjs", "jsx", "render"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-what-jsx.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS: JSX

## 1 Overview

📘 **JSX** JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

---

## 2 The problem

[JSX: Putting markup into JavaScript](https://beta.reactjs.org/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript)

The Web has been built on `HTML`, `CSS`, and `JavaScript`. For many years, web developers kept content in `HTML`, design in `CSS`, and logic in `JavaScript`—often in separate files!

Content was marked up inside HTML while the page’s logic lived separately in JavaScript.

> So, we need a way to put things together.

## 3 The solution: React JSX

```
todolist.jsx
```

```jsx
export default function TodoList() {
  //
  // business logic and objects: JavaScript
  //
  return (
    //
    // Render: html + css
    //
  )
}
```

[![JSX: Putting markup into JavaScript](https://albertprofe.dev/images/reactjs/html-js-react.png)](https://albertprofe.dev/images/reactjs/html-js-react.png "JSX: Putting markup into JavaScript")

JSX: Putting markup into JavaScript

[![React is JSX](https://albertprofe.dev/images/reactjs/react-is-jsx.png)](https://albertprofe.dev/images/reactjs/react-is-jsx.png "React is JSX")

React is JSX

`React`’s effectiveness largely comes from how it combines `HTML` (through `JSX`) with JavaScript logic in a clear and modular way, as seen in our image above.

### 3.1 Why Combining HTML and JS Matters

> React allows developers to write both **the business logic and the user interface definition inside the same file** using JSX.

This makes components **self-contained** and easier to maintain, since all the necessary code (data, logic, and rendering instructions) is in one place. The image shows how the data (the avatar URL and description) is defined as JavaScript variables and directly injected into the HTML via `JSX` syntax.

This reduces errors and keeps everything organized.

### 3.2 Enhanced Readability and Structure

> The color-coded boxes in our above image illustrate the **clear separation of concerns**: `JavaScript` for data and logic (green), `HTML/JSX` for layout (orange), and direct data injection (blue).

Such organization means developers can instantly see what components need to display, how they get their data, and how everything is connected. This unified approach is less error-prone than separating `HTML` and `JS` in different files, as was common in many older frameworks.

### 3.3 Reusability and Modularity

> Because React components can be organized this way, they’re highly reusable and composable—one component can contain others, or be reused with different data by simply changing the `JavaScript` logic that feeds into the `JSX`.

That’s why `React` is so widely adopted: it makes large UI codebases easier to maintain, test, and extend.

## 4 React JSX is a optimal solution but

[![React is a optimal solution but there is a lot of work to do yet](https://albertprofe.dev/images/reactjs/Things_React_Does.png)](https://albertprofe.dev/images/reactjs/Things_React_Does.png "React is a optimal solution but there is a lot of work to do yet")

React is a optimal solution but there is a lot of work to do yet

from [David Ceddia](https://daveceddia.com/what-react-does/)

> **React cares exactly zero about styling.** Think of it as generating the barebones HTML. React will put elements on the page, but everything after that is the job of CSS: how they appear, what they look like, how they’re positioned, and how centered or uncentered they are.
>
> **“How to center a div in React” is… not a React problem.** It’s a CSS problem. You don’t need “react” in your Google query. Once you figure it out, use React to apply the right CSS class name to your components.

## 5 The Rules of JSX

Return a single root element

To return multiple elements from a component, wrap them with a single parent tag.

Close all the tags

JSX requires tags to be explicitly closed: self-closing tags like `<img> must become <img />`, and wrapping tags like `<li>oranges must be written as <li>oranges</li>`.

camelCase all most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

## 6 The trick: JS in JSX with Curly Braces

[JSX lets you write HTML-like markup inside a JavaScript file](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces#using-curly-braces-a-window-into-the-javascript-world), keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

JSX is a special way of writing JavaScript.

That means it’s possible to use JavaScript inside it—with curly braces `{ }`.

```
todolist.jsx
```

```jsx
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```

[![The example below first declares a name for the scientist, name, then embeds it with curly braces inside the](https://albertprofe.dev/images/reactjs/ex3.png)](https://albertprofe.dev/images/reactjs/ex3.png "The example below first declares a name for the scientist, name, then embeds it with curly braces inside the")

The example below first declares a name for the scientist, name, then embeds it with curly braces inside the

---

```
todolist.jsx
```

```jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

[![You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases).](https://albertprofe.dev/images/reactjs/ex2.png)](https://albertprofe.dev/images/reactjs/ex2.png "You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases).")

You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases).

---

```
todolist.jsx
```

```jsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

[![You can move several expressions into one object, and reference them in your JSX inside curly braces](https://albertprofe.dev/images/reactjs/ex1.png)](https://albertprofe.dev/images/reactjs/ex1.png "You can move several expressions into one object, and reference them in your JSX inside curly braces")

You can move several expressions into one object, and reference them in your JSX inside curly braces

Back to top
