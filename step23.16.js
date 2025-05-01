/*Step 16
The dollar value may be more than one digit. To match this, the + quantifier can be used - this matches one or more consecutive occurrences. For example, the regular expression /a+/ matches one or more consecutive a characters.

Update your regular expression to match one or more consecutive digits.*/



const dollarRegex = /[0-9]+ dollars/i;