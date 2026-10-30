---
source: https://albertprofe.dev/reactjs/reactjs-app-router.html
title: "React JS App: router"
section: "ReactJS: Designing an App"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "router"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-app-router.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS App: router

## 1 Overview

📘 **router** `Create React App` doesn’t include **page routing**. `React Router` is the most popular solution. It allows you to **define routes for different parts of your application** and to programmatically **navigate** between them.

---

## 2 Install

```
reactrouter.sh
```

```bash
npm i -D react-router-dom
```

## 3 Folder tree

To create an application [with multiple page routes](https://www.w3schools.com/REACT/react_router.asp), let’s first start with the **file structure**.

Within the `src` folder, we’ll create a folder named `pages` with several files:

```
reactrouter.sh
```

```bash
src\pages\:
└── src\pages\
    └── Layout.js
        Home.js
        Blogs.js
        Contact.js
        NoPage.js
```

```
index.js
```

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

[![Use React Router to route to pages based on URL: index.js:](https://albertprofe.dev/images/reactjs/ex11.png)](https://albertprofe.dev/images/reactjs/ex11.png "Use React Router to route to pages based on URL: index.js:")

Use React Router to route to pages based on URL: index.js:

The **Layout component has `<Outlet>` and `<Link>` elements. The `<Outlet>` renders the current route selected. `<Link>` is used to set the URL and keep track of browsing history.**

Anytime we link to an internal path, we will use `<Link>` instead of `<a href="">`. The **layout route** is a shared component that inserts common content on all pages, such as a **navigation menu**.

```
Layout.js
```

```jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
```

```
Home.js
```

```jsx
const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
```

```
Blog.js
```

```jsx
const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;
```

```
Contact.js
```

```jsx
const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;
```

```
NoPagejs
```

```jsx
const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
```

Back to top
