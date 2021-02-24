
/*
let string = String(process.argv[2]);
const lastIndex = string.lastIndexOf(" ");

string = string.substring(0, lastIndex);

console.log(string);
*/

/* //TÄÄ MUTATOI
const string = String(process.argv[2]);
const withoutLastWord = string
                        .split(" ");

console.log(withoutLastWord.splice(0, withoutLastWord.length - 1));
*/

// NON-MUTATING NON-STINKY CLEAN CODE
const string = String(process.argv[2]);
const withoutLastWord = string
    .split(" ")
    .slice(0, -1)
    .join(" ");

console.log(withoutLastWord);
console.log(string); // STAYS ORIGINAL
