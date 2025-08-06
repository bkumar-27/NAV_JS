//window -> type in console all window Objects are came

/*

let h1Tag = document.querySelector('#msg-1');
h1Tag.innerText = "Hello Good Morning"
console.log(h1Tag);


*/

// let sayGoodMorning = function () {

// }


/*
let sayGoodMorning = () => {
	let h1Tag = document.querySelector('#msg-1');
	h1Tag.innerText = "Hello Good Morning"
	h1Tag.style.backgroundColor = 'limegreen';
	h1Tag.style.padding = '15px';
	h1Tag.style.boxShadow = '0 0 10px black';


};
// sayGoodMorning()


let sayGoodAfterNoon = () => {
	let h1Tag = document.querySelector('#msg-1');
	h1Tag.innerText = "Hello sayGoodAfterNoon"
	h1Tag.style.backgroundColor = 'orangered';
	h1Tag.style.padding = '15px';
	h1Tag.style.boxShadow = '0 0 10px black';


};



let sayGoodEvening = () => {
	let h1Tag = document.querySelector('#msg-1');
	h1Tag.innerText = "Hello sayGood Evening"
	h1Tag.style.backgroundColor = 'orangwhite';
	h1Tag.style.padding = '15px';
	h1Tag.style.boxShadow = '0 0 10px black';


};


let sayGoodNight = () => {
	let h1Tag = document.querySelector('#msg-1');
	h1Tag.innerText = "Hello say GoodNight"
	h1Tag.style.backgroundColor = 'black';

	h1Tag.style.padding = '15px';
	h1Tag.style.boxShadow = '0 0 10px black';


};

*/


// let sayGoodNight = () => {
// 	printWishMessage('')
// }

//print withMessage



let printWishMessage = (message, color) => {
	let h1Tag = document.querySelector('#msg-1');
	h1Tag.innerText = message;
	h1Tag.style.backgroundColor = color;

	h1Tag.style.padding = '15px';
	h1Tag.style.boxShadow = '0 0 10px black';


};





//  Event Listeners in javascript
/*
1). Get The  HTML Element / Tag
2). Attach  an event to the element/Tag
3). write a function for event handling
*/



// Good Morning button

let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function () {
	// alert('GM button is Clicked')
	printWishMessage('Good Morning', 'limegreen');

});



// Good Aftenoon button

let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function () {
	// alert('GM button is Clicked')
	printWishMessage('Good AfterNoon', 'orangered');

});



// Good Evening button

let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function () {
	// alert('GM button is Clicked')
	printWishMessage('Good Evening', 'purple');

});


// Good Night button

let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function () {
	// alert('GM button is Clicked')
	printWishMessage('Good Night', 'black');

});


