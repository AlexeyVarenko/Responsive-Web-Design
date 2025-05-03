/*Step 20
While this expression does match 1 hundred dollars, it will not match 1  hundred  dollars, or 10 dollars.

Spam messages can and will find a way to exploit flaws in your detection. Time to improve your regex.

Replace the first literal space with the \s* expression. The \s character class matches whitespace, such as spaces, tabs, and new lines. The * quantifier means "match the previous character 0 or more times".

Replace the second literal space with \s+. The + quantifier means "match the previous character at least one time".*/



const dollarRegex = /[0-9]+\s*(hundred|thousand|million|billion)?\s+dollars/i;