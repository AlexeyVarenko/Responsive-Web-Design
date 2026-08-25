/*Step 13
Use a for loop to log the name of every astronaut in the updatedCrew array. After the loop, return the updatedCrew array to complete your swapCrewMembers function.*/



   const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
  for (let i = 0; i < updatedCrew.length; i++) {
    console.log(updatedCrew[i].name);
  }

  return updatedCrew; 