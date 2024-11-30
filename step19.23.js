/*Step 23
Like in the previous step, use method chaining to split, reverse, and join the formattedDate variable. Use '-' in the split and join methods.

Test out your changes by selecting the Year, Month, Day option from the dropdown menu. The date should now be displayed in the format yyyy-mm-dd.*/



switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-')
  }