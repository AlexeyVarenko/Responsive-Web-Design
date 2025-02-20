/*Step 6
Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.

First, pass e as a parameter to your callback function. Remember that e is a common parameter name for the event object. Next, log e to the console in the body of your callback function.*/



numberInput.addEventListener("keydown", (e) => {
    console.log(e)
  });