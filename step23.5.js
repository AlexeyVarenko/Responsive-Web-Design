/*Step 5
Back in your event listener, you need to update the text of the result element. You can use a ternary operator to achieve this task.

Here is an example of assigning the result of a ternary operator to an element's text content:

Example Code
el.textContent = condition ? "Use this text if the condition is true" : "Use this text if the condition is false";
After the if statement, use a ternary operator to check the truthiness of calling isSpam() with messageInput.value as the argument. If true, set the textContent property on the result element to "Oh no! This looks like a spam message.". Otherwise, set it to "This message does not seem to contain any spam."

Then set the messageInput element's value property to an empty string.*/



checkMessageButton.addEventListener("click", () => {
    if (messageInput.value === "") {
      alert("Please enter a message.");
      return;
    }
    result.textContent= isSpam(messageInput.value)?
    "Oh no! This looks like a spam message."
    :"This message does not seem to contain any spam."
    messageInput.value="";
  
  });