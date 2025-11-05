/*Step 47
The issue with .toFixed() returning a string is that you want to be able to perform calculations with the tax rate. To fix this, you can pass the .toFixed() call (including the calculation) to the parseFloat() function. This will convert the fixed string back into a number, preserving the existing decimal places.

Pass your .toFixed() call to parseFloat().*/



calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }