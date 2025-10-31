/*Step 42
Now you can update the total number of items on the webpage. Assign the value of your cart object's .getCounts() method to the textContent of the totalNumberOfItems variable.*/



[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent=cart.getCounts()
    })
  }
);