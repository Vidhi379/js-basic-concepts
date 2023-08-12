// for of loop  - mostly used for array iterations
const arr = [1,2,3,4,5];
for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"; // use for of loop for string datatype
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps in js
 const map = new Map(); // create a map object
 map.set('IN', 'India'); // similar to object has key value pairs here IN is key and India is Value 
 map.set('USA', 'United States of America');
 map.set('Fr', 'France');
 map.set('IN', 'India'); // unique values and data is displayed only orderwise

//  console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const myObj = {
    game1:'NFS',
    game2:'Spidermann',
}
for (const [key,value] of myObj) {
    console.log(key,':-',value);     // forof loop cannot be used to loop objects datatype
}