// largest and smallest

const numberOne = Number(process.argv[2]);
const numberTwo = Number(process.argv[3]);
const numberThree = Number(process.argv[4]);

if (numberOne === numberTwo && numberOne === numberThree) {
    console.log("They are all equal");
} else {
    const largest = Math.max(numberOne, numberTwo, numberThree);
    const smallest = Math.min(numberOne, numberTwo, numberThree);

    console.log(
        `Smallest number is ${smallest} and the largest number is ${largest}`);
}
