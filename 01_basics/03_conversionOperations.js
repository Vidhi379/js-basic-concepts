// let score = "33abc"
// let score = null; 
// let score = undefined;
let score = true;

// console.log(typeof score);

let valueInNumber = Number(score); // null -> 0 , undefined -> NAN, boolean -> Number,
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NAN (not a number), 1 for true and 0 for false

let isLoggedIn = "";
let checkBooleanValue = Boolean(isLoggedIn);
// console.log(checkBooleanValue);

// 1 => true 0 => false
// "" => false 
// "vidhi" => true (value inside string then true if empty string then false)

let someNumber = 33;
let convertToStr = String(someNumber);
console.log(convertToStr);
// number gets converted to string datatype
