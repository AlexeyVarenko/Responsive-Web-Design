/*Step 15
You need to match a number before the text dollars. While you could write out 0|1|2 and so on, regular expressions have a feature that makes this easier.

A character class is defined by square brackets, and matches any character within the brackets. For example, [aeiou] matches any character in the list aeiou. You can also define a range of characters to match using a hyphen. For example, [a-z] matches any character from a to z.

Add a character class to match the digits 0 through 9 to your dollarRegex expression - remember the digit must come before the word dollars, and there should be a space between the digit and the word.*/



const dollarRegex =/[0-9] dollars/i;