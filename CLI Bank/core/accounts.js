const readline = require("readline-sync");
const uuid = require("uuid");
const fs = require("fs");

// Keeps total tally of users
let accounts = [];
let loggedUser = "";

/**
 * Creates an account
 * @param {string} name - Name of account holder.
 * @param {number} initialDepositAmount - Initial deposit amount.
 * 
 * @return {Account} account - Freshly created account
 */

function createAccount(name, initialDepositAmount) {
    return {
        name: name,
        initialDepositAmount: initialDepositAmount,
        id: uuid.v4(),
        password: null,
        fundRequests: []
    }
}

function listAccounts() {
    return accounts;
}

function createAccountDialog() {
    const name = readline.question("So you want to to create a new account! Let's start with the easy question. What is your name? ");

    let initialDepositAmount = readline.question("How much cash do you want to deposit to get started with your account? (10e is the minimum)\n");

    while (initialDepositAmount < 10) {
        initialDepositAmount = readline.question("Unfortunately we can't open an account for such a small amount. Do you have any more cash with you?");
    }

    const preAccount = createAccount(name, initialDepositAmount)

    console.log(`Great ${name} you now have an account ${preAccount.id} with balances of ${initialDepositAmount}`);

    const password = readline.question("We're happy to have you as a customer, and we want to ensure that your money is safe with us.\nGive us a password, which gives only you the access to your account\n");
    const account = Object.assign(preAccount, {password: password})
    accounts = [ ...accounts, account];
    return account
    }
   
function loginDialog() {
    let id = readline.question("So you want to log in? Give us your ID. ");
    let account = listAccounts().find(acc => acc.id === id) //Abstraktiota

    while (account == null) {
        id = readline.question("Mhmm, unfortunately an account with that ID does not exist. Try again? ")
        account = listAccounts().find(acc => acc.id === id)
    }

    let password = readline.question("Okay, we found an account with that ID. You will need to insert your password so we can validate it's actually you. ")

    while ( password != account.password) {
        password = readline.question("Ah, there must be a typo. Try typing it again ")
    }
    loggedUser = account.id;
    console.log(`Awesome, we validated you ${account.name}! You are now logged in`)
    console.log(`Logged in as ${account.name}`)
}

function doesAccountExistDialog() {
    let id = readline.question("Mhmm, you want to check if an account with an ID exists. Let us do it! Give us the ID and we will check.");
    let account = listAccounts().find(acc => acc.id === id)

    if (account == null) {
        console.log("Mhmm, unfortunately an account with that ID does not exist.")
    } else {
        console.log("Awesome! This account actually exists. You should confirm with the owner that this account is actually his/hers")
    }
}

function logoutDialog() {
    if (loggedUser == "") {
        console.log("No user is currently logged in");
    } else {
        let confirmation = readline.question("Are you sure you wish to logout? yes/no")
        switch (confirmation) {
            case "yes":
                loggedUser = "";
                console.log(`You have successfully logged out`);
                break;
            case "no":
                loggedUser = loggedUser;
                console.log(`You have not logged out`);
                break;
            default:
                console.log("Didn't think so")
        }
    }
}

function modifyAccountDialog() {
    while (loggedUser == "") {
        console.log("You need to login before using that command");
        loginDialog()
    }

    let id = readline.question("Mhmm, you want to modify an accounts stored holder name. We can definitely do that! Let’s start validating you with your ID!");
    let account = listAccounts().find(acc => acc.id === id)

    while (account == null) {
        id = readline.question("Mhmm, unfortunately an account with that ID does not exist. Try again? ")
        account = listAccounts().find(acc => acc.id === id)
    }
    let password = readline.question("Okay, we found an account with that ID. You will need to insert your password so we can validate it's actually you. ")

    while ( password != account.password) {
        password = readline.question("Ah, there must be a typo. Try typing it again ")
    }
    let newName = readline.question(`Awesome, we validated you ${account.name}! What is the new name for the account holder?`)

    while ( newName == account.name ) {
        newName = readline.question("Mhmm, I’m quite sure this is the same name. Try typing it out again.")
    }
    account.name = newName;
    console.log(`Ah, there we go. We will address you as ${account.name}`)
}

function closeAccountDialog() {
    
}


module.exports = { createAccountDialog, listAccounts, loginDialog, logoutDialog, doesAccountExistDialog, closeAccountDialog, modifyAccountDialog }