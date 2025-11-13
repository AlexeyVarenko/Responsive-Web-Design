/*Step 58
You also need to start clearing the HTML. Set the innerHTML property of the productsContainer back to an empty string.*/



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
      productsContainer.innerHTML=""
    }
  }