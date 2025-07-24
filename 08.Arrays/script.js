/* /* // Cration of an Array
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






 */



// Functions of  Arrays

// Shift() -> remove the first elemnet  from Array
console.log('---------------------- Shift()-----------------------')
let technologies = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies);

technologies.shift();
console.log(technologies);



// unshift() ->  add the first element to array
console.log('---------------------- unshift()-----------------------')
let technologies1 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies);

technologies.unshift('Node js');
console.log(technologies1);



//Push() ->  add the last element to array
console.log('---------------------- Push()-----------------------')
let technologies2 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies);

technologies.push('Node js');
console.log(technologies2);



//Pop() -> remove the last element from Array
console.log('---------------------- unshift()-----------------------')
let technologies3 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies);

technologies.pop();
console.log(technologies1);




// sort() -> to sort the Array in Ascending order
console.log('---------------------- sort()-----------------------')
let technologies4 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies);

technologies.sort();
console.log(technologies1);



// reverse() -> to remove  the Array elements
console.log('---------------------- reverse()-----------------------')
let technologies5 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies5);


technologies5.reverse();
console.log(technologies5);



//reverse order of elements

console.log('---------------------- reverse order -----------------------')
let technologies6 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies6);

technologies6.sort().reverse();
console.log(technologies6);



//splice() -> to remove/ replace from the middle
//splice(index)-> it Removes all the elements  from the given index

console.log('---------------------- splice(index)-----------------------')
let technologies7 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies7);

//technologies.splice(index);
technologies.splice(2); // js to bootstrap all are removed
technologies.splice(0);// All elements are removed
console.log(technologies7);



// Way of Two => in Splice()method
//splice(index,no-of elements) -> it Removes the given no of  elements from the given Index

console.log('---------------------- splice(index)-----------------------')
let technologies8 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies7);

technologies8.splice(2, 1); // Here 'Javascript'only Removed

technologies8.splice(2, 2); // here 'javascript' and 'Jquery' both are Removed
console.log(technologies);



//splice(index,1, replaace Element) -> it replaces  the given element  at the given index

console.log('---------------------- splice(index)-----------------------')
let technologies9 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies9);
technologies9.splice(2, 1, 'Nodejs');
technologies9.splice(4, 1, 'ReactJs'); // Replaced into Bootstrap;
console.log(technologies9);


//join()-> to Join  the Array elements to string

console.log('---------------------- join() -----------------------');

technologies10 = ['html', 'Css', 'Javascript', 'Jquery', 'bootstrap'];
console.log(technologies10);
let techString = technologies.join(" _ ");
let techString1 = technologies.join(" * ");//separater
console.log(techString);

console.log('---------------------- split() -----------------------');
//split() -> to split a string  to an Array

console.log(techString);

//let newTechs = techString.split(separator: '_');
console.log(newTechs);




//Filter the junior Employees : age <= 30;
console.log("----------------------filter()---------------");
juniorEmployee = [];
for (let employee of employees) {
	if (employee.age <= 30) {
		juniorEmployees.push(employee);
	}
}

console.log(juniorEmployees);

// based on above code are same but little bit of logic

let jrEmployees = employees.filter(function () {

	return employee.age <= 30;

});

console.log(jrEmployees)




console.log("----------------------filter()---------------");
// filter  active employees : isActive : true

let activeEmployees = [];

for (let employee of employees) {
	if (employee.isActive) {
		activeEmployees.push(employee);
	}
}

console.log(activeEmployees)



let activeEmployees = employee.filter(function (employee) {
	return employee.isActive;
});
console.log(activeEmployees) */