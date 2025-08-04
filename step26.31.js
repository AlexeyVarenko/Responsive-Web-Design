/*Step 31
Now you need to check if the value does not include the id of the element. Create an if condition to do so.*/



const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if(!value.includes(element.id)){
    
  }
}