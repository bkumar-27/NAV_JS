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