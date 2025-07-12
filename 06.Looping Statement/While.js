/*--- Print the  Values  from 0-10-  diff -1 ----*/

// let i = 0;  // inlizations
// while (i <= 10) {  // Condtions
// 	console.log(i);
// 	i++; // Increment and Decrement

// }

//Example -1

// let result = " ";
// let i = 0;
// while (i <= 10) {
// 	result += `${i} ,`;
// 	i++;
// }

// console.log(result);;

// Remove comma (,)

/*
let result = " ";
let i = 0;
while (i <= 10) {
	if (i <= 9) {
		result += `${i} , `;
	}
	else {
		result += `${i}`;
	}
	i++;

}

console.log(result);


*/


/*----- Print the Values  from 20-0 diff 2 -------*/


/*
result = '';
i = 20;
while (i >= 0) {
	if (i > 0) {
		result += `${i},`;
	}

	else {


		result += `${i}`;
	}
	i -= 2;
}

console.log(result);

*/


/*

let number = 5;
result = " ";

i = 1;
while (i <= number) {
	for (let j = 1; j <= i; j++) {
		result += '*'
	}
	result += `\n`;
	i++;
}

console.log(result);
*/

/*
let number = 5;
result = " ";

i = 1;
while (i <= number) {
	let j = 1;
	while (j <= i) {
		result += `*`
		j++;
	}


}
result += `\n`;
i++;

console.log(result);


*/

/*
result = " ";
i = 1;
while (i <= 5) {
	let j = 1;
	while (j <= i) {
		result += `${j}`;
		j++;

	}
	result += `\n`
	i++;
}

console.log(result);
*/


/*

result = " ";
i = 1;
while (i <= 5) {
	let j = 1;
	while (j <= i) {
		result += `${i}`;
		j++;

	}
	result += `\n`
	i++;
}

console.log(result);
*/


result = " ";
i = 5;
while (i >= 1) {
	let j = 1;
	while (j <= i) {
		result += `${i}`;
		j++;

	}
	result += `\n`;
	i--;
}
console.log(result);
