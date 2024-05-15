/*Step 59
A function call allows you to actually use a function. You may not have been aware of it, but the methods like .push() that you have been using have been function calls.

A function is called by referencing the function's name, and adding (). Here's how to call a test function:

test();
Replace the character.repeat(i + 1) in your .push() call with a function call for your padRow function.*/



for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow())
  }