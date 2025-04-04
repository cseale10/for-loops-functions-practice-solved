// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...

  let wrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let sumDeposits = 0;
    let sumWithdrawals = 0;
    const deposits = array[i].deposits;
    const withdrawals = array[i].withdrawals;
    const balance = array[i].balance;

    if (deposits) {
      for (let i = 0; i < deposits.length; i++) {
        sumDeposits += deposits[i];
      }
    }

    if (withdrawals) {
      for (let i = 0; i < withdrawals.length; i++) {
        sumWithdrawals += withdrawals[i];
      }
    }

    if (sumDeposits - sumWithdrawals !== balance) {
      wrongBalance.push(array[i]);
    }
  }
  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
