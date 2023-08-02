// Immediately Invoked Function Expression (IIFE)
// name iife -> because the function has name and is not arrow function
(function chai(){
    console.log('I am having a headache need to drink tea');
})(); // we don't need to call the function separately  
// unnamed iife (annonymus arrow function)
((name)=>{
    console.log(`Hi my name is ${name}`);
})('Vidhi') // function parameters passed here only 
