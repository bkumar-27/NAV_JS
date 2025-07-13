// Cration of an Array
// Array : an indexed collection  of elements (object/string/array/boolean/number)
// Every Array is an Object


let a = 10;
let b = 20;
let c = 30;

let numbers = [10, 20, 30];
console.log(typeof numbers); //object


//console.log(numbers.0) // Not Accepted in Array
console.log(numbers['0']); // Yes its Accepted o/p : 10
console.log(numbers[0]);//yes its all Accepted  o/p :10


//access the elements of an Array
console.log(numbers[2]); //30

//access  the non-existing
console.log(numbers[3]); // Undefined


//Iteration of Array elements

let colors = ['white', 'black', 'silver', 'purple', 'blue', 'yellow'];

//1.normal for-loop
for (let i = 0; i <= colors.length - 1; i++) {

	console.log(colors[i]);
}


let result = " ";

for (let i = 0; i <= colors.length - 1; i++) {
	result += `${colors[i]} `;

}

console.log(result);



// 2. for-in loop from ES5

result = " ";
for (let a in colors) {
	console.log(a);
}

// for-of

result = " ";
for (let a of colors) {
	console.log(a);
}


result = " ";
for (let index in colors) {
	console.log(a);
}


result = " ";
for (let index in colors) {
	result += `${colors[index]} `;
}
console.log(result);


//3 for -of loop in ES6 its a new version

result = " ";
for (let color of colors) {
	result += `${color} `;
}

console.log(result);


// 4.forEach functions  upto ES5

result = " ";
colors.forEach(function (color) {

	result += `${color}`;
});
console.log(result);


//5. forEach with Arrow function from ES6

result = " ";
colors.forEach((color) => {

	result += `${color} `;
});

console.log(result
);

//arrow function write a shotcut way

result = " ";
colors.forEach(color => result += `${color} `);
console.log(result);

// Array of Objects

let employees = [
	{
		id: 1,
		name: 'John',
		age: 40,
		designatin: 'Manager',
		isActive: true

	},

	{
		id: 2,
		name: 'Willson',
		age: 46,
		designatin: 'sr.Manager',
		isActive: false

	},

	{
		id: 3,
		name: 'Rajana',
		age: 25,
		designatin: 'Software Engineer',
		isActive: true

	},
	{
		id: 4,
		name: 'Laura',
		age: 28,
		designatin: 'Tech Lead',
		isActive: false

	},
	{
		id: 5,
		name: 'David',
		age: 26,
		designatin: 'software Engineer',
		isActive: false

	},

];




//access all  employees

console.log(employees[0].name);

// iterate employees

for (let employee of employees) {
	console.log(employee.name);
}

// method-2
result = " ";
for (let employee of employees) {
	result += `${employee.name}`;
}

console.log(result);

//Filter the  junior  Employees : age <= 30

console.log(employees);


let juniorEmployees = [];
for (let employee of employees) {
	if (employee.age <= 30) {
		juniorEmployees.push(employee);
	}
}

console.log(juniorEmployees);


// filter Active Employees : isActive : true


let activeEmployees = [];
for (let employee of employees) {
	if (employee.isActive) {
		activeEmployees.push(employee);
	}
}

console.log(activeEmployees);






