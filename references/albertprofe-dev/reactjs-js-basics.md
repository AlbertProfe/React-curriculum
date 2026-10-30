---
source: https://albertprofe.dev/reactjs/reactjs-js-basics.html
title: "JavaScript: basics"
section: "JavaScript: web scripting"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "js"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-js-basics.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# JavaScript: basics

📘 **JavaScript — Dynamic client-side scripting**

JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).

There are also more **advanced server side versions of JavaScript such as Node.js**, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).

JavaScript contains a standard library of objects, such as `Array`, `Date`, and `Math`, and a **core set of language elements such as operators, control structures, and statements**.

Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

- **Client-side JavaScript** extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
- **Server-side JavaScript** extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

---

# 1 Overview

## 1.1 JavaScript running order

When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. For example, let’s return to the block of JavaScript we saw in our first example:

```
App.js
```

```jsx
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

## 1.2 Interpreted versus compiled code

You might hear the terms interpreted and compiled in the context of programming.

- In **interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned.** You don’t have to transform the code into a different form before the browser runs it.
  - The code is received in its programmer-friendly text form and processed directly from that.
- **Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer**.
  - For example, C/C++ are compiled into machine code that is then run by the computer. The program is executed from a binary format, which was generated from the original program source code.

JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that.

Note

**JS just-in-time compiling** From a technical standpoint, most modern JavaScript interpreters actually use a technique called just-in-time compiling to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time.

## 1.3 Server-side versus client-side code

You might also hear the terms server-side and client-side code, especially in the context of web development.

- **Client-side** code is code that is run on the user’s computer — when a web page is viewed, the page’s client-side code is downloaded, then run and displayed by the browser.
  - In this section we are explicitly talking about client-side JavaScript.
- **Server-side** code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
  - Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET, and even JavaScript! JavaScript can also be used as a server-side language, for example in the popular Node.js environment — you can find out more about server-side JavaScript in our Dynamic Websites – Server-side programming topic.

## 1.4 Dynamic versus static code

The word **dynamic** is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.

Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaScript dynamically generates new content inside the browser on the client,

e.g. **creating a new HTML table**, filling it with data requested from the server, then displaying the table in a web page shown to the user.

> The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together

## 1.5 JavaScript and Java

JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java’s static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.

In contrast to Java’s compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values.

JavaScript has a prototype-based object model instead of the more common class-based object model.

**The prototype-based model provides dynamic inheritance**; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.

**JavaScript is a very free-form language compared to Java:**

- **You do not have to declare all variables, classes, and methods**.
- You do not have to be concerned with **whether methods are public, private, or protected**, and
- you do not have to **implement interfaces**
- Variables, parameters, and function return types are not explicitly typed.

| JavaScript | Java |
| --- | --- |
| Object-oriented. No distinction between types of objects. Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically. | Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy. Classes and instances cannot have properties or methods added dynamically. |
| Variable data types are not declared (dynamic typing, loosely typed). | Variable data types must be declared (static typing, strongly typed). |
| Cannot automatically write to hard disk. | Can automatically write to hard disk. |

# 2 Language basics

## 2.1 Variables

Variables are containers that store values. You start by declaring a variable with the `let` keyword, followed by the name you give to the variable:

```
App.js
```

```jsx
let myVariable;
```

A **semicolon** at the end of a line indicates where a statement ends.

It is only required when you need to separate statements on a single line. However, some people believe it’s good practice to have semicolons at the end of each statement.

There are other rules for when you should and shouldn’t use semicolons.

For more details, see [Your Guide to Semicolons in JavaScript.](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/)

Important

**JavaScript is case sensitive**.

This means myVariable is not the same as myvariable. If you have problems in your code, check the case!

Note that variables may hold values that have different [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):

| Variable | Explanation | Example |
| --- | --- | --- |
| **String** | This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks. | let myVariable = ‘Bob’; or let myVariable = “Bob”; |
| **Number** | This is a number. Numbers don’t have quotes around them. | let myVariable = 10; |
| **Boolean** | This is a True/False value. The words true and false are special keywords that don’t need quote marks. | let myVariable = true; |
| **Array** | This is a structure that allows you to store multiple values in a single reference. | let myVariable = [1,‘Bob’,‘Steve’,10]; Refer to each member of the array like this: myVariable[0], myVariable[1], etc. |
| Object | This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn. | let myVariable = document.querySelector(‘h1’); All of the above examples too. |

## 2.2 Comments

Comments are snippets of text that can be added along with code. The browser ignores text marked as comments. You can write comments in JavaScript just as you can in CSS:

```
App.js
```

```jsx
/*
Everything in between is a comment.
*/
```

If your comment contains no line breaks, it’s an option to put it behind two slashes like this:

```
App.js
```

```jsx
// This is a comment
```

## 2.3 Operators

An `operator` is a mathematical symbol that produces a result based on two values (or variables). In the following table, you can see some of the simplest operators, along with some examples to try in the JavaScript console.

Operators JS

| **Operator** | **Explanation** | **Symbol(s)** | **Example** |
| --- | --- | --- | --- |
| **Addition** | Add two numbers together or combine two strings. | + | 6 + 9;   ‘Hello’ + ‘world!’; |
| **Subtraction**, **Multiplication**, **Division** | These do what you’d expect them to do in basic math. | -, \*, / | 9 - 3; 8 \* 2; // multiply in JS is an asterisk   9 / 3; |
| **Assignment** | As you’ve seen already: this assigns a value to a variable. | = | let myVariable = ‘Bob’; |
| **Strict equality** | This performs a test to see if two values are equal and of the same data type. It returns a true/false (Boolean) result. | === | let myVariable = 3; myVariable === 4; |
| **Not**, **Does-not-equal** | This returns the logically opposite value of what it precedes. It turns a true into a false, etc..   When it is used alongside the Equality operator, the negation operator tests whether two values are not equal. | !, !== | For “Not”, the basic expression is true, but the comparison returns false because we negate it:    let myVariable = 3;  !(myVariable === 3);     “Does-not-equal” gives basically the same result with different syntax. Here we are testing “is myVariable NOT equal to 3”. This returns false because myVariable IS equal to 3:    let myVariable = 3;  myVariable !== 3; |

# 3 References

- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [The Modern JavaScript Tutorial](https://javascript.info/)

Back to top
