/*Step 49
Update the total value to be the sum of the subTotal and tax values.*/


calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total=subTotal+tax;
  }