/*----------
Print the values from 0-10 diff by 1

*/

/*
//1
for (let i = 0; i <= 10; i++) {
	console.log(i)
}

//2

let result = " ";

for (let i = 0; i <= 10; i++) {
	result = result + i;
}

console.log(result);

//3


let result1 = " ";

for (let i = 0; i <= 10; i++) {
	result1 += + i;  // remove + same result is came
}

console.log(result);



//4


let result2 = " ";

for (let i = 0; i <= 10; i++) {
	result2 += `${i} , `
}

console.log(result2);

*/


//5 remove comma before 9 only

/*
let result3 = " ";
for (let i = 0; i <= 10; i++) {
	if (i <= 9) {
		result3 += `${i} ,`;
	}

	else {
		result3 += `${i}`;
	}
}

console.log(result3);

*/


/*------------------- Print  the value  from 20-0 diff 2 -----*/

/*
result = '';
for (let i = 20; i >= 0; i -= 2) {

	console.log(i);

}


result = " ";
for (let i = 20; i >= 10; i -= 2) {
	if (i > 0) {
		result += `${i} , `;
	}

	else {
		result += `${i}`;
	}
}

console.log(result);

*/



/* --- Nested ForLoop ---------


*
**
***
****
*****

*/


/*
let number = 5;
for (let i = 0; i <= number; i++) {
	console.log('*');
}



let number1 = 5;
result4 = " ";
for (let i = 0; i <= number1; i++) {
	for (let j = 1; j <= i; j++) {
		result4 += '*'
	}
	result4 += `\n`;
}


console.log(result4)



/*

1)
1
12
123
1234
12345

2)

1
22
333
4444
55555

3)
12345
1234
123
12
1

4)
55555
4444
3333
22
1

*/

// Example -1  
/*
1
12
123
1234
12345

*/


result = " ";

for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= i; j++) {
		result += `${i}`;
	}

	result += `\n`
}

console.log(result);



// Example -2
/*

1
22
333
4444
55555

*/

result = " ";

for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= i; j++) {
		result += `${j}`;
	}

	result += `\n`
}

console.log(result);


// Example -3
/*
12345
1234
123
12
1
*/


result4 = '';
for (let i = 5; i >= 1; i--) {
	for (let j = 1; j <= i; j++) {
		result4 += `${j}`;

	}
	result4 += `\n`;
}

console.log(result4);



// Example -4
/*

55555
4444
3333
22
1
*/

result5 = '';
for (let i = 5; i >= 1; i--) {
	for (let j = 1; j <= i; j++) {
		result5 += `${i}`;

	}
	result5 += `\n`;
}

console.log(result5);