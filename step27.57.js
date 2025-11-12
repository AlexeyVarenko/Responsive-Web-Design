/*Step 57
You only want to clear the cart if the user confirms the prompt. Create an if statement that checks if the user confirmed the prompt.

In the if statement, set the items property back to an empty array, then set the total property to 0.*/



clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );
    if(isCartCleared){
      this.items=[];
      this.total=0;
    }


  }