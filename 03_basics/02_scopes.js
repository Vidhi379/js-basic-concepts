// variable declaration 
// let a = 10;
// const b = 20;
// var c = 30;

// scope - everything inside {} is known as scope 

// var c = 300; // variables declared outside the functions if else statements are inside global scope
// let a = 300; 

// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("INNER:", a);  
//     // var c = 30;  // variables declared inside if else statement or function are inside block scope  
// }
// console.log(a);
// console.log(b);
// console.log(c); // c values get printed although it is inside the if scope that is why var is not used 

// nested scopes 
// function one(){
//     const username = "vidhi"
//     function two(){
//         const website = 'abc.com'
//         console.log(username); // username can be accessed because for two() one() is the global scope 
//     }
//     // console.log(website); // -> variable is inside block scope cannot be accessed outside the function 
//     two() 
// }
// one();

// if(true){
//     const username = "vidhi";
//     if(username === "vidhi"){
//         const website = " Youtube"
//         console.log(username + website);
//     }
//     console.log(website); // cannot access this variable outside the inner if scope
// }
// console.log(username); // cannot access this variable outside the main if scope 

//Hoisting
console.log(addOne(5));  // accessing function before its declaration doesn't gives any error
 function addOne(num){
  return num + 1;
 }

 console.log(addTwo(5)); // accessing function before its declartion gives error because it is stored in a variable
const addTwo = function(num){
    return num + 2;
}
//Cannot access 'addTwo' before initialization


