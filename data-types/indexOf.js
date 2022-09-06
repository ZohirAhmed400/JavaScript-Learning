// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

let string = "hello world"
console.log(string.indexOf("world"))  // 6
console.log(string.indexOf("World"))  // -1

// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

let string1 = "hello world, i am using JavaScript"
console.log(string1.lastIndexOf("using"))