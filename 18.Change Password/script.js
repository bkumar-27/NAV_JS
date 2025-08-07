let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function () {

	// alert('check the checkbox');

	// passwordBox.setAttribute('type', 'text');

	let typeAttribute = passwordBox.getAttribute('type')

	if (typeAttribute === 'password') {
		passwordBox.setAttribute('type', 'text');
	}

	else {
		passwordBox.setAttribute('type', 'password');
	}


});

/*
getAttribute('src')-> password
setAttribute('src','Youtube.jpg')-->

setAttribute('type','text') ->

<img src = "facebook.jpg">

<input type ="Password">

*/