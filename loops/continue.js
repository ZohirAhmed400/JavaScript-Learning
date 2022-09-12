// We use the keyword continue to skip a certain iterations.

for (let i = 0; i <= 10; i++) {
    if (i == 4) {
        continue
    }
    console.log(i)
}

function createDimondShape(size) {
    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write(" ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("* ")
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write(" ");
            }
            for (j = i; j <= size - 1; j++) {
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}
createDimondShape(9);