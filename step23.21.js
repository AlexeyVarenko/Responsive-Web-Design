/*Step 21
One last thing with this expression. You don't actually need the match value from your capture group, so you can turn it into a non-capturing group. This will allow you to group the characters together without preserving the result.

To create a non-capturing group in a regular expression, you can add ?: after the opening parenthesis of a group. For instance, (?:a|b) will match either a or b, but it will not capture the result.

Update your regular expression to use a non-capturing group.*/



const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;