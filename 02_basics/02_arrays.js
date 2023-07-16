const marvel_heros = ['Ironman', 'Thor', 'Spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];
// marvel_heros.push(dc_heros); // whole array is pushed inside an array as an element which will be the 3rd element of marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]); 
// const allHeros = marvel_heros.concat(dc_heros); // new array is formed having elements of the both the arrays 
// console.log(allHeros);

//spread operator (take a glass and leave it, all the pieces of glass will spread and act as an individual item)
//  const allHeros = [...marvel_heros, ...dc_heros]; // benefit of spread over concat is that it can merge any number of arrays whereas in concat only two arrays can be merged
//  console.log(allHeros);
// const another_Array = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]] // it is an array with array inside as elements 
// const real_Another_Array = another_Array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth or infinity
// console.log(real_Another_Array);

// console.log(Array.isArray("Hitesh")); // false not an array
// console.log(Array.from("Hitesh")); // this will convert the string hitesh into an array of string
// console.log(Array.from({name:'vidhi'})); // interesting topic will give an empty array
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3)); 