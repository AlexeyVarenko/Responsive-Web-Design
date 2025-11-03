/*Step 45
Your calculateTaxes method should return the value of the taxRate (divided by 100, to convert it to a percent) multiplied by the amount parameter.

For clarity, wrap the taxRate / 100 calculation in parentheses.*/



calculateTaxes(amount) {
    return (this.taxRate/100)*amount;
  }