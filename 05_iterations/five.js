//foreach loop 
const coding = ["js","python","ruby","cpp","java"];
coding.forEach((item) => {
    // console.log(item);
});
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe);

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
});

//using foreach loop on array of objects
const myCoding = [
    {
        languageName: 'javascript',
        fileName: 'js',
    },
    {
        languageName: 'python',
        fileName: 'py',
    },
    {
        languageName: 'java',
        fileName: 'java',
    }
]
myCoding.forEach((item) => {
    console.log(item.fileName);
});