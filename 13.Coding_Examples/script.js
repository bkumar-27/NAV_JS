// 1. Find  the number  of  'O' in the given string

let msg = "Good Morning";

let FindZeros = (str) => {
	let count = 0;

	for (let i = 0; i <= str.length - 1; i++) {
		let char = str.charAt(i);

		if (char === "o" || char === "O") {
			count++;
		}
	}
	return count;
};

console.log(`The Zeros in Strings is : ${FindZeros(msg)}`); // The Zeros in Strings is : 3

//2. Find the Reverse String of the given String

msg = "Good Morning"; // gninroM dooG

let reverseString = (str) => {
	let tempString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		let char = str.charAt(i);

		tempString += char;
	}

	return tempString;
};

console.log(`${msg} => ${reverseString(msg)}`); // Good Morning => gninroM dooG

// 3. check  the given string is palindrome or Not

msg = "ABA";
let isPalindrome = (str) => {
	if (str === reverseString(str)) {
		return true;
	} else {
		return false;
	}
};

console.log(`${msg}} is Palindrome ? ${isPalindrome(msg)}`); // true

// Method -2  Above PROGRAM but below Logic Reduce the code

msg = "ABAC";
let isPalindrome1 = (str) => {
	return str === reverseString(str);
};

console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`); // False

// str = Good
/*


G  -> str.substr(0,1)
Go -> str.substr(0,2)

Goo  -> str.substr(0,3)

Good  -> str.substr(0,4)


i =1;  i<=str.length

*/

// 4.Triangle String One

/* msg = "KUMAR BILLGATES";

let triangleOne = (str) => {
	let tempStr = "";

	for (let i = 1; i <= str.length; i++) {
		tempStr += `${str.substr(0, i)} \n`;
	}

	return tempStr;
};

console.log(triangleOne(msg)); */

/*

str = Good

Good -> str.substr(0)
 ood -> str.substr(1)
  od -> str.substr(2)
   d -> str.substr(3)

   i = 0 ; i<= length-1

*/

//5  Triangle  String Two

// 2nd step

let addSpace = (number) => {
	let tempSpace = "";

	for (let i = 1; i <= number; i++) { }
	return tempSpace;
};

// 1st step

msg = "NAVEEN SAGGAM";

let triangleTwo = (str) => {
	let tempStr = " ";
	for (let i = 0; i <= str.length - 1; i++) {
		tempStr += ` ${addSpace(i)} ${str.substr(i)} \n`;
	}

	return tempStr;
};

console.log(triangleTwo(msg));

// str = Good

/*

Good -> str.substr(0,4)
Goo  -> str.substr(0,3)
Go  ->  str.substr(0,2)
G   ->  str.substr(0,1)


i = 4 ,  i >= 1

i = length , i >= 1; i--
*/

// 5. Triangle String Three

let msg1 = "REYAN SOFT";

let triangleThree = (str) => {

	let tempStr = '';

	for (let i = str.length; i >= 1; i--) {

		tempStr += `${str.substr(0, i)} \n`;


	}

	return tempStr;


};

console.log(triangleThree(msg1));


// str = Good
/*

	   d -> str.substr(3)
	   od -> str.substr(2)
	   ood -> str.substr(1)
	   Good -> str.substr(0)
	   

		  i=length-1; i>=0;i--
*/
//6. Triangle  String Four

let msg2 = "MCA CODER";

let triangleFour = (str) => {

	let tempStr = '';

	for (let i = str.length - 1; i >= 0; i--) {

		tempStr += ` ${addSpace(i)} ${str.substr(i)} \n`;


	}

	return tempStr;


};

console.log(triangleFour(msg2));

