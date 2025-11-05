/*Step 48
Declare a variable tax and assign it the value of calling your new .calculateTaxes() method, passing subTotal as the argument.*/



 calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax=this.calculateTaxes(subTotal);

  }