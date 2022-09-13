// Function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
// Both function declaration and arrow function can have a default value or values.

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))