/*Step 36
If the id is not in the allCategories object, you will need to display the General category.

Below your if statement, add an else clause.*/
if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];

    selectedCategory.className = className;
    selectedCategory.category = category;
  } else{
    
  }