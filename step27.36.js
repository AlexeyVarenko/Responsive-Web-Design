/*Step 36
In your event listener callback, call the .addItem() method of your cart object, and pass in the event.target.id. Remember that the id here will be a string, so you need to convert it to a number.

Pass your products array as the second argument.*/


[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
    })
  }
);