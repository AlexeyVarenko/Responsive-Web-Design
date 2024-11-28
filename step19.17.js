/*Step 17
When the user chooses the Year, Month, Day option from the dropdown, the date format should reflect this choice.

To do this, you can add a case clause in the switch statement that checks for a match against the expression expr, followed by code to run if there's a match. Here's an example where the case clause checks that expr is equal to the string "case123":

Example Code
switch (expr) {
  case 'case123':
    // Write your logic here
}
Add a case where the value is "yyyy-mm-dd". Inside the case, set the text content of currentDateParagraph to the value of formattedDate.*/


switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
    currentDateParagraph.textContent=formattedDate;
  }