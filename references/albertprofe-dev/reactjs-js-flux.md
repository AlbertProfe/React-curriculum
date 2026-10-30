---
source: https://albertprofe.dev/reactjs/reactjs-js-flux.html
title: "JavaScript: flux control"
section: "JavaScript: web scripting"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "js"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-js-flux.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# JavaScript: flux control

📘 **JavaScript: flux control**

---

# 1 Conditionals

Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the if…else statement. For example:

```
App.js
```

```jsx
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

The expression inside the if () is the test. This uses the strict equality operator (as described above) to compare the variable iceCream with the string chocolate to see if the two are equal. If this comparison returns true, the first block of code runs. If the comparison is not true, the second block of code—after the else statement—runs instead.

# 2 Loops: while and for

We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.

## 2.1 The `for…of` and `for…in` loops

A small announcement for advanced readers.

This article covers only basic loops: `while`, `do..while`, and `for(..;..;..)`.

If you came to this article searching for other types of loops, here are the pointers:

- See `for…in` to loop over object properties.
- See `for…of` and iterables for looping over arrays and iterable objects.

Otherwise, please read on.

### 2.1.1 The “while” loop

The `while` loop has the following syntax:

```javascript
while (condition) {
  // code
  // so-called "loop body"
}
```

While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs `i` while `i < 3`:

```javascript
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert(i);
  i++;
}
```

A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

If `i++` was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by `while`.

For instance, a shorter way to write `while (i != 0)` is `while (i)`:

```javascript
let i = 3;
while (i) { // when `i` becomes 0, the condition becomes falsy, and the loop stops
  alert(i);
  i--;
}
```

Curly braces are not required for a single-line body.

If the loop body has a single statement, we can omit the curly braces {…}:

```javascript
let i = 3;
while (i) alert(i--);
```

Back to top
