// Strings are texts, which are under single, double, back - tick quote.To declare a string, 
// we need a variable name, assignment operator, a value under a single quote, double quote, 
// or backtick quote.Let's see some examples of strings:

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// String Concatenation

// Connecting two or more strings together is called concatenation. Using the strings declared in the previous String section:

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);