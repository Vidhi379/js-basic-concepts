const userEmail = "vidhi@gmail.com" 

if(userEmail){ // if there is some string value in variable then return true condition, and if there is empty string then false condition is rendered
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
const userList = []; 

if(userList){ // empty array returns true condition 
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values (returns false condition) : false, 0, -0, BigInt 0n, "", null, undefined, NaN 
// truthy values (returns true condition) : "0", "false", " " (space in string, is not empty string), [], {}, function(){} (empty function)

if(userList.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null,undefined

val1 = 5 ?? 10 // if the value is not null or undefined then left side (first value is printed) ?? and if the first value is null then left side value will be the o/p 
console.log(val1);
val2 = null ?? 13 // o/p will be 13
console.log(val2);
val3 = undefined ?? 15 // o/p will be 15
console.log(val3);

val4 = null ?? 10 ?? 20 // o/p will be 10
console.log(val4);

// ternary Operator
// condition ? true statement : false statement
const iceTeaPrice = 60;
iceTeaPrice >= 80 ? console.log("equal to 80") : console.log("less than 80");
