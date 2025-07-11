/*------ Javascript Operators -----

-> Assignment Operators : =
1.Arithmatic Operators : + - / * %

2. short  hand math  Operators : += , -=,/=,*=

3. Conditional Operators : <,>,<=,>=, !==

4.Unary Operators : ++ , --

5.Logical Operators :  &&,||,^

6. Ternary Operators : ?:

7.Equality Operators : == , ===

*/

// Assignment operator :  =
let test = 10;
console.log(test);


//1.Arithmatic Operators : + - / * %

let num1 = 10;
let num2 = 20;
console.log(`Sum :${num1 + num2}`);
console.log(`Sub :${num1 - num2}`);
console.log(`Mul :${num1 * num2}`);
console.log(`Mul :${num1 / num2}`);

// Find the Number  is Even or Odd

let number = 3;
if (number % 2 === 0) {

	console.log(`${number} is an Even Number`);
}
else {
	console.log(`${number} is an Odd Number`);
}



//2. short  hand math  Operators : += , -=,/=,*=
/*
let a = 10;
let b = 30;

let add = 10;

add = add + (a + b);

add += (a + b);

console.log(add);  //60

*/

/*let a = 10;
let b = 30;
let add = 10;
add = add * (a + b);
add *= (a + b);
console.log(add);

*/

/*
let a = 10;
let b = 30;
let add = 10;
add = add / (a + b);
add /= (a + b);
console.log(add);

*/

/*
let a = 10;
let b = 30;
let add = 10;
add = add - (a + b);
// add -= (a + b);
console.log(add);

*/

let a = 20;
let b = 30;
let add = 10;
add = add + (a + b); // 10+20+30 => 60
add += (a + b);  // 60+20+30 =>110
console.log(add);



// 3. Conditional Operators : <,>,<=,>=, !== 
/*
let marks = 75; //25

if (marks <= 35) {
	console.log('You Failed the Exam')
}

else {
	console.log('You Cleared The Exam ')
}

*/


let marks = 35; //25

if (marks = 35) {
	console.log('You Failed the Exam') // You Failed the Exam  its a No < operator
}

else {
	console.log('You Cleared The Exam ')
}



//4.Unary Operators : ++ , -- means increment only once ,or decrement
/*
let x = 10;
x = x + 1;
x = + 1;
x++;
console.log(x);
*/

/*
let x = 10;
x = x - 1;
x -= 1;
x--;
console.log(x);
*/


// let x = 10;
// x = x + 1;
// x += 2;
// // x++;
// console.log(x);



let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);


let y = 20;
console.log(y);





/*-------------------------

Here are the **best and most commonly asked examples** of **Equality Operators** in JavaScript, with clear explanations 👇:

---

## 🔁 **0. Equality Operators in JavaScript**

| Operator | Name              | Checks       | Example       | Result  |
| -------- | ----------------- | ------------ | ------------- | ------- |
| `==`     | Loose Equality    | Value        | `5 == "5"`    | ✅ true  |
| `===`    | Strict Equality   | Value + Type | `5 === "5"`   | ❌ false |
| `!=`     | Loose Inequality  | Value        | `10 != "10"`  | ❌ false |
| `!==`    | Strict Inequality | Value + Type | `10 !== "10"` | ✅ true  |

---

### ✅ **Example 1: Loose Equality (`==`)**

```js
console.log(5 == '5'); // true
```

> 💡 JavaScript converts the string `'5'` to number `5` before comparing.

---

### ✅ **Example 2: Strict Equality (`===`)**

```js
console.log(5 === '5'); // false
```

> 🚫 No type conversion. A number is not strictly equal to a string.

---

### ✅ **Example 3: Loose Inequality (`!=`)**

```js
console.log(10 != '10'); // false
```

> Because `10` is loosely equal to `'10'`, `!=` returns false.

---

### ✅ **Example 4: Strict Inequality (`!==`)**

```js
console.log(10 !== '10'); // true
```

> Strict comparison fails due to different types.

---

### ✅ **Example 5: Equality with Boolean**

```js
console.log(true == 1);    // true (boolean coerced to number)
console.log(false == 0);   // true
console.log(true === 1);   // false (different types)
```

---

### ✅ **Example 6: Null & Undefined**

```js
console.log(null == undefined);  // true (special case)
console.log(null === undefined); // false
```

---

## 🎯 Best Practice:

> Always use `===` and `!==` in real-world JavaScript code to **avoid unexpected type coercion**.

---

## 💬 Interview Question:

**Q: What is the difference between `==` and `===` in JavaScript?**
**A:** `==` checks only value (and does type coercion), while `===` checks both value and type without type conversion.

---

Would you like a **codepen**, **PDF**, or **quiz** for these examples?

*/





//5.Logical Operators :  &&,||,^

/*

AND => T && T -> T
OR  => F || F -> F
XOR  => T^F, F^T ->T

*/

/*
let inRealation = true;
let parentsAgreed = false;

if (inRealation && parentsAgreed) {
	console.log('Get Marry Soon');
}

else {
	console.log(`wait until the parents Agreed`)
}
	*/


let inRealation = true;
let parentsAgreed = true;

if (inRealation && parentsAgreed) {
	console.log('Get Marry Soon');       // Get Marry soon bz of AND is 2 condtions True = True
}

else {
	console.log(`wait until the parents Agreed`)
}




// Ternary Operator ?:

/*

syntax: (condition) ? true : false;


*/
/*
marks = 65
let message = " ";
(marks <= 35) ? message = 'You Failed  the Exam' : message = 'You cleared the Exam';
console.log(message)
*/


marks = 25
let message = " ";
(marks <= 35) ? message = 'You Failed  the Exam' : message = 'You cleared the Exam';
console.log(message)



// Equality Operator : == , ===
/*
a = 10;
b = 20;    //a= 10 o/p : Both are Equal

if (a == b) {

	console.log('Both are Equal')
}

else {
	console.log('Both are Not Equal');
}

*/


a = 10;
b = '20';

if (a == b) {

	console.log('Both are Equal')
}

else {
	console.log('Both are Not Equal');
}




a = 10;
b = '20';

if (a === b) {

	console.log('Both are Equal')
}

else {
	console.log('Both are Not Equal');
}



