// forin loop is used to iterate objects
const myObj ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
// console.log(`${key} is abbreviation of ${myObj[key]}`);
}

const arr = ['js','c++','ruby','swift'];
for (const key in arr) {
    console.log(arr[key]);
}