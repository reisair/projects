// atm

const balance = -1201;
const isActive = true;
const checkBalance = true;

if (!checkBalance) {
    console.log("Have a nice day!");
} else if (isActive && balance > 0) {
    console.log(`Your current balance is: ${balance}`);
} else if (!isActive) {
    console.log("Your account is not active");
} else if (balance === 0) {
    console.log("Your account is empty");
} else {
    console.log(`Your balance is negative: ${balance}`);
}
