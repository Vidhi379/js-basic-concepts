// Arrays
// 2 ways of defining n array 
const myArr = [1,2,3,4,5,6,'vidhi','bhavya',true,]; // arrays can contains elements with different datatypes, it is used for storing collection of data
// () -> parenthesis, {} -> curly braces, [] -> square brackets
const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2);
// console.log(myArr[0]); // used to find the value on 0th index in array 

// Array methods
// myArr2.push(6); // adds elements in an array
// myArr2.push(7); //
// myArr2.pop() // removes the last element from array
// myArr2.unshift(9,10) // adds elements to start of the array 
// myArr2.shift(); // removes the first element from the array 
// console.log(myArr2);
// console.log(myArr2.includes(9)); // boolean gives answer in true or false
// console.log(myArr2.indexOf(9)); // if the element is not present in the array it will give -1 as o/p 
// const newArr = myArr2.join(); // converts array into string data type 
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
const myArr3 = [1,2,3,4,5,6,7,8];
console.log('A ', myArr3); // Original array value 
let myn1 = myArr3.slice(1,4); // doesn't included the 4th index(last value defined) element 
console.log('B ', myArr3); // ARRAY VALUE AFTER USING SLICE METHOD
console.log(myn1);

let myn2 = myArr3.splice(1,4); // it includes the 4th index (last value defined) element
console.log('C ', myArr3); // original value of array is changed the elements which are spliced are removed (array manipulated)
console.log(myn2);