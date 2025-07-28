/*Step 18
In earlier projects you learned about the setAttribute method. Another way to update an attribute in JavaScript is to use the following syntax:

Example Code
el.attribute = value;
The property names for hyphenated HTML attribute values, such as aria-label, follow camel case, becoming ariaLabel.

Example Code
el.ariaLabel = "Aria Label Value";
Set the aria-label attribute for the input element to the same value as the id attribute.*/



letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;

    }) 