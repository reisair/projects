// count sheeps
//Create a program that takes in a number from the command line,
// for example node .\countSheep.js 3 and prints a string "1 sheep...2 sheep...3 sheep..."

const sheepCount = Number(process.argv[2]);

for (let i = 1; i <= sheepCount; i++) {
    console.log(`${i} sheep... `);
}

const counting = (count) => {
    console.log("sheep " + count)

    if (count < 1) {
        console.log("loop ended")
    } else {
        counting(count -1)
    }
}

counting(sheeps)