---
source: https://albertprofe.dev/reactjs/reactjs-es6-data.html
title: "React JS ES6: array, data and key"
section: "ES6: ECMAScript 6"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "es6", "arrays"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-es6-data.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# React JS ES6: array, data and key

## 1 Overview

📘 **Arrays and data in JS**

We can use the [JavaScript array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to manipulate an `array of data`. On this page, you’ll use `filter()` and `map()` with React to filter and transform your array of data into an `array of components`.

---

## 2 Data Array

Here’s a [short example of how to generate a list](https://beta.reactjs.org/learn/rendering-lists) of items from an array:

```
data.jsx
```

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

Map the `people` members into a new array of `JSX` nodes, `listItems`:

```
data.jsx
```

```jsx
const listItems = people.map(person => <li>{person}</li>);
```

Return `listItems` from your component wrapped in a `<ul>`:

```
data.jsx
```

```jsx
return <ul>{listItems}</ul>;
```

```
data.jsx
```

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

[![Executing List(), here is the result:](https://albertprofe.dev/images/reactjs/ex7.png)](https://albertprofe.dev/images/reactjs/ex7.png "Executing List(), here is the result:")

Executing `List()`, here is the result:

[![Notice the sandbox above displays a console error](https://albertprofe.dev/images/reactjs/ex8.png)](https://albertprofe.dev/images/reactjs/ex8.png "Notice the sandbox above displays a console error")

Notice the sandbox above displays a console error

## 3 Filtering and structuring `data` with `key id`

This `data` can be structured even more as a `JSON array` with an `Id`:

```
data.jsx
```

```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

And now, let’s `filter`, `map` and return `data`:

```
data.jsx
```

```jsx
// Create a new array of just “chemist” people, chemists,
// by calling filter() on the people
// filtering by person.profession === 'chemist':
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

// Now map over chemists:
const listItems = chemists.map(person => {
  // JSX elements directly inside a map() call
  // always need keys!
  <li key={person.id}>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>

  // Lastly, return the listItems from your component:
  return <ul>{listItems}</ul>;

)};
```

[![let’s filter, map and return data](https://albertprofe.dev/images/reactjs/filter-map-return-data.png)](https://albertprofe.dev/images/reactjs/filter-map-return-data.png "let’s filter, map and return data")

let’s `filter`, `map` and return `data`

> `Keys` tell React which array item each component corresponds to, so that it can match them up later.

> This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A **well-chosen key helps React infer what exactly has happened**, and make the correct updates to the `DOM` tree.

[More on keys](https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key)

[More on arrays](https://beta.reactjs.org/learn/updating-arrays-in-state)

Back to top
