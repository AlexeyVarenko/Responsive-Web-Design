/*Step 19
Append the input element to your container element as a child.

You should now be able to see the cells of your spreadsheet.*/



letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.appendChild(input);

    })