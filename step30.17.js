/*Step 17
In the preview window, you should see a column of commas. To fix this, you should chain the join method to your map method. For the separator, pass in an empty string.*/



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

    return `<tr></tr>`;
  }).join("")