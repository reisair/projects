// create a program that turns any given word into charIndex version of the word

const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5,
                    f: 6, g : 7, h : 8, i : 9, j : 10,
                    k : 11, l : 12, m : 13, n : 14, o : 15,
                    p : 16, q : 17, r : 18, s : 19, t : 20,
                    u : 21, v : 22, w : 23, x : 24, y : 25,
                    z : 26
}

const originalWord = process.argv[2];

word = originalWord  // "sana"
        .split("") // ["s", "a", "n", "a"]
        .map((char) => { return charIndex[char] }) // [19, 1, 14, 1]
        .join("") // "191141"

console.log(word)

let res = "";
for (let i = 0; i < word.length; i++) {
        res = res + charIndex[word.charAt(i)];
}
console.log(res);