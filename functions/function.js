// So far we have seen many builtin JavaScript functions. In this section, we will focus on custom functions.
// What is a function? Before we start making functions, lets understand what function is and why we need function?

// A function is a reusable block of code or programming statements designed to perform a certain task. 
// A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. 
// If a function take a parameter it will be called with argument. A function can also take a default parameter. 
// To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

// clean and easy to read
// reusable
// easy to test
// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function

// Function Declaration
// Let us see how to declare a function and how to call a function.

function functionName() {
}
functionName()

function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers()


function myName() {
    let firstName = "Zohir"
    let secondName = "Ahmed"
    let city = "Karachi"
    let country = "Pakistan"
    let space = " "
    let fullName = firstName + space + secondName + space + city + space + country

    console.log(fullName)
}
myName()

// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined. 
// Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function country() {
    let arr = ["Pakistan", "India", "USA", "UK", "Dubai"]
    return arr
}
console.log(country())