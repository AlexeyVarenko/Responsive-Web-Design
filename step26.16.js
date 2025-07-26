/*Step 16
In your callback, you will need to make two function calls. Start by calling createLabel() and pass number as the argument. You should see some numbers appear in your spreadsheet.

Then call the .forEach() method on your letters array. Pass an empty callback function which takes a letter parameter.*/a


  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter=>{
      
    })
  })