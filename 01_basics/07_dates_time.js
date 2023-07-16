const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let createMyDate = new Date(2023,0,23,5,3); // array
let createMyDate = new Date("01-14-2023"); // in india we mostly follow mm-dd-yy date format 
// console.log(createMyDate.toDateString());
// console.log(createMyDate.toLocaleString());
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // gives time in milliseconds
// console.log(Math.floor(Date.now()/1000)); // converts time in seconds when divided by 1000
console.log(myDate.getMonth()+1); // month starts from 0 i.e 0 = jan, 1=feb etc 
console.log(myDate.getDay());
// myDate.toLocaleString('default', {
//     weekday: 'long',
// })
