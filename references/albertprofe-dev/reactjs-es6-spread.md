---
source: https://albertprofe.dev/reactjs/reactjs-es6-spread.html
title: "React JS ES6: spread operator"
section: "ES6: ECMAScript 6"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "es6", "spread", "operator"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-es6-spread.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS ES6: spread operator

## 1 Overview

📘 **spread operator**

The `JavaScript spread operator` `...` allows us to quickly copy all or part of an existing array or object into another array or object.

---

The [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) is a useful tool for working with arrays and can make your code more concise and easier to read.

```
App.js
```

```jsx
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```

The spread operator is often used in combination with destructuring.

```
App.js
```

```jsx
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
```

The spread operator can also be used to spread the elements of an array into the arguments of a function:

```
App.js
```

```jsx
function add(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];
console.log(add(...arr)); // 6
```

## 2 Copying objects with the spread syntax

Important

We need to use spread operator **to quickly copy part of the existing Person object** (`state variable`) into another new object (`state variable`).

Note that the … spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.

```
App.js
```

```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```

[![Initial render](https://albertprofe.dev/images/reactjs/ex51.png)](https://albertprofe.dev/images/reactjs/ex51.png "Initial render")

Initial render

[![Re-render with handleChange(e)](https://albertprofe.dev/images/reactjs/ex52.png)](https://albertprofe.dev/images/reactjs/ex52.png "Re-render with handleChange(e)")

Re-render with `handleChange(e)`

Here, you want to also copy the existing data **into the new object to be rendered next render** (that is `lastName` and `email`) because only one of the fields has changed: `firstName` from `input` and `e.target.value` to **trigger** `setPerson`.

> So with big objects we must use spread operator.

```
App.js
```

```jsx
setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email
  // ..
  // imagine a big object with 50 fields
  // ..
});
```

Use `spread operator` to create a new object and pass it to `setPerson`.

> You can use the … object spread syntax so that you don’t need to copy every property separately.

```
App.js
```

```jsx
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```

Back to top
