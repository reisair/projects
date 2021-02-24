// > < || ==

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = String(process.argv[4]);

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is lesser than b");
} else if (c === "hello world") {
    console.log("yay, you guessed the password");
} else {
    console.log("they must be equal");
};
