---
source: https://albertprofe.dev/reactjs/reactjs-hook-memo.html
title: "ReactJS: useMemo"
section: "ReacJS 18: Hooks"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "hooks", "memo"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-hook-memo.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# ReactJS: useMemo

📘 **useMemo**

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders.

`const cachedValue = useMemo(calculateValue, dependencies)`

---

# 1 Definition

`const cachedValue = useMemo(calculateValue, dependencies)`

`useMemo` is a React Hook used for memoization, a technique to optimize performance by caching the results of expensive computations.

It takes a function and an array of dependencies, returning a memoized value. When the dependencies change, `useMemo` re-runs the function only if necessary, otherwise returning the cached result.

> This optimization is particularly useful for avoiding unnecessary re-renders in components. It’s commonly employed for computationally intensive tasks, like complex calculations or data processing, where you want to avoid redundant work. By memoizing values, `useMemo` helps improve React application efficiency and responsiveness.

## 1.1 Parameters

- **calculateValue**: The function calculating the value that you want to cache.
  - It should:
    - be **pure**,
    - take **no arguments**,
    - and should **return a value of any type**.
  - React will call your function during the initial render. On next renders, React will return the same value again *if the dependencies have not changed since the last render*.
  - Otherwise, it will call `calculateValue`, return its result, and store it so it can be reused later.
- **dependencies**: The list of all reactive values referenced inside of the `calculateValue` code.
  - Reactive values include `props`, `state`, and all the `variables` and functions declared directly inside your component body.
  - If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency.
  - The list of dependencies must have a **constant number of items** and be written inline like [dep1, dep2, dep3].
  - React will compare each dependency with its previous value using the `Object.is` comparison.

Note

You should only rely on `useMemo` **as a performance optimization.**

If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add `useMemo` to improve performance.

## 1.2 Example 1

Call `useMemo` at the top level of your component to **cache** a calculation between re-renders:

```
TodoList.js
```

```jsx
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

# 2 References

- [expensiveCalculation](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_usememo)
- [React.useMemo and when you should use it](https://everyday.codes/javascript/react-usememo-and-when-you-should-use-it/)
- [Understanding useMemo and useCallback](https://www.joshwcomeau.com/react/usememo-and-usecallback/)

Back to top
