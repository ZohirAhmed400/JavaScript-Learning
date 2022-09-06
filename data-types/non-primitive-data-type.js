// Non - primitive data types in JavaScript includes:

// 1 - Objects
// 2 - Arrays

// Example 01

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

// Example 02

let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums1 == numbers)

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo)

// Example 03

let number01 = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let number02 = number01

console.log(number01 == number02)

