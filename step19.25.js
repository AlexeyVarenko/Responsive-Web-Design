/*Step 25
Add another case with the value "mm-dd-yyyy-h-mm". Inside that case, set the text content of currentDateParagraph to empty template literals.

Also, make sure to include a break statement to terminate the switch statement.*/



switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent  = ``;

      break;

  }