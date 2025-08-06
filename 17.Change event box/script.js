//change  event on Select Box

let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function () {
	// alert('selected an option');

	let selectedOption = selectBox.value;
	let languageOptionEL = document.querySelector('#lang-option');
	languageOptionEL.innerText = selectedOption;

});