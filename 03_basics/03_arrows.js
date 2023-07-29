// const user = {
//     username :"Vidhi",
//     price: 999,
//     welcomeMsg: function(){
//         console.log(`${this.username}, welcome to Atyantik Technologies`);
//         console.log(this); // prints the updated object value 
//     }
// }    
// user.welcomeMsg();
// user.username = "bhavya";
// user.welcomeMsg();
// console.log(this); // empty obj 

// const chai = () =>{
//     let username ="chai"
//     console.log(this);
// }

// chai(); 

//Arrow Functions 
// explicit return function, return keyword is necessary!
// const addTwo = (num1, num2) =>{
// return num1 + num2   // embedded in curly braces then return statement we have to write  
// }
// implicit return function is used when we have to return only one statement 
const addFunc = (num1,num2) => (num1 + num2); // if statement embedded in parenthesis no need to write return statement

console.log(addFunc(10,20));

const newObj = (n1,n2) => ({username: 'Vidhi', bdate: (n1+n2)})
console.log(newObj(3,4));