/*Step 3
It's time to count the consonants. Create a getConsonantCount function with a sentence parameter.

Inside the function, use a loop to count the number of consonants in the sentence that will be passed into the function when it is called. A consonant is any letter that is not one of the following characters: "aeiou".

Your getConsonantCount function must return a number.*/



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