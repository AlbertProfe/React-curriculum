<!--
LESSON TEMPLATE — copy to lessons/MM-LL-slug.md
  MM = module number (01–05), LL = lesson number inside the module, slug = kebab-case title
  e.g. lessons/01-02-jsx-describing-the-ui.md  (see CURRICULUM.md for the full list)
Follow STYLE-GUIDE.md. Delete these comments when drafting.
-->
---
lesson: "MM-LL"
title: "Lesson title (as in CURRICULUM.md)"
module: "MM — Module name"
react-md-topic: N          # topic number in React.md
status: drafted            # planned | drafted | edited | ready for Albert
sources:
  albert: []               # albertprofe.dev/reactjs URLs this lesson builds on
  react-dev: []            # react.dev/learn URLs (linked, never copied)
---

# Lesson title

📘 **Topic name**

One or two lines: what this is, in plain words. For a hook/API, add its signature: `useSomething(arg)`.

---

**You will learn to:**

- goal 1 (from CURRICULUM.md)
- goal 2
- goal 3

**Before you start:** links to previous lessons or Albert's JS/ES6 prerequisite pages, if needed.

## 1 Overview

Why this matters, the mental model in a few short paragraphs. **Bold the key phrase**, `code` the technical names.

<!-- Optional: one real, verifiable quote as an epigraph. Never invent one. -->

## 2 The problem

A small situation where the naive approach fails (or a question for the reader to predict).

## 3 The solution: concept name

Explain the concept. For hooks/APIs:

### 3.1 Parameters

### 3.2 Returns

> [!IMPORTANT]
> The one rule students must not miss.

## 4 Example 1

What we build and what to watch for.

**`App.jsx`**

```jsx
export default function App() {
  // smallest example that shows the concept
  return <h1>Hello</h1>;
}
```

1. Step-by-step walk-through of the code.
2. …
3. …

<!-- screenshot: what the student sees after running it -->

## 5 Example 2

A variation, or ✅ correct vs ❌ incorrect side by side.

**`App.jsx`**

```jsx
// ✅ correct

// ❌ incorrect
```

## 6 Recap

- 3–5 bullets, one line each.

## 7 Try it

1. A small exercise using this lesson's concept only.
2. A "predict the output" question.

## References

- Albert: [page title](https://albertprofe.dev/reactjs/…)
- react.dev: [page title](https://react.dev/learn/…)
