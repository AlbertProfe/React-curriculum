---
source: https://albertprofe.dev/reactjs/rjslab1.html
title: "Lab#RE01-1: API Rest Axios"
section: "React JS: Laboratories"
published: "Tuesday, June 1, 2021"
modified: "Monday, September 21, 2026"
categories: ["reactjs", "lab", "LAB#RE01"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/rjslab1.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# Lab#RE01-1: API Rest Axios

📘 **React JS Lab#RE01-1: API Rest and Axios**

In this lab, we will be using:

- the `Open Library API`, which is a `RESTful API`, to create a React app that will display a list of books.
- We will use the `Axios` library to make HTTP requests to the API and retrieve the data in JSON format.
- We will display the `book data` in a table with four fields for each book: title, year, ISBN, pages, and author.
- We will also add a `loading state` to show the user that the app is retrieving data from the API.

The lab will demonstrate **how to use a RESTful API with React to build a functional web application**.

## 1 Install `nodejs` & `npm`

References:

- [nodejs](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Node Version Manager](https://github.com/nvm-sh/nvm?ref=softhints.com#install--update-script)

### 1.1 from `repo`

[![sudo apt-get install nodejs](https://albertprofe.dev/images/reactjs/install-nodejs.png)](https://albertprofe.dev/images/reactjs/install-nodejs.png "sudo apt-get install nodejs")

sudo apt-get install nodejs

[![sudo apt-get install npm](https://albertprofe.dev/images/reactjs/install-npm.png)](https://albertprofe.dev/images/reactjs/install-npm.png "sudo apt-get install npm")

sudo apt-get install npm

### 1.2 update/last version

#### 1.2.1 download

[![install nodejs from nodejs](https://albertprofe.dev/images/reactjs/install-nodejs-19.png)](https://albertprofe.dev/images/reactjs/install-nodejs-19.png "install nodejs from nodejs")

install nodejs from [nodejs](https://nodejs.org/en)

#### 1.2.2 terminal

Often the installed Node.js version from the repositories will be outdated. **If you need to upgrade Node.js to the latest version** you can use module `n`.

The module `n` will take care for the upgrade of `Node.js` when it’s installed from `PPA`.

Install module `n` by:

The command `"npm install n -g"` is used to install the `"n"` package globally on a system.

The `"n"` package is a node version manager, which allows you to easily switch between different versions of `Node.js` on your system. With this package, you can install multiple versions of `Node.js` on your system and easily switch between them as needed.

The `"-g"` flag indicates that the package should be installed globally, which means that it will be available to all users on the system, and not just the current user.

```js
npm install n -g
```

Then you can install the `stable` `Node.js` by:

```js
n stable
```

or the `latest`:

```js
n latest
```

### 1.3 Node Version Manager

“n” and “nvm” are both popular Node.js version managers, but they differ in some key ways.

> “n” is a **simple, lightweight Node.js version manager that is designed to be easy to use and install.** It has a small footprint and allows you to quickly switch between different versions of Node.js using a command-line interface. “n” is also designed to be compatible with other package managers like npm, so you can easily install and manage Node.js modules alongside different versions of Node.js.

> In contrast, “nvm” (Node Version Manager) **is a more complex and feature-rich version manager. It allows you to manage multiple versions of Node.js,** as well as install different versions of npm and use them alongside each Node.js version. It also has more advanced features, such as the ability to specify default Node.js versions and aliases for specific versions.

`nvm` allows you to quickly install and use different versions of node via the command line.

[Node Version Manager](https://github.com/nvm-sh/nvm?ref=softhints.com#install--update-script)

## 2 API Rest

[![REST (Representational State Transfer) - Open Library API is a RESTful API](https://albertprofe.dev/images/reactjs/openlibrary-logo-tighter.svg)](https://albertprofe.dev/images/reactjs/openlibrary-logo-tighter.svg "REST (Representational State Transfer) - Open Library API is a RESTful API")

REST (Representational State Transfer) - Open Library API is a RESTful API

An API (Application Programming Interface) is a set of protocols, routines, and tools that allow different software applications to communicate with each other. An API acts as a messenger that takes a request from one application and returns a response back to the requesting application.

`REST (Representational State Transfer)` is a software architectural style for building web services. It is based on HTTP (Hypertext Transfer Protocol) and is commonly used for creating APIs. A RESTful API allows different software applications to communicate with each other by using HTTP methods like GET, POST, PUT, and DELETE to access and manipulate data.

An Open API is an API that is publicly available and can be used by developers to build software applications. An Open API typically includes documentation and developer tools to help developers understand how to use the API.

The `Open Library API is a RESTful API` that provides access to the data stored in the Open Library project. The Open Library project aims to create a web page for every book ever published. The API allows developers to retrieve information about books, authors, subjects, and more.

The two `Open Library API` **endpoints** we are going to use are:

- [Open Library Books](https://openlibrary.org/dev/docs/api/books) This endpoint provides documentation for the Open Library Books API. It includes information on how to use the API to search for books, retrieve book details, and access other book-related information.
- [Open Library Books: get 100 books](https://openlibrary.org/search.json?q=*&limit=100)
  - This is an old endpoint (<2026), it is legacy documentation, jump to next section to see the new endpoint.
  - This endpoint is used to retrieve a list of up to 100 books from the Open Library API. The `q=*` parameter is used to search for all books, and the limit=100 parameter limits the results to 100 books. The response data is in JSON format and includes information like the book title, author, publication date, and more.

### 2.1 openlibrary update 2026: what changed

**old query**: https://openlibrary.org/search.json?q=\*&limit=100

`q=*` (and other very short / low-value queries) used to work, but the endpoint now rejects them with:

```json
{
  "detail": [
    {
      "type": "value_error",
      "loc": ["query", "q"],
      "msg": "Value error, Query too short, must be at least 3 characters",
      "input": "*"
    }
  ]
}
```

This is a deliberate backend validation (visible in the FastAPI layer they migrated to). It was added as part of performance work because short/wildcard-only queries (especially `*`, single characters, or stop-words like “the”) were expensive on Solr and caused problems.

> The official Search API docs (`https://openlibrary.org/dev/docs/api/search`) still don’t explicitly document the 3-character minimum, but the live endpoint enforces it.

#### 2.1.1 Notes

- The old Books API page (`/dev/docs/api/books`) is about the older/legacy Books API and Work/Edition/ISBN endpoints — it is **not** the Search API.
- Even some 3-letter stop words can be rejected (e.g. `q=the` currently fails with an “Invalid query” message). A normal term like `q=book` works fine.

We must use a real search term of at least 3 characters:

```
https://openlibrary.org/search.json?q=book&limit=100
https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=100
```

Or use fielded queries / other filters instead of a bare `*`.

## 3 Create app

First, let’s create a new React app using `Create React App` by running the following command in your terminal:

```
npx.bash
```

```js
npx create-react-app books
```

to create a React App named **books**, or

```js
npx create-react-app hola
```

to create a React App named **hola**.

[![npx create-react-app books](https://albertprofe.dev/images/reactjs/create-react-app.png)](https://albertprofe.dev/images/reactjs/create-react-app.png "npx create-react-app books")

npx create-react-app books

[![tree-folder project](https://albertprofe.dev/images/reactjs/lab-re-1-project.png)](https://albertprofe.dev/images/reactjs/lab-re-1-project.png "tree-folder project")

tree-folder project

Once the app is created, navigate into the project folder and install Axios, a popular library for making HTTP requests:

```js
cd books
npm install axios
```

Now, let’s create a new component called `BookList` that will `fetch` and display **the list of books**:

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      
        const response = await axios.get(
          'https://openlibrary.org/search.json?q=*&limit=100'
        );
        const booksData = response.data.docs;
        setBooks(booksData);
        setIsLoading(false);
    
    };
    fetchBooks();
  }, []);

  return (
    <>
    <h1>Books</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              <strong>Title:</strong> {book.title} <br />
              <strong>Year:</strong> {book.publish_year} <br />
              <strong>ISBN:</strong> {book.isbn[0]} <br />
              <strong>Pages:</strong> {book.number_of_pages} <br />
              <strong>Author:</strong> {book.author_name}
              </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
```

Now, let’s add the BookList component to our App component:

```js
import React from "react";
import BookList from "./BookList";

function App() {
  return (
    <>
      <BookList />
    </>
  );
}

export default App;
```

Finally, let’s start the development server and see the list of books in our browser:

```js
npm start
```

Open yo browser on `http://localhost:3000/` or `http://localhost:3001/` if 3000 is occupied.

[![render localhost:3001: loading…](https://albertprofe.dev/images/reactjs/lab-re-render-2.png)](https://albertprofe.dev/images/reactjs/lab-re-render-2.png "render localhost:3001: loading…")

render localhost:3001: loading…

[![render localhost:3001: load books](https://albertprofe.dev/images/reactjs/lab-re-1-render.png)](https://albertprofe.dev/images/reactjs/lab-re-1-render.png "render localhost:3001: load books")

render localhost:3001: load books

## 4 handle error

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://openlibrary.org/search.json?q=*&limit=100'
        );
        const booksData = response.data.docs;
        setBooks(booksData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h1>Books</h1>
      {isLoading && !isError && <p>Loading...</p>}
      {!isLoading && isError && <p>Error: Could not fetch books</p>}
      {!isLoading && !isError && (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              <strong>Title:</strong> {book.title} <br />
              <strong>Year:</strong> {book.publish_year} <br />
              <strong>ISBN:</strong> {book.isbn[0]} <br />
              <strong>Pages:</strong> {book.number_of_pages} <br />
              <strong>Author:</strong> {book.author_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
```

Back to top
