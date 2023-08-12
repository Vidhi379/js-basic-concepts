// array function Filter and Map 
// filter
const myNums = [1,2,3,4,5,6,7,8,9,10];
// let newNumArr = myNums.filter((num) => num > 5 );
// console.log(newNumArr);
// same o/p using foreach loop
let newNumArr = [];
myNums.forEach((item) => {
    if (item>5) {
        newNumArr.push(item);
    }
});

// console.log(newNumArr);

const books = [
    {bookName: 'book1', genre:'history', publishYear:1997},
    {bookName: 'book2', genre:'science', publishYear:2004},
    {bookName: 'book3', genre:'history', publishYear:2000},
    {bookName: 'book4', genre:'science', publishYear:1999},
    {bookName: 'book5', genre:'hostory', publishYear:2013},
];
let newbooks = books.filter((item)=> item.genre === 'history');
newbooks = books.filter((item)=>item.publishYear>=2000);
newbooks = books.filter((item)=>{
    return item.genre === 'science' && item.publishYear > 1997;
})
console.log(newbooks);