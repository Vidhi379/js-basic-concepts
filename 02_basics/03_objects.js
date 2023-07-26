// two ways to declare objects singleton and object literals
// singleton method also known as constructor method 
// Object.create

// object literals (object is a key value pair, in array we cannot define any key it takes by default from 0,1,2 etc)
const mySym = Symbol("key1"); //unique identity
const jsUser = {
    name: 'Vidhi',
    "fullname": 'Vidhi Shah',
    age: 18,
    location: 'Jaipur',
    [mySym]: 'mykey1',
    email: 'vidhii13121997@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    greeting: ()=>{console.log('hello js user!')}
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

// jsUser.email = 'vidhi@chatgpt.com' // change value of object
// console.log(jsUser.email);
// Object.freeze(jsUser); // cannot further modify the object once it gets freezed 
// jsUser.email = 'vidhi@microsoft.com'
// console.log(jsUser); 
// console.log(jsUser.greeting());

jsUser.greetingTwo = function (){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo());