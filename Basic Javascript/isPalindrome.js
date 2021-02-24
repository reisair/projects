const str = process.argv[2].toLowerCase();

const reversed = str.split("").reverse().join("");

console.log(reversed === str ?
    `Yes, ${str} is a palindrome` :
    `No, ${str} is not a palindrome`);
