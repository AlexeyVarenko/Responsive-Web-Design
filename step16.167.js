/*Step 167
In the previous project, you learned how to work with for loops like this:

Example Code
for (let i = 0; i < 5; i++) {
  // code to run
}
for loops are declared with three expressions separated by semicolons: for (a; b; c), where a is the initialization expression, b is the condition, and c is the final expression.

In this step, create a for loop where i is initialized to 0, the loop runs as long as i is less than 10, and i is incremented by 1 after each iteration using the increment operator ++.

*/



function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for(let i = 0; i<10; i++){
    
    };
  }