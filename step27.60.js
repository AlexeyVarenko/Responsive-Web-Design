/*Step 60
Your final step is to make your clear button functional. Add a click event listener to the clearCartBtn. For the callback, you can pass in cart.clearCart directly.

However, doing so will not work, because the context of this will be the clearCartBtn element. You need to bind the clearCart method to the cart object.

You can do this by passing cart.clearCart.bind(cart) as the callback.

And with that, your shopping cart project is complete!*/



clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));