/*Step 110
If your pyramid is not inverted, then you will want to have an else block that builds the pyramid in the normal order.

In earlier steps, you learned how to work with else statement like this:

if (condition) {
  // if condition is true, run this code
} else {
  // if condition is false, run this code
}
Add an else block to your if block.*/



for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else{
      
    }
  
  }