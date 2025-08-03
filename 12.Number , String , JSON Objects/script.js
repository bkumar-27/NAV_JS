//Number

// max Number

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Min Number

console.log(Number.MIN_SAFE_INTEGER); //  -9007199254740991


// Pos Infinity

console.log(Number.POSITIVE_INFINITY); // Infinity

// Neg Infinity

console.log(Number.NEGATIVE_INFINITY); //  -Infinity



// Parse int

let str1 = "100";
let num1 = Number.parseInt(str1);

// console.log(typeof str);  // string

console.log(`${typeof str1} => ${typeof num1}`);  // string => number  : string converted to Number



// Parse Float

let str2 = "100.145";
let num2 = Number.parseFloat(str2);

// console.log(typeof str);  // string

console.log(`${typeof str2} => ${typeof num2}`);



//tostring

let num3 = 100;
let numstring = num3.toString();
console.log(`${typeof num3} => ${typeof numstring}`)


// toFixed

let amount = 520;
console.log(amount.toFixed(2)); // 520.00


// String Related  Operations

let msg = String('Good Morning');

// Length
console.log(msg.length); // 12

//LowerCase

console.log(msg.toLowerCase()); //good morning

//Upper Case

console.log(msg.toUpperCase()); //GOOD MORNING

//substr(start index,no of Chars)

//substr(from:, length)

console.log(msg.substr(0, 4)); // Good

//substr

console.log(msg.substr(5, 7)); //GOOD MORNING

console.log(msg.substr(5)); // Morning


//charAt

console.log(msg.charAt(5)); //M

// charCodeAt (ASSCII)

console.log(msg.charCodeAt(5)); // 77



//JSON Object

/*

String => Object : parse()

Object =>  string : stringify()

*/

let student = {
	name: 'Rajan',
	age: 20,
	course: 'CSE',
	college: 'IIT Mumbai'

};

console.log(student); // {name: 'Rajan', age: 20, course: 'CSE', college: 'IIT Mumbai'}

// Object to  String
let studentStr = JSON.stringify(student);

console.log(studentStr); // {"name":"Rajan","age":20,"course":"CSE","college":"IIT Mumbai"}


// String to Object

let newStudent = JSON.parse(studentStr);
console.log(newStudent);  // {name: 'Rajan', age: 20, course: 'CSE', college: 'IIT Mumbai'}



/*
Here’s a **clean summary** of your video content, broken into **3 main objects in JavaScript**: `Number`, `String`, and `JSON`, with **key points, examples, and Telugu explanations** for each.

---

## 🔢 1. Number Object in JavaScript

### ✅ Purpose:

Used to handle numeric values, perform operations like parsing, formatting, checking min/max values, and working with `Infinity`.

### 💡 Properties:

```js
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

**📌 Telugu Explanation**:
ఇవి మనం JavaScript లో సంఖ్యల యొక్క గరిష్ఠ మరియు కనిష్ఠ పరిమితులు తెలుసుకోవడానికి ఉపయోగిస్తాం. Infinity అంటే అంతులేని విలువ.

---

### 🔄 String to Number Conversion

```js
let str = "100";
let num = Number.parseInt(str);  // 100
let floatNum = Number.parseFloat("100.45"); // 100.45
```

**📌 Telugu**: `parseInt()` integer కు మారుస్తుంది. `parseFloat()` దశాంశ (decimal) తో మారుస్తుంది.

---

### 🔁 Number to String

```js
let amount = 1520.00;
let strAmount = amount.toFixed(2);  // "1520.00"
let num = 100;
let str = num.toString(); // "100"
```

**📌 Telugu**: `.toFixed()` మానవికంగా చూపడానికి ఉపయోగపడుతుంది (రూ. 100.00). `.toString()` అంటే సంఖ్యను స్ట్రింగ్‌గా మార్చడం.

---

## 🔤 2. String Object in JavaScript

### 🔧 Create a String:

```js
let msg = new String("Good Morning");
let msg2 = "Good Morning"; // simpler way
```

### 🧪 String Methods:

| Method                  | Usage                | Example               | Output         |
| ----------------------- | -------------------- | --------------------- | -------------- |
| `length`                | Length of string     | `msg.length`          | `12`           |
| `toLowerCase()`         | Convert to lowercase | `msg.toLowerCase()`   | "good morning" |
| `toUpperCase()`         | Convert to uppercase | `msg.toUpperCase()`   | "GOOD MORNING" |
| `substring(start, end)` | Partial string       | `msg.substring(0, 4)` | "Good"         |
| `charAt(index)`         | Character at index   | `msg.charAt(5)`       | "M"            |

**📌 Telugu**:

* `substring()` అనేది స్ట్రింగ్ నుండి కొన్ని అక్షరాలు తీసుకోవడానికి.
* `charAt()` అంటే index ఆధారంగా ఒక అక్షరం తీసుకోవడం.

---

## 📦 3. JSON Object in JavaScript

### 🎯 Purpose:

Used to convert between string and object formats. Very useful in APIs and data exchange.

### 🔁 Object to String (Stringify):

```js
let student = { name: "Ravi", age: 20, college: "IIT" };
let jsonString = JSON.stringify(student);
console.log(jsonString);
```

🟢 Output: `"{"name":"Ravi","age":20,"college":"IIT"}"`

---

### 🔄 String to Object (Parse):

```js
let obj = JSON.parse(jsonString);
console.log(obj);
```

🟢 Output:

```js
{ name: "Ravi", age: 20, college: "IIT" }
```

**📌 Telugu Explanation**:

* `stringify()` => object ని string గా మార్చుతుంది.
* `parse()` => string ని object గా తిరిగి మార్చుతుంది.

---

## ✅ Final Note:

You covered:

* Number object: min/max values, infinity, conversions
* String object: string methods like `substring`, `charAt`, `length`
* JSON object: conversion between object ↔ string

---

## 📘 Coming Next:

You mentioned mixing all learned concepts into **practical programs** and then starting **DOM manipulation**.

Would you like me to:

1. Create **PowerPoint slides** or **PDF notes** from this?
2. Give **interview questions** based on this video?
3. Write **mini programs** combining these objects?

Let me know!

*/




