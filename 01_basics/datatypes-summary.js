//  there are 2 types of datatypes:
//  1.primitive - (total 7) string,boolean,number,null,undefined,Symbol,BigInt
// Symbol is used when we have to pass an unique id eg:
const Id = Symbol('123');
const anotherId = Symbol('123');
console.log(Id === anotherId); //false 

// BigInt is used for large number and n is added as a suffix in the end of the number
const bigNumber = 123456789000000888888888888888888n

//  2.non-primitive || Reference(have place in memory for their storage) - Arrays,Objects and functions 
const heroes = ['Ironman', 'Captain America', 'SpiderMan', 'Thor', 'Hulk', 'AntMan', 'Doctor Strange'];
let myObj = {
    name: 'Vidhi',
    age: 25,
}
const myFunction = () =>{
    console.log('Hello world!')
}
myFunction();

// 2 types of memory : Stack and Heap
// primitive datatypes uses stack memory 
// non-primitive datatypes uses heap memory (memory is stored and used as reference, changes done in original value)


