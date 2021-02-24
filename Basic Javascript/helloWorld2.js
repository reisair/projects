// hello world part 2

const language = String(process.argv[2]);

if (language === "fi") {
    console.log("Hei Maailma");
} else if ( language === "es") {
    console.log("Hola Mundo");
} else if (language === "no") {
    console.log("Hei Verden");
} else {
    console.log("Hello World");
};
