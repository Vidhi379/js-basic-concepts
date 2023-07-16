const name = 'Vidhi';
const age = 25;
console.log(`My name is ${name} and i am ${age} years old.`); // this is known as string interpolation

const gameName = new String('pubg-2'); // way of defining an object 
console.log(gameName); // this is an object (key value pair)
console.log(gameName[0]); // access the 0th key value 
console.log(gameName.__proto__); // {} -> object
// string functions/methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

const newString = 'travelling';
const substring = newString.substring(1,5);
// console.log(substring);
// console.log(newString.slice(-9,4));
const newStringOne = '     Vidhi     '
console.log(newStringOne);
console.log(newStringOne.trim()); // this function helps in removing extra whitespaces and line terminations
const url = 'https://hitesh.com/hitesh%20choudhary'; //(sometimes in url white space is replaced by %20 automatically)
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh')); // returns true if the substring is present in the given string
console.log(url.includes('vidhi')); // returns false if the substring is present in the given string

const stringTwo = 'vidhi-vs-com';
console.log(stringTwo.split('-'));// converts a string to array of strings based on the - (separator - whitespace etc)

