// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// }
// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log('5 is the best number')
//     }
//     console.log(index);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value is ${i}`);
//     for (let j = 0; j < 10; j++) {
//      console.log(`inner loop value is ${j} and outer loop value is ${i}`)
//     }
// }

// for (let i = 10; i <= 20; i++) {
//     for (let j = 1; j <= 10; j++) {
//        console.log(i+'*'+j + "=" + i*j);
//     }  
// }

const myArray = ['ironman', 'batman', 'superman', 'captian america', 'thor', 'Hulk'];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// for (let i = 0; i <= 20; i++) {
//     if(i==5){
//         console.log('detected 5');
//         break; // loop breaks after 5 doesn't continue till 20 
//     }
//     console.log(i)
// }

for (let i = 0; i <=20; i++) {
    if(i == 5){
        console.log('5 detected');
        continue;
    }
    console.log(i);
}