/*Step 41
To enable editing and deleting for each task, add an onclick attribute to both buttons. Set the value of the onclick attribute to editTask(this) for the Edit button and deleteTask(this) for the Delete button. The editTask(this) function will handle editing, while the deleteTask(this) function will handle deletion.

this is a keyword that refers to the current context. In this case, this points to the element that triggers the event – the buttons.*/



<button type="button" class="btn" onclick="editTask(this)">Edit</button>
<button type="button" class="btn" onclick="deleteTask(this)">Delete</button>