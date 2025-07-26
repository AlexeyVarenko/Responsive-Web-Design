/*Step 17
Now in your nested .forEach() call, declare an input variable. Use the .createElement() method of the document object to create an input element. Set the type attribute to "text" and the id attribute to letter + number.*/



letters.forEach(letter => {
      const input=document.createElement('input');
      input.type='text';
      input.id=letter + number;
      input.areabel=letter+number;
    })