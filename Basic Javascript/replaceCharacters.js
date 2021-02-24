
const oldLetter = String(process.argv[2]);
const newLetter = String(process.argv[3]);
const string = String(process.argv[4]);


const changedString = string
    .split(" ") // ["I", "have", "great", "grades", "for", "my", "grading"]
    .map((word) => {
        return word.replace(oldLetter, newLetter);
    }) // ["I", "have", "hreat", "hrades", "for", "my", "hrading"]
    .join(" "); // "I have hreat hrades for my hrading"
console.log(changedString);
