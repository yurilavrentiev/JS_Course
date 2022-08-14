// function countLetters(anyString) {
//   let vowelsCount = 0;
//   let consonantsCount = 0;
//   const vowels = ['a', 'i', 'o', 'u', 'e'];
//   for (letter of anyString.toLowerCase()) {
//     vowels.includes(letter) ? vowelsCount += 1: consonantsCount += 1;
//   }
//   console.log(vowelsCount,consonantsCount);
//   const result = {
//     vowels: vowelsCount,
//     consonants: consonantsCount
//     }

//   return result; 
// }
// const userInput = prompt('Please, enter any text and I will count the amount of vowels and consonants!');
// console.log(`Result is: ${JSON.stringify(countLetters(userInput))}`);

function countLetters(anyString) {
  const VOWELS = ['a', 'i', 'o', 'u', 'e'];
  const CONSONANTS = 'qwrtypsdfghjklzxcvbnm';

  let vowels = 0;
  let consonants = 0;
  let other = 0;

  for (letter of anyString.toLowerCase()) {
    if (VOWELS.includes(letter)) {
      vowels++;
      continue;
    }
    if (CONSONANTS.includes(letter)) {
      consonants++;
      continue;
    }
    other++
  }

  return { vowels, consonants, other };
}

const userInput = prompt('Please, enter any text and I will count the amount of vowels and consonants!');
console.log(`Result is: ${JSON.stringify(countLetters(userInput))}`);
