// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function myFunction(num) {
    let myName = "Zohir"
    let myCountry = "Pakistan"
    let myData = myName + num + myCountry
    return myData
}
console.log(myFunction(" "))

// Function with two parameters

function twoParamFunction(space, num) {
    let theCity = ["Karachi", "Islamabad", "Lahore"]
    let theCountry = "Pakistan"
    let lengthOfCity = theCity.length
    let theData = theCity + space + theCountry + space + lengthOfCity + num
    return theData
}
console.log(twoParamFunction(" ", " "))

// Function with many parameters

function manyParamFunction(space, count, dots) {
    var backendLanguages = ["PHP", "Python", "C#", "Java"]
    var frontendLanguages = ["Angular", "React", "Vue", "HTML"]
    var BackendlanguageCount = backendLanguages.length
    var returnData = backendLanguages + space + frontendLanguages + space + count + space + BackendlanguageCount + dots
    return returnData
}
console.log(manyParamFunction(" ", "Length of Backend Languages", " .. "))