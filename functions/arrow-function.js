// Arrow Function
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

function square(n) {
    return n * n
}

console.log(square(2))

const squares = m => {
    return m * m
}

console.log(squares(2))