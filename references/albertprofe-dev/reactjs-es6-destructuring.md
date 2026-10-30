---
source: https://albertprofe.dev/reactjs/reactjs-es6-destructuring.html
title: "React JS ES6: destructuring"
section: "ES6: ECMAScript 6"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "es6", "destructuring"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-es6-destructuring.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS ES6: destructuring

## 1 Overview

📘 **Destructuring arrays**

Array `destructuring` is a way to extract values from an array and assign them to separate variables.

It allows you to **unpack** the values of an array into separate variables.

---

## 2 Why do we need it

> Array destructuring can be a useful tool for extracting values from arrays and assigning them to separate variables. It can make your code more concise and easier to read, especially when working with large or complex arrays.

Here is the **old way of assigning array items** to a variable:

```
App.js
```

```jsx
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
```

Here is the new way of assigning array items to a variable **With destructuring**:

```
App.js
```

```jsx
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

## 3 How to use `destructuring`

Here’s an example of array destructuring:

```
App.js
```

```jsx
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

You can also use destructuring to skip elements or assign default values:

```
App.js
```

```jsx
const arr = [1, 2, 3];
const [a, , c] = arr;

console.log(a); // 1
console.log(c); // 3

const arr2 = [1];
const [a2, b2 = 2, c2 = 3] = arr2;

console.log(a2); // 1
console.log(b2); // 2
console.log(c2); // 3
```

In the first example, the second element of the arr array is skipped, and in the second example, default values are assigned to the b2 and c2 variables if the corresponding elements of the arr2 array are not present.

Array destructuring can be a convenient way to extract values from arrays and assign them to separate variables. It can make your code more concise and easier to read.

You can also use destructuring to skip elements or assign default values:

```
App.js
```

```jsx
const arr = [1, 2, 3, 4];
const [a, , c, d] = arr;

console.log(a); // 1
console.log(c); // 3
console.log(d); // 4

const arr2 = [1];
const [a2, b2 = 2, c2 = 3, d2 = 4] = arr2;

console.log(a2); // 1
console.log(b2); // 2
console.log(c2); // 3
console.log(d2); // 4
```

## 4 More examples

### 4.1 Nested arrays

You can use destructuring to extract values from nested arrays:

```
App.js
```

```jsx
const arr = [[1, 2], [3, 4]];
const [[a, b], [c, d]] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```

### 4.2 Rest syntax

The rest syntax allows you to capture the remaining elements of an array in a separate variable:

```
App.js
```

```jsx
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```

### 4.3 Swapping variables

You can use destructuring to easily swap the values of two variables:

```
App.js
```

```jsx
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

### 4.4 Function arguments

You can use destructuring to specify function arguments:

```
App.js
```

```jsx
function add([a, b]) {
  return a + b;
}

console.log(add([1, 2])); // 3
```

### 4.5 Object destructuring

You can also use destructuring with objects. Here’s an example:

```
App.js
```

```jsx
const obj = {
  foo: 1,
  bar: 2
};

const { foo, bar } = obj;

console.log(foo); // 1
console.log(bar); // 2
```

Back to top
