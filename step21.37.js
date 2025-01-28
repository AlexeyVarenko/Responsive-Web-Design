/*Step 37
Use arrow syntax to create an updateTaskContainer function. Then move the taskData.forEach() and its content from the taskForm's submit event listener into the newly created function.*/



const updateTaskContainer=()=>{
    taskData.forEach(
        ({ id, title, date, description }) => {
            tasksContainer.innerHTML += `
            <div class="task" id="${id}">
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Description:</strong> ${description}</p>
              <button type="button" class="btn">Edit</button>
              <button type="button" class="btn">Delete</button>
            </div>
          `
        }
      );
    }