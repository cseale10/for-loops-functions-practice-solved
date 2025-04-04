// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

// import { i } from "vitest/dist/index-761e769b.js";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let lowDeposits = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    const deposits = array[i].deposits;

    if (deposits) {
      for (let i = 0; i < deposits.length; i++) {
        sum += deposits[i];
      }
    }
    if (sum < 2000) {
      lowDeposits.push(array[i]);
    }
  }
  return lowDeposits;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
