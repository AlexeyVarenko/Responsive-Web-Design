/*Step 28
Finally, what if there's an error and the author data fail to load? Then we need to show an error in the UI. That's exactly what the .catch() method is for – handling errors.

Inside the .catch(), remove the console.error() and set the innerHTML of the authorContainer to a p element with the class "error-msg" and text "There was an error loading the authors".*/



authorContainer.innerHTML='<p class="error-msg">There was an error loading the authors</p>'