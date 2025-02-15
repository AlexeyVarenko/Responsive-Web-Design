/*Step 66
There are two bugs left to fix. First, if you create a task with only spaces for the title, an empty task will be created even though the title is required.

Fix that by adding a check at the beginning of the function for if !titleInput.value.trim(). If there's no title, show an alert with the text Please provide a title and return after that.*/




if(!titleInput.value.trim()){
    alert("Please provide a title");
    return;
   }