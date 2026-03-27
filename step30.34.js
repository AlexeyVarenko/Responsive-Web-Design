/*Step 34
Inside the if statement, destructure className and category from the allCategories[id] object.*/



const forumCategory = (id) => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const{className, category}=allCategories[id];
  }
};