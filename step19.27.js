/*Step 27
In a switch statement, the default case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases. For example:

Example Code
const dayOfWeek = 7;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  // ...cases for other workdays
  default:
    console.log("It's the weekend!");
}
For the default case, set the text content of currentDateParagraph to the value of formattedDate.

And with that, your date formatter is complete! You can now format the current date three different ways.*/



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
      default:
   currentDateParagraph.textContent = formattedDate
    
  }