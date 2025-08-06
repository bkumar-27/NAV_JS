
/*

 Document Object Model (DOM)
-----------------------------------------

-> document -> html code
   window   -> browser


   <nav>

   css -> nav{}
   Js  -> document.querySelector('nav');
   JQuery -> $('nav')

<nav id ='test'>
   css -> #test{}
   Js  -> document.querySelector('#test');
   JQuery -> $('#test');



   <nav class ='abc'>
   css -> .abc{}
   Js  -> document.querySelector('.abc');
   JQuery -> $('.abc');



   <nav class ='container'>
   css -> .container{}
   Js  -> document.querySelector('.container');
   JQuery -> $('.container');


   
   <nav class ='container'>
	   <a>
	   
   css -> .container{}
   Js  -> document.querySelector('.container a');
   JQuery -> $('.container a');

*/


// document
console.log(document);

// How to access head tag only ; Document is a bigger object

//head

console.log(document.head);

//title

console.log(document.title); //JS Dom Intrduction

// : change title in DOM
document.title = 'UIBrains Technologies'

//body

console.log(document.body);

//nav

console.log(document.nav); // undefined


let navTag = document.querySelector('nav ');
console.log(navTag)

// anchor Tag

let anchorTag = document.querySelector('nav a')

console.log(anchorTag);

//Iinner Text

let theText = anchorTag.innerText;
console.log(theText);  //JS DOM Introduction


// change the innerText

anchorTag.innerText = 'KUMAR BILLGATES';





//h1  Tag


let h1Tag = document.querySelector('#msg');
// console.log(h1Tag);

// h1Tag.innerText = 'Good Evening';

h1Tag.innerText = 'KUMAR BILLGATES';

//styles

h1Tag.style.backgroundColor = 'red';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.fontSize = '45px';
h1Tag.style.boxShadow = '0 0 10px black'






/*
Here's a **structured summary** and **lesson notes** based on your video transcript on **DOM (Document Object Model) Manipulation** in JavaScript. This will help for your **ReactJS course (Telugu + English)**, **YouTube script**, and **interview prep**.

---

## 🔥 **Lesson Title**: DOM (Document Object Model) Manipulation - Introduction

---

## 🎯 **Lesson Objectives**

* Understand what the DOM is
* Learn how to access and modify HTML elements using JavaScript
* Learn how to style elements dynamically using JavaScript
* Learn how DOM manipulation differs from static HTML changes

---

## 🧠 **Concept Explanation**

### 🧾 What is DOM?

* DOM stands for **Document Object Model**.
* It is a **tree-like structure** representing your **HTML document** in memory.
* Each **HTML tag is treated as an object** in JavaScript.

### 📄 DOM = Document + Object + Model

* **Document**: Your full HTML page.
* **Object**: HTML elements are treated as objects (like in OOP).
* **Model**: It forms a model or structure (tree) that the browser understands and allows us to manipulate.

---

## 🧩 Why is DOM important?

* You can **display dynamic content** on the web page.
* You can **update, delete, or style elements** using JavaScript without changing the original HTML manually.
* Essential for **interactive web apps**.

---

## 🔑 Key DOM Objects

| Object     | Description                              |
| ---------- | ---------------------------------------- |
| `document` | Refers to the entire HTML document.      |
| `window`   | Refers to the entire browser window/tab. |

---

## 🛠️ DOM Access Methods

### ✅ Access full HTML document

```js
console.log(document);
```

### ✅ Access `<head>` and `<body>`

```js
console.log(document.head);
console.log(document.body);
```

### ❌ Cannot directly access repeated elements like `<nav>` tags

✅ Use **selector functions** like:

#### `document.querySelector()` → Returns first matched element

```js
let navTag = document.querySelector("nav");
let byId = document.querySelector("#test");
let byClass = document.querySelector(".container");
let anchorInsideNav = document.querySelector("nav a");
```

---

## 🔍 Get and Change Element Text

### ✅ Get inner text of element

```js
let anchorTag = document.querySelector("nav a");
console.log(anchorTag.innerText);
```

### ✅ Change inner text of element

```js
anchorTag.innerText = "My Name";
```

---

## 🎨 Style Elements with JavaScript

### Example: Change styles of an H1 element

```html
<h1 id="msg">Good Morning</h1>
```

```js
let heading = document.querySelector("#msg");

heading.innerText = "Good Evening";

heading.style.backgroundColor = "limegreen";
heading.style.color = "white";
heading.style.textAlign = "center";
heading.style.padding = "10px";
heading.style.fontSize = "45px";
heading.style.boxShadow = "0 0 10px black";
```

📝 **Note**: Use **camelCase** for CSS properties (e.g., `backgroundColor`, not `background-color`).

---

## 📝 Summary

| Feature             | JavaScript Code Example                |
| ------------------- | -------------------------------------- |
| Access full DOM     | `document`                             |
| Access specific tag | `document.querySelector("nav")`        |
| Access by ID        | `document.querySelector("#idName")`    |
| Access by class     | `document.querySelector(".className")` |
| Get text            | `element.innerText`                    |
| Change text         | `element.innerText = "New Text"`       |
| Change style (CSS)  | `element.style.property = "value"`     |

---

## ❓ Interview Q\&A

### 1. **What is the DOM?**

**Answer**: DOM stands for Document Object Model. It represents the HTML structure as objects that can be accessed and manipulated using JavaScript.

---

### 2. **What is the difference between `document` and `window`?**

**Answer**:

* `document` refers to the HTML page (content).
* `window` refers to the browser tab (environment where the page runs).

---

### 3. **How do you select an element by ID in JavaScript?**

```js
document.querySelector("#myId");
```

---

### 4. **How do you change the text of an element using JavaScript?**

```js
element.innerText = "New Text";
```

---

### 5. **How do you apply styles using JavaScript?**

```js
element.style.backgroundColor = "red";
```

---

## 🎬 End of Lesson

👉 In the next lesson: **DOM Events and Dynamic Content Update**

---

## 📥 Downloadable Format (if needed)

Would you like this in **PDF**, **PowerPoint**, or both?

---

Let me know if you'd like this translated or simplified in **Telugu + English** format for your YouTube script or lesson slides.


*/





