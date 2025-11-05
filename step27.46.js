/*Step 46
Because of the way computers store and work with numbers, calculations involving decimal numbers can result in some strange behavior. For example, 0.1 + 0.2 is not equal to 0.3. This is because computers store decimal numbers as binary fractions, and some binary fractions cannot be represented exactly as decimal fractions.

We want to clean up the number result from your calculation. Wrap your calculation in parentheses (don't include the return statement!) and call the .toFixed() method on it. Pass the .toFixed() method the number 2 as an argument. This will round the number to two decimal places and return a string*/



calculateTaxes(amount) {
    return ((this.taxRate / 100) * amount).toFixed(2);
  }