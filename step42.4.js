/*Step 4
Now it is time to test your getConsonantCount function.

Create a consonantCount variable and assign it the result of calling the getConsonantCount function with the argument of "Coding is fun"

After that, log the following to the console: "Consonant Count: [Consonant count goes here]". Replace [Consonant count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.*/



function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);