/*

Sure! Here's the **same explanation in English only**, clearly structured and based exactly on your video content.

---

## 🔢 1. Number Object in JavaScript

### ✅ Purpose:

Used to perform numeric operations, handle number limits, convert between strings and numbers, and deal with special values like `Infinity`.

### 💡 Common Properties:

```js
console.log(Number.MIN_SAFE_INTEGER);      // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log(Number.POSITIVE_INFINITY);     // Infinity
console.log(Number.NEGATIVE_INFINITY);     // -Infinity
```

---

### 🔄 String to Number Conversion

```js
let str = "100";
let num = Number.parseInt(str);  // Converts "100" to 100

let floatNum = Number.parseFloat("100.45"); // Converts to 100.45
```

* `parseInt()` extracts the integer part.
* `parseFloat()` keeps the decimal part.

---

### 🔁 Number to String Conversion

```js
let num = 100;
let str = num.toString(); // "100"

let amount = 1520;
let fixedAmount = amount.toFixed(2); // "1520.00"
```

* `toString()` converts a number to string.
* `toFixed(n)` formats the number to show `n` decimal places (commonly used for currency).

---

## 🔤 2. String Object in JavaScript

### 🔧 Declaring a String:

```js
let message = new String("Good Morning"); // Using object
let msg = "Good Morning";                // Preferred way
```

---

### 🔧 Useful String Methods:

| Method                   | Description                | Example               | Output         |
| ------------------------ | -------------------------- | --------------------- | -------------- |
| `.length`                | Returns length of string   | `msg.length`          | `12`           |
| `.toLowerCase()`         | Converts to lowercase      | `msg.toLowerCase()`   | "good morning" |
| `.toUpperCase()`         | Converts to uppercase      | `msg.toUpperCase()`   | "GOOD MORNING" |
| `.substring(start, end)` | Extracts part of string    | `msg.substring(0, 4)` | "Good"         |
| `.charAt(index)`         | Returns character at index | `msg.charAt(5)`       | "M"            |

### Example:

```js
let msg = "Good Morning";

console.log(msg.substring(0, 4)); // "Good"
console.log(msg.substring(5));   // "Morning"
console.log(msg.charAt(5));      // "M"
```

---

## 📦 3. JSON Object in JavaScript

### ✅ Purpose:

Used to convert between JavaScript objects and JSON-formatted strings (useful in APIs and data communication).

---

### 🔄 Convert Object to JSON String

```js
let student = {
  name: "Ravi",
  age: 20,
  college: "IIT"
};

let jsonString = JSON.stringify(student);
console.log(jsonString);
```

**Output:**

```json
{"name":"Ravi","age":20,"college":"IIT"}
```

---

### 🔄 Convert JSON String to Object

```js
let newStudent = JSON.parse(jsonString);
console.log(newStudent);
```

**Output:**

```js
{ name: "Ravi", age: 20, college: "IIT" }
```

---

## ✅ Summary of What You Learned:

### Number Object:

* Handle min/max values
* Convert between string ↔ number
* Handle Infinity
* Format with `toFixed()`

### String Object:

* Create strings
* Use helpful methods like `length`, `toLowerCase()`, `substring()`, `charAt()`

### JSON Object:

* Convert objects to strings using `JSON.stringify()`
* Convert strings back to objects using `JSON.parse()`

---

Would you like me to:

* Convert this into **PDF or PowerPoint** for your course?
* Give **interview questions** based on this lesson?
* Create a **small project** that uses these objects together?

Let me know how you'd like to proceed!

*/














