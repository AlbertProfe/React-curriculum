---
source: https://albertprofe.dev/reactjs/reactjs-es6-import.html
title: "React JS ES6: import modules"
section: "ES6: ECMAScript 6"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "es6", "import-modules"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-es6-import.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS ES6: import modules

## 1 Overview

📘 \*\*import modules\*

The magic of components lies in their `reusability`: you can create components that are composed of other components.

But as you nest more and more components, **it often makes sense to start splitting them into different files**. This lets you keep your files easy to scan and reuse components in more places.

---

## 2 Exporting and importing a component

[What if you want to change the landing screen](https://beta.reactjs.org/learn/importing-and-exporting-components) in the future and put a list of science books there? Or place all the profiles somewhere else? It makes sense to move `Gallery` and `Profile` out of the root component file.

This will make them more **modular and reusable** in other files. You can move a component in three steps:

1. Make a new `JS file` to put the components in.
2. `Export` your function component from that file (using either `default` or named `exports`).
3. `Import` it in the file where you’ll use the component (using the corresponding technique for `importing` default or `named exports`).

Here both `Profile` and `Gallery` have been moved out of `App.js` into a new file called `Gallery.js`. Now you can change `App.js` to import `Gallery` from `Gallery.js`:

```
Gallery.js
```

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
       <p>I love science!! Do you know what does STEAM mean? Come on, Albertus, answer the question! </p>
    </section>
  );
}
```

```
App.js
```

```jsx
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

[![Executing App.js, calling component Gallery, importing it and using it](https://albertprofe.dev/images/reactjs/ex6.png)](https://albertprofe.dev/images/reactjs/ex6.png "Executing App.js, calling component Gallery, importing it and using it")

Executing App.js, calling component Gallery, importing it and using it

Back to top
