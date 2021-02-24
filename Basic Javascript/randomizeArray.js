const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];

const randomized = array.sort(() => 0.5 - Math.random());

console.log(randomized);