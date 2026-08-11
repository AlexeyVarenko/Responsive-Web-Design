/*Step 1
In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.

To begin, create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.*/



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