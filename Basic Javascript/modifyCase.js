const action = String(process.argv[2]);
let stringToTransform = String(process.argv[3]);

if (action === "lower") {
    stringToTransform = stringToTransform.toLowerCase();
    console.log(stringToTransform);
} else if (action === "upper") {
    stringToTransform = stringToTransform.toUpperCase(); 
    console.log(stringToTransform);
};
