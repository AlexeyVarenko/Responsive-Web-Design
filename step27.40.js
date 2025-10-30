/*Step 40
Finally, update the display property of the style object of the cartContainer variable to another ternary which checks if isCartShowing is true. If it is, set the display property to "block", otherwise set it to "none".

Now you should be able to see your cart and add items to it.*/




cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display=isCartShowing?"block":"none";
});