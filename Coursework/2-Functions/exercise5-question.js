/* 
We have written code below that does the same thing 3 times.

We should REFACTOR this code.

We should write a function, and call the function 3 times.

The results should stay THE SAME
*/
function repeatGreeting(Hello, firstName, surname){
    let volume = "Hello " + firstName + " " + surname;
    return volume;
}

let firstName1 = "Katrina";
let surname1 = "Lake";
// Change the line below to call your function!
let greeting1 = repeatGreeting("Hello", firstName1, surname1)

let firstName2 = "Eric";
let surname2 = "Yuan";
// Change the line below to call your function!
let greeting2 = repeatGreeting("Hello", firstName2, surname2)

let firstName3 = "Jeff";
let surname3 = "Bezos";
// Change the line below to call your function!
let greeting3 = repeatGreeting("Hello", firstName3, surname3)

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);
