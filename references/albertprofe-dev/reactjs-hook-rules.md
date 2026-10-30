---
source: https://albertprofe.dev/reactjs/reactjs-hook-rules.html
title: "React JS: Rules of Hooks"
section: "ReacJS 18: Hooks"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "hooks", "rules"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-hook-rules.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS: Rules of Hooks

📘 **Rules of Hooks**

`Hooks` are a new addition in `React 16.8`. They let you use state and other React features w**ithout writing a class.**

Reference: [Rules of Hooks](https://legacy.reactjs.org/docs/hooks-rules.html)

## 1 Overview

`Hooks` are JavaScript functions, but you need to follow two rules when using them. We provide a linter plugin to enforce these rules automatically:

### 1.1 Rule #1: Only Call Hooks at the Top Level

> Don’t call Hooks inside loops, conditions, or nested functions.

Instead, always use Hooks at the top level of your React function, before any early returns.

By following this rule, you ensure that Hooks are called in the same order each time a component renders.

That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

### 1.2 Rule #2: Only Call Hooks from React Functions

> Don’t call Hooks from regular JavaScript functions. Instead, you can:

- Call `Hooks` **from React function components**.
- Call `Hooks` `from custom Hooks` (we’ll learn about them on the next page).

## 2 ESLint Plugin

React team released an `ESLint plugin` called `eslint-plugin-react-hooks` that enforces these two rules. You can add this plugin to your project if you’d like to try it:

This plugin is included by default in `Create React App.`

```js
npm install eslint-plugin-react-hooks --save-dev
```

```js
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

## 3 Cheatsheet by @\_georgemoller

[![Hooks: useState, useReducer, useContext](https://albertprofe.dev/images/reactjs/IMG_0931.JPG)](https://albertprofe.dev/images/reactjs/IMG_0931.JPG "Hooks: useState, useReducer, useContext")

Hooks: useState, useReducer, useContext

[![Hooks: useEffect, useLayoutEffect](https://albertprofe.dev/images/reactjs/IMG_0932.JPG)](https://albertprofe.dev/images/reactjs/IMG_0932.JPG "Hooks: useEffect, useLayoutEffect")

Hooks: useEffect, useLayoutEffect

[![Hooks: useInsertionEffect, useSyncExternalStore](https://albertprofe.dev/images/reactjs/IMG_0933.JPG)](https://albertprofe.dev/images/reactjs/IMG_0933.JPG "Hooks: useInsertionEffect, useSyncExternalStore")

Hooks: useInsertionEffect, useSyncExternalStore

[![Hooks: useCallback, useMemo](https://albertprofe.dev/images/reactjs/IMG_0934.JPG)](https://albertprofe.dev/images/reactjs/IMG_0934.JPG "Hooks: useCallback, useMemo")

Hooks: useCallback, useMemo

[![Hooks: useRef, useImperativeHandle](https://albertprofe.dev/images/reactjs/IMG_0935.JPG)](https://albertprofe.dev/images/reactjs/IMG_0935.JPG "Hooks: useRef, useImperativeHandle")

Hooks: useRef, useImperativeHandle

[![Hooks: useId, useDebugValue](https://albertprofe.dev/images/reactjs/IMG_0936.JPG)](https://albertprofe.dev/images/reactjs/IMG_0936.JPG "Hooks: useId, useDebugValue")

Hooks: useId, useDebugValue

[![Hooks: useEvents, useDeferredValue, useTransition](https://albertprofe.dev/images/reactjs/IMG_0937.JPG)](https://albertprofe.dev/images/reactjs/IMG_0937.JPG "Hooks: useEvents, useDeferredValue, useTransition")

Hooks: useEvents, useDeferredValue, useTransition

Back to top
