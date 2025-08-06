//keyup Events example

let textBox = document.querySelector('#username')
textBox.addEventListener('keyup', function () {
	// alert('entered a text')

	let textEntered = textBox.value;
	let messageElement = document.querySelector('#msg');
	messageElement.innerText = textEntered;

	// above logic shortcut only here 2 lines

	//document.querySelector('#msg').innerText = textEntered;


});

