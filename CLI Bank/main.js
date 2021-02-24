const readline = require("readline-sync");
const help = require("./core/help");
const accounts = require("./core/accounts");
const funds = require("./core/funds");

const commands = {
    help:           	help.helpDialog,
    createAccount:  	accounts.createAccountDialog,
    listAccounts:   	accounts.listAccounts,
	login:          	accounts.loginDialog,
	logout:				accounts.logoutDialog,
	doesAccountExist:	accounts.doesAccountExistDialog
}

// Commands that require login
const authCommands = {
    requestFunds:       funds.requestFundsDialog,
    depositFunds:       funds.depositFundsDialog,
    fundsRequests:      funds.fundsRequestsDialog,
	acceptFundRequest:  funds.acceptFundRequestDialog,
	modifyAccount:      accounts.modifyAccountDialog,
	closeAccount:		accounts.closeAccountDialog
}

// MAIN PROGRAM
let running = true;
console.log("Welcome to a weird banking system!");
while (running) {
	const input = readline.question(">> ");
	if (input === "quit") {
		running = false;
	} else {
		command = commands[input]
		if (command != null) {
			command()
		} else {
			command = authCommands[input]
			if (command != null) {
				command()
			} else {
				console.log("Invalid command.")
			}
		}
	}
}