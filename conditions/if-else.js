// Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially
// from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

// Conditional execution: a block of one or more statements will be executed if a certain expression is true
// Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. 
// In this section, we will cover if, else , else if statements. 
// The comparison and logical operators we learned in the previous sections will be useful in here.
// Conditions can be implementing using the following ways:

// if
// if else
// if else if else
// switch
// ternary operator

// If
// In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. 
// To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// Example 01
let number = 1
if (number > 0) {
    console.log(`${number} is greater then 0`)
}

// Example 02
let program = true
if (program) {
    console.log("Program is run")
}