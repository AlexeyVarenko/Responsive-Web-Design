/*Step 51
Following the same pattern as your cartSubTotal, update the cartTaxes to display the tax value, and your cartTotal to display the total property.*/



calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent=`$${tax.toFixed(2)}`
    cartTotal.textContent=`$${this.total.toFixed(2)}`
  }