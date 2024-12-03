/*Step 26
When the user selects the Month, Day, Year, Hours, Minutes option from the dropdown, you need to display the date in the format mm-dd-yyyy h Hours m Minutes.

Inside the case for mm-dd-yyyy-h-mm, use string interpolation to assign the formatted date from above to the textContent property of currentDateParagraph. Make sure to use the month, day, year, hours, and minutes variables in your answer.*/



switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
  }