/*Step 56
Browsers have a built-in confirm() function which displays a confirmation prompt to the user. confirm() accepts a string, which is the message displayed to the user. It returns true if the user confirms, and false if the user cancels.

Declare a variable isCartCleared and assign it the value of calling confirm() with the string "Are you sure you want to clear all items from your shopping cart?".*/


clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }
    const isCartCleared=confirm("Are you sure you want to clear all items from your shopping cart?");

  }