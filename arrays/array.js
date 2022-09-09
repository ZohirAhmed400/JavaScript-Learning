// In contrast to variables, an array can store multiple values.Each value in an array has an index,
//     and each index has a reference in a memory address.Each value can be accessed by using their indexes. 
// The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

// An array is a collection of different data types which are ordered and changeable(modifiable). 
// An array allows storing duplicate elements and different data types.An array can be empty, or it may have different data type values.

// How to create an empty array

// In JavaScript, we can create an array in different ways. Let us see different ways to create an array. 
// It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that variable name again.

// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// Using square brackets([])
// syntax
// This the most recommended way to create an empty list
const arr1 = []
console.log(arr1)

// How to create an array with values
// Array with initial values. We use length property to find the length of an array.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const fruit = ["Banana", "Apple", "Graps", "Mango", "Nashpati"]

console.log(number, fruit)
console.log(number.length)