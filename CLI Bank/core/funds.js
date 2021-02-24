const readline = require("readline-sync");
const accounts = require("./accounts");
const uuid = require("uuid");


/**
 * Creates a deposit
 * @param {number} amount - amount of deposit or request.
 * @param {string} fundRequestId - ID of fund request or transfer.
 * 
 */
function createDeposit(amount, fundRequestId) {
    return {
        amount: 0,
        fundRequestId: ""
    }
}

function depositFundsDialog() {

    let id = readline.question("Okay, let’s convert your cash in to some delicious ones and zeroes, then feed them in to your hungry system.\nWhat is your account ID?")
    let account = accounts.listAccounts().find(acc => acc.id === id)

    while (account == null) {
        id = readline.question("Mhmm, unfortunately an account with that ID does not exist. Try again? ")
        account = accounts.listAccounts().find(acc => acc.id === id)
    }
    let password = readline.question("Okay, we found an account with that ID. You will need to insert your password so we can validate it's actually you. ")

    while ( password != account.password) {
        password = readline.question("Ah, there must be a typo. Try typing it again ")
    }
    /*
    const amount = readline.question(`Awesome, we validated you ${account.name}! How much money do you want to deposit?\n(Current balance: ${account.initialDepositAmount})`)

    const depositAmount = createDeposit(amount)
    account = Object.assign(depositAmount, {initialDepositAmount: depositAmount})
    accounts = [ ...accounts, initialDepositAmount];
    return amount
    */
    let depositAmount = readline.question(`Awesome, we validated you ${account.name}! How much money do you want to deposit?\n(Current balance: ${account.initialDepositAmount})`)
    account.initialDepositAmount = (account.initialDepositAmount + depositAmount)
    console.log(`Awesome, we removed ${depositAmount}€ from existence and stored them in to our system. Now your accounts balance is ${account.initialDepositAmount}€.`)

}

function requestFundsDialog() {

}

function fundsRequestsDialog() {

}

function acceptFundRequestDialog() {

}

module.exports = { depositFundsDialog, requestFundsDialog, fundsRequestsDialog, acceptFundRequestDialog}