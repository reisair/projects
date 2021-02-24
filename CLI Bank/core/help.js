function helpDialog() {
    console.log("I’m glad to help you :) Here’s a list of commands you can use!\n" +
                ">Accounts\n" +
                "createAccount -- > Opens dialog for creating an account.\n" +
                "closeAccount -- > Opens a dialog for closing an account.\n" +
                "modifyAccount -- > Opens a dialog for modifying an account.\n" +
                "doesAccountExist -- > Opens a dialog for checking if the account exists.\n" +
                "login -- > Opens a dialog for logging in.\n" +
                "logout -- > Opens a dialog for logging out.\n" +
                ">Funds\n" +
                "withdrawFunds -- > Opens a dialog for withdrawing funds.\n" +
                "depositFunds -- > Opens a dialog for depositing funds.\n" +
                "transferFunds -- > Opens a dialog for transferring funds to another account.\n" +
                ">Requests\n" +
                "requestFunds -- > Opens a dialog for requesting another user for funds.\n" +
                "fundRequests -- > Shows all the requests for the account funds.\n" +
                "acceptFundRequest -- > Opens a dialog for accepting a fund request.\n"
    )
};

module.exports = { helpDialog };