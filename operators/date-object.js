// Time is an important thing.We like to know the time a certain activity or event. 
// In JavaScript current time and date is created using JavaScript Date Object. 
// The object we create using Date object provides many methods to work with date and time.
// The methods we use to get date and time information from a date object values are started with
// a word get because it provide the information.
//     getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime(), getDay()


// Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object

const now = new Date()
console.log(now)

// Getting full year
// Let's extract or get the full year from a time object.

console.log(now.getFullYear())

// Getting month
// Let's extract or get the month from a time object.

console.log(now.getMonth()) // 0, because the month is January,  month(0-11)

// Getting date
// Let's extract or get the date of the month from a time object.

console.log(now.getDate())

// Getting day
// Let's extract or get the day of the week from a time object.

console.log(now.getDay())

// Getting hours
// Let's extract or get the hours from a time object.

console.log(now.getHours())

// Getting minutes
// Let's extract or get the minutes from a time object.

console.log(now.getMinutes())

// Getting seconds
// Let's extract or get the seconds from a time object.

console.log(now.getSeconds())

// Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

console.log(now.getTime())