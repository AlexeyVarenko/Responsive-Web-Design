/*Step 59
Set the textContent of the totalNumberOfItems, cartSubTotal, cartTaxes, and cartTotal elements all to the number 0.*/



 clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent=0;
      cartSubTotal.textContent=0;
      cartTaxes.textContent=0;
      cartTotal.textContent=0;
    }
  }