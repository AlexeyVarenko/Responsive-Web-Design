/*Step 35
You now need to add the className and category properties to your selectedCategory object.

Start by assigning the className variable to selectedCategory.className. Then assign the category variable to selectedCategory.category.*/



 if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];
    selectedCategory.className=className;
    selectedCategory.category=category;
  }