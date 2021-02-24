// Write a program that takes in any two numbers from the command line, start and end.
// The program creates and prints an array filled with numbers from start to end.

const start = Number(process.argv[2]);
const end = Number(process.argv[3]);

let array = [];

const direction = start < end;
for (let i = start; direction ? i <= end : i >= end; direction ? i++ : i--) {
    array = 
}