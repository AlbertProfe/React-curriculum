---
source: https://albertprofe.dev/reactjs/reactjs-js-objects.html
title: "JavaScript: objects"
section: "JavaScript: web scripting"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "js"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/reactjs-js-objects.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# JavaScript: objects

📘 **JavaScript: Objects**

An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

---

# 1 Overview

An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type.

It is very common to create an object using an **object literal** when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

```
App.js
```

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(` ${this.name[0]}
                  ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

After saving and refreshing, try entering some of the following into the JavaScript console on your browser devtools:

```
App.js
```

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Another example of JS object declaration:

```
App.js
```

```js
const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'
```

An object like this is (`apple`, `person`) referred to as an **object literal** — we literally write out the object contents as we’ve come to create it. **This is different compared to objects instantiated from classes**.

## 1.1 Dot notation

Above, you **accessed** the object’s properties and methods using `dot notation`.

The object name (person) acts as the namespace — it must be entered first to access anything inside the object.

Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object’s methods.

## 1.2 What is “this”

You may have noticed something slightly strange in our methods. Look at this one for example:

```
App.js
```

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

You are probably wondering what `this` is. The `this` keyword refers to the current object the code is being written inside — so in this case `this` is equivalent to `person`. So why not just write `person` instead?

Well, **when you only have to create a single object literal**, it’s not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.

# 2 Objects are Mutable

JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.

It is the reference to the object, bound to the variable, that cannot be changed.

```
App.js
```

```js
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

student = {}
// TypeError: Assignment to constant variable.
```

Note

**Delete operator**

Once an object is created in JavaScript, it is possible to remove properties from the object using the `delete` operator.

The `delete` keyword deletes both the value of the property and the property itself from the object.

The `delete` operator only works on properties, not on variables or functions.

# 3 Destructuring

The JavaScript **destructuring** assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.

It uses a **pair of curly braces `({})` with property names on the left-hand side of an assignment to extract values from objects**

The number of variables can be less than the total properties of an object.

```
App.js
```

```js
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'
```

# 4 Shorthand property name

The **shorthand property name syntax** in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key).

In this process, an object is created where the property names of that object match variables which already exist in that context.

Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value.

```
App.js
```

```js
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
```

# 5 Object prototypes

[Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes){.external .target=’\_blank’} are the mechanism by which JavaScript objects inherit features from one another.

This is an object with one data property, `city`, and one method, `greet()`.

```
App.js
```

```js
const myObject = {
  city: "Girona",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Girona
```

> If you type the object’s name followed by a period into the console, like `myObject.`, then the console will pop up a list of all the properties available to this object. You’ll see that as well as city and greet, there are lots of other properties!

```
App.js
```

```js
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

For example:

```
App.js
```

```js
myObject.toString(); // "[object Object]"
```

This is an object called `Object.prototype`, and it is the most basic prototype, that all objects have by default. The prototype of `Object.prototype` is **null**, so it’s at the end of the prototype chain:

[![](https://albertprofe.dev/images/reactjs/myobject-prototype-chain.svg)](https://albertprofe.dev/images/reactjs/myobject-prototype-chain.svg)

Note

Every object in JavaScript has a built-in property, which is called its `prototype`. The `prototype` is itself an object, so the `prototype` will have its own `prototype`, making what’s called a `prototype` chain. The chain ends when we reach a `prototype` that has **null** for its own `prototype`.

Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use `__proto__`.

The standard way to access an object’s prototype is the `Object.getPrototypeOf()` method.

# 6 References

- [mozilla mdn web docs: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [JavaScript Object Cheatsheet: Everything You Need to Know](https://morioh.com/a/a95ef5b93635/javascript-object-cheatsheet-everything-you-need-to-know)
- [Test your skills: Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics)

Back to top
