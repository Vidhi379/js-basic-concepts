// function addNumbers(num1,num2){
//  return num1 + num2; 
// }

// const result = addNumbers(3,4);
// console.log(result);

// function loggedInUser(username){
//     if(!username){         // if username value doesn't exist or is undefined then this code will be exececuted
//         return 'Please Enter Username'
//     }
//   return `${username} logged in`
// }

// console.log(loggedInUser("Vidhi"));
// console.log(loggedInUser()); // if no value is passed in the parameter it returns undefined value 

// function calculateCartPrice(...num1){   //spread operator is used to bundle all the passed parameters to single array i.e [200,300,400,500,600]
//   return num1
// }

 // use of rest/spread operator in function
function calculateCartPrice(val1 ,val2, ...num1){   //spread operator is used to bundle all the passed parameters to single array i.e [200,300,400,500,600]
    return num1
  }
console.log(calculateCartPrice(200,300,400,500,600)); // here [400,500,600] will come as o/p because the first 2 values will be given to val1 and val2 variables

// passing an object as a function parameter
function handleObject(anyObject){
 console.log(`Username is ${anyObject.userName} and price of product is ${anyObject.price}`)
}

handleObject({
  userName: 'Vidhi',
  price: 400,
})

// passing an array as a function parameter
function returnSecondValue(getArray){
 return getArray[1];
}

console.log(returnSecondValue([200,300,400,500]));