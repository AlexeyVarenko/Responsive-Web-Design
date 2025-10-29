/*Step 39
Now assign the textContent of the showHideCartSpan variable the result of a ternary expression which checks if isCartShowing is true. If it is, set the textContent to "Hide", otherwise set it to "Show".*/



cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent=isCartShowing?"Hide":"Show";
});