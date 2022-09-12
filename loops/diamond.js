let hash = 5
for (a = 1; a <= hash; a++) {
    for (b = 0; b < 2 * a - 1; b++) {
        process.stdout.write("#")
    }
    console.log()
}
for (a = 0; a <= hash - 1; a++) {
    for (b = (hash - a) * 2 - 1; b > 0; b--) {
        process.stdout.write("#")
    }
    console.log()
}


let n = 10
for (let i = 1; i <= n; i++) {

    for (let m = 1; m <= n - i; m++) {
        process.stdout.write(" ")
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        process.stdout.write("*")
    }
    console.log()
}

let full = 10

for (let x = 1; x <= full; x++) {
    for (let y = 1; y <= full - x; y++) {
        process.stdout.write(" ")
    }
    for (let z = 0; z < 2 * x - 1; z++) {
        process.stdout.write("+")
    }
    console.log()
}
for (let x = 1; x <= full - 1; x++) {
    for (let y = 0; y < x; y++) {
        process.stdout.write(" ")
    }
    for (let z = (full - x) * 2 - 1; z > 0; z--) {
        process.stdout.write("+")
    }
    console.log()
}