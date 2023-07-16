const score = 400;
// console.log(score);

const balance = new Number(100); // declaring as an object 
// console.log(balance.toString().length); // converts number datatype to string and then finds the length of the string
// console.log(balance.toFixed(2));
const anotherNumber = 1123.844
// console.log(anotherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // by default applies comma to the number based on US standards
// console.log(hundreds.toLocaleString('en-IN')); // applies comma to the number based on Indian number system standards

// ++++++++++++++++++++ MATHS +++++++++++++++++++++ //
// console.log(Math); 
// console.log(Math.abs(-5)); // converts negative value number into positive number 
// console.log(Math.round(12.3)); // round off number to 12
// console.log(Math.round(12.5)); // round off number to 13
// console.log(Math.ceil(4.2)); // ceil = ceiling = up (takes the upper nearby digit) i.e 5
// console.log(Math.floor(4.9)); // floor = down (takes the lower nearby digit) i.e 4
// console.log(Math.min(1,5,9,13)); // finds the minimum value from the given numbers
// console.log(Math.max(1,5,9,0)); // finds the maximum value from the given numbers
console.log(Math.random()); // gives random value between 0 to 1 
console.log(Math.floor(Math.random()*10) + 1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min +1) + min));