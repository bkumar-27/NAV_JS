/*

Javascript Functions:
--------------------------------
Its a Block of Statements which taken in a set Parameters  and does some process and returns the result

-> re-usability..


*/

//print  from 0 -10 diff 1
/*
let result = " ";
for (let i = 0; i <= 10; i++) {
	result += `${i} `;
}
console.log(result);
*/
/*
function primeNumbers() {
	let result = " ";
	for (let i = 0; i <= 10; i++) {
		result += `${i} `;
	}
	console.log(result);
}
primeNumbers();// Function call/ execution

*/

// Parameters Noting but inputs

/*
function primeNumbers(endNumber) {
	let result = " ";
	for (let i = 0; i <= endNumber; i++) {
		result += `${i} `;
	}
	console.log(result);
}
primeNumbers(endNumber: 50); //function cal /Execution
primeNumbers(endNumber: 100); //function cal /Execution */


/*
function primeNumbers(startNumber, endNumber) {
	let result = " ";
	for (let i = startNumber; i <= endNumber; i++) {
		result += `${i} `
	}
	console.log(result);


}

primeNumbers(10, 50) //functional call / execution

primeNumbers(100, 500) //functional call / execution */

// increment by the value in 3 values pass the


/* function primeNumbers(startNumber, endNumber, increment) {
	let result = " ";
	for (let i = startNumber; i <= endNumber; i += increment) {
		result += `${i} `
	}
	console.log(result);


}

primeNumbers(startNumber: 10, endNumber: 50, increment: 5) //functional call / execution
primeNumbers(startNumber: 100, endNumber: 500 increment: 10) //functional call / execution */




// Functions without  Parameters
function greet() {
	console.log('Good Morning');  // Its Normal Function
}
greet();


// Function Expression
/* let name = function () {   // Here we can aply : string , number, array any thing we can apply

}


let greetMe = function () {
	console.log('Good Morning')
};

console.log(greetMe);  // here total function is came as it print

greetMe(); */




// function  with Parameters
/*
let wishMe = function (name, age) {
	let message = `Hello ${name} You are ${age} yrs old`;
	console.log(message);
};
// wishMe(name'john', age 40);
wishMe("john", 40);
wishMe("John")//o/p Hello John You are undefined yrs old

// Function  with return Type

let sum = function (a, b) {
	let result = 2 * (a + b);
	return result;
}
let output = sum(10, 20);
console.log(output); //60




// Function  with  an object  as Parameter

let printObject = function (obj) {
	console.log(obj);
};
printObject(obj = {
	name: 'Rajan', age: 20
});

let mobile = {
	brand: 'Apple',
	color: 'Silver',
	price: 35000
};

printObject(mobile);


//function  with an Array  as a parameter

let printArray = function (array) {
	let result = '';
	for (let index in array) {
		result += `INDEX : ${index} => VALUE : ${array[index]}  `;
	}
	console.log(result);

};

printArray(array = [10, 20, 30, 40]);




let colors = ['white', 'black', 'orange', 'purple'];
printArray(colors);



// function inside  an Object

let student = {
	firstName: 'Arujun',
	lastName: 'Reddy',
	fullName: function () {
		return 'Arjun Reddy ';

	}
};

console.log(student.firstName); // Arujun


// let date = (student.fullName);
// console.log(data);


// let data = fullName;
// console.log(student.data)

console.log(student.fullName);  // Total Function Return

console.log(student.fullName());  //Arjun Reddy  is come

// using This key word


let student1 = {
	firstName: 'Arujann',
	lastName: 'Redddy',
	fullName: function () {
		return `${this.firstName} ${this.lastName}`

	}
};

console.log(student1.fullName())//Arujann Redddy


// Nested  Function

let outerFn = function () {
	console.log('Iam an outer  Function');

	let innerFn = function () {
		console.log('Iam an inner Function')
	}

	innerFn(); // Iam an inner Function

};
outerFn(); //  Iam an outer



// method -2

let outerFn1 = function () {

	innerFn2(); // Uncaught ReferenceError: Cannot access 'innerFn2' before initialization
	console.log('Iam an outer  Function');

	let innerFn2 = function () {
		console.log('Iam an inner Function')
	}



};
outerFn1(); //  Iam an outer  Function





// Twisted  Function


let twistedFn = function () {
	let name = 'John';
	let printStudent = function () {
		let student = {
			name: 'Rajan',
			age: 20,
			course: 'CSE',

		};
		return student;

	}
	return printStudent;

};
let innerFn = twistedFn();
let startObj = innerFn();
console.log(studentObj.name); */



//Prepare chicken  Curry with  Functions


let glassBowel = function (rawChicken, masala) {
	// marinating  the Chicken

	let marinatedChiken = `MIXING : (${rawChicken} + ${masala})`;

	return marinatedChiken;




};

let cookingBowl = function (marinatedChiken, water) {

	//cooking logic
	let cookedChicken = `COOKING : (${marinatedChiken}+${water})`;

	return cookedChicken;
};

let eatingPlate = function (cookedChicken, rice) {
	// Eating Logic
	let eating = `EATING : (${cookedChicken}) + ${rice} `;

	console.log(eating);


}


let rawChicken = `3kg chicken`;
let masala = `Garlic,pepper,salt`;
let marinatedChiken = glassBowel(rawChicken, masala);
let water = `1Ltr Water`;

let cookedChicken = cookingBowl(marinatedChiken, water);
let rice = '1Kg Rice'

eatingPlate(cookedChicken, rice);






