// how many days

const monthNumber = Number(process.argv[2]);

if (
    monthNumber === 1 ||
    monthNumber === 3 ||
    monthNumber === 5 ||
    monthNumber === 7 ||
    monthNumber === 8 ||
    monthNumber === 10 ||
    monthNumber === 12) {
    console.log("Chosen month has 31 days");
} else if (
    monthNumber === 4 ||
    monthNumber === 6 ||
    monthNumber === 9 ||
    monthNumber === 11) {
    console.log("Chosen month has 30 days");
} else {
    console.log("February has 28 days");
}
