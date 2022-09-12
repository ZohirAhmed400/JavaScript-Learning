// Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log(). 
// To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop. 
// If you prefer watching the videos, you can checkout the video tutorials

// In programming languages to carry out repetitive task we use different kinds of loops. 
// The following examples are the commonly used loops in JavaScript and other programming languages.

// For Loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let j = 5; j >= 0; j--) {
    console.log(j)
}

for (let k = 0; k <= 10; k++) {
    console.log(`${k} * ${k} = ${k * k}`)
}

let countries = ["Pakistan", "India", "China", "Australia", "New Zeland"]
let myArr = []
for (let i = 0; i < countries.length; i++) {
    myArr.push(countries[i].toUpperCase())
    console.log(myArr)
}

let num = [1, 2, 3, 4, 5]
let myNum = []
for (let i = 0; i < num.length; i++) {
    myNum.push(num[i] ** 2)
    console.log(myNum)
}