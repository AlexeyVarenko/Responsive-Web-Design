/*Step 24
Spam messages often use numbers instead of letters to bypass filters. Your regular expression should catch these.

Replace the e characters in your regular expression with character classes that match e and 3.*/


const freeRegex = /fr[3e][3e] mon[3e]y/i;