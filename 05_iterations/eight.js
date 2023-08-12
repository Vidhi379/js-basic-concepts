// reduce function, whenever we want to add so many numbers together it can be used
const myArr = [1, 2, 3];
const newArr = myArr.reduce((acc, currVal) => {
  //console.log(`accumulator is: ${acc} and currVal is ${currVal}`);
  return acc + currVal;
}, 0); // 0 is the initial value which is also the value of acc
//console.log(newArr);

const shoppingCart = [
  {
    courseName: "py course",
    price: 2000,
  },
  {
    courseName: "mobile dev course",
    price: 3000,
  },
  {
    courseName: "react course",
    price: 999,
  },
  {
    courseName: "js course",
    price: 1500,
  },
  {
    courseName: "data science course",
    price: 3000,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log('Rs.',totalPrice,);
