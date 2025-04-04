// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i].name;
    if (value) {
      for (let j = 0; j < value.length; j++) {
        if (value[j].toLowerCase() === letter.toLowerCase()) {
          result.push(value);
          break;
        }
      }
    }
  }
  return result;

  // let givenLetter = [];

  // for (let i = 0; i < array.length; i++) {
  //   const clientName = array[i].name;

  //   if (clientName && clientName.toLowerCase().includes(letter.toLowerCase())) {
  //     givenLetter.push(clientName);
  //   }
  // }
  // return givenLetter;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
