const userLoggedIn = true
const debitCard = true
const logInUsingGmail = true
const loginUsingPhoneNumber = false

// if(userLoggedIn && debitCard){
//     console.log("You can start shopping!")
// } // this is true so sentence will be seen in console
if(userLoggedIn && debitCard && 2===3){  // if any one of the expression is wrong it will return false as o/p i.e no o/p
    console.log("You can start shopping!")
} 

if(loginUsingPhoneNumber || logInUsingGmail || false){  // if any one of the expression is true it will return the console statement
    console.log("User logged in");
}
