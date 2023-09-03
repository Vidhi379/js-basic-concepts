// const promiseOne = new Promise((resolve, reject) => {
//   // promise is an object not a function
//   // Do an async task , DB calls, cryptography, network calls etc
//   setTimeout(() => {
//     console.log("Async Task is Complete!");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("Promise is consumed!");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task 2 is completed!");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved!");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ userName: "Chai", email: "chai@example.com" });
//   }, 1000);
// });
// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "chai", emailId: "chai@gmail.com" });
//     } else {
//       reject("ERROR: Something went wrong! Please try again...");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("promise is either resolved or rejected!!"));

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "chai", emailId: "chai@gmail.com" });
//     } else {
//       reject("ERROR: Something went wrong! Please try again...");
//     }
//   }, 1000);
// });
// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// https://jsonplaceholder.typicode.com/users/

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers();

// using promise then catch method, fetch method is one type of promise(resolve,reject):

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => {
    return response.json(); // the code will only run once the 1st then is completed, it will go to the next then in the chain (thenable/chainable)
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("E:", error);
  });
