// Date Object

let date = new Date();
console.log(date);  //Sun Aug 03 2025 13:38:16 GMT+0530 (India Standard Time)

// proper Date

let currentDate = new Date().toLocaleDateString();
console.log(currentDate); // 8/3/2025


// Proper Time

let currentTime = new Date().toLocaleTimeString();

console.log(currentTime); //1:42:42 PM

//USA Date

let options = { timeZone: 'America/New_York' };
let usaDate = new Date().toLocaleDateString('en-us', options);
console.log(usaDate)  //8/3/2025



//USA  Time

options = { timeZone: 'America/New_York' };
let usaTime = new Date().toLocaleTimeString('en-us', options);
console.log(usaTime);  // 4:24:13 AM


//Today

let day = new Date().getDay();
let today = "";
switch (day) {
	case 0:
		today = 'sunday';
		break;
	case 1:
		today = 'Monday';
		break;
	case 2:
		today = 'Thuseday';
		break;
	case 3:
		today = 'Wednesday';
		break;
	case 4:
		today = 'Thurseday';
		break;
	case 5:
		today = 'Friday';
		break;
	case 6:
		today = 'saturday';
		break;
}


console.log(`Today is : ${today}`);  // Today is : sunday



// Month

let currentMonth = new Date().getMonth();
console.log(currentMonth); // 7



// custom Date

let c_date = new Date().getDate();
let c_month = new Date().getMonth() + 1;
let c_year = new Date().getFullYear();

console.log(`${c_date}- ${c_month}- ${c_year}`); //3-7- 2025

console.log(`${c_date} * ${c_month}- ${c_year}`);

console.log(`${c_date}/ ${c_month}- ${c_year}`);





