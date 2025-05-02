/*Step 17
Between your digits and your dollars text, you want to catch place values.

Use the | token to allow hundred, thousand, million, or billion between your digits and dollars.*/


const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;