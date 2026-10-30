---
source: https://albertprofe.dev/reactjs/reactjs-hook-custom.html
title: "ReactJS: custom hooks"
section: "ReacJS 18: Hooks"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "hooks", "custom"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-hook-custom.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# ReactJS: custom hooks

📘 **Custom Hooks**

Hooks are reusable functions. When you have component logic that needs to be used by multiple components, **we can extract that logic to a custom Hook.**

Custom Hooks start with `use`.

Example: `useFetch`

---

## 1 Example 1

We are `fetching` data, We will use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) service to **fetch fake data**. This service is great for testing applications when there is no existing data.

```
App.js
```

```jsx
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
```

[![useEffect inital render: fetching data](https://albertprofe.dev/images/reactjs/ex30.png)](https://albertprofe.dev/images/reactjs/ex30.png "useEffect inital render: fetching data")

`useEffect` inital render: fetching data

The `fetch` logic may be needed in other components as well, so **we will extract that into a custom Hook.**

> Move the fetch logic to a new file to be used as a custom Hook:

```
useFetch.js
```

```jsx
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```

```
index.js
```

```jsx
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
```

We have created a new file called `useFetch.js` containing a function called `useFetch` which contains a**ll of the logic needed to fetch our data.**

Back to top
