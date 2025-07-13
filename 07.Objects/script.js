let cameraBrand = 'Canon';
let cameraPrice = 35000;
let cameraColor = 'black';
// java script Objects

let camera = {

	brand: 'Canon',
	price: 35000,
	color: 'black',
	mfg: 2019
};

console.log(camera);


// access  the Properties of an Object
console.log(camera.brand); // Canon

// access the non-existing property
console.log(camera.megaPixel); // undefined

//access  the properties using  dot , [] notation

console.log(camera.price); //35000
console.log(camera['price']); //35000

//for dynamic properties dot,[] notation

let prop = 'color';
console.log(camera.prop) // undefined
//accesing now
console.log(camera[prop]); // Black

let prop1 = 'mfg';  // hear Brand we can apply : canon is came
console.log(camera.prop1) // undefined
//accesing now
console.log(camera[prop1]); // 2019

//Nested Objects :  rember it object is One Big Box

let student = {
	name: 'Arjun Reddy',
	age: 23,
	course: 'MBBS',
	address: {
		street: 'Jubilee Hills',
		city: 'Hyderabad',
		state: 'TS'

	}
};

//acess the object
console.log(student);
//access the nested object
console.log(student.address);

//access  the Properties of an object

console.log(student.address.street);
// CRUD  Operations  with an Object

// CREATE  Operation

let mobile = {}
mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = false;

console.log(mobile); // empty object {}



//READ Operation
console.log(mobile.brand);  // Apple


//Update Operation 

console.log(mobile.price) // 35000

mobile.price = 45000;
console.log(mobile);


// delete  Operation

delete mobile.isInsured;
console.log(mobile);











