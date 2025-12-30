/*Step 62
Inside the callback function, call the movePlayer function and pass in key, 0, and false as arguments.*/



window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false)
});