/*Step 50
You're going to update the HTML in this method as well. Set the textContent of the cartSubTotal to be the value of subTotal to a fixed 2 decimal places. Use template literal syntax to add the dollar sign to the beginning of the value.*/



calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent=`$${subTotal.toFixed(2)}`
  }