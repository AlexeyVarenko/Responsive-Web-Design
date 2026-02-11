/*Step 6
The .catch() method is another asynchronous JavaScript method you can use to handle errors. This is useful in case the Promise gets rejected.

Chain .catch() to the last .then(). Pass in a callback function with err as the parameter. Inside the callback, use console.error() to log possible errors to the console with the text There was an error: ${err}. Since you're using err in the text, don't forget to use a template literal string with backticks (``) instead of single or double quotes.

Note: catch is the last call chained on to fetch, so you can terminate your code with a semicolon.*/









.catch(err=>console.error(`There was an error: ${err}`))