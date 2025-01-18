/*Step 23
Using arrow syntax complete the forEach callback function. Inside the callback function body use an addition assignment to set the innerHTML of tasksContainer to empty backticks.*/



taskData.forEach(({id, title, date, description})=>{
    tasksContainer.innerHTML+=`
    `
  });