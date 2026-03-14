/*Step 16
The next step is to build out the table which will display the forum data.

Below your destructuring assignment, add a return keyword followed by a set of template literals. Inside those template literals, add a table row tr element.*/



postsContainer.innerHTML = topics.map((item) => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    } = item;
    return `<tr></tr>`
  });