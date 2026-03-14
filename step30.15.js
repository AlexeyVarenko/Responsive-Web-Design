/*Step 15
Inside the map method, destructure the following properties from the item object:

id
title
views
posts_count
slug
posters
category_id
bumped_at */


const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics.map((item) => {
  const { id, title, views, posts_count, slug, posters, category_id, bumped_at}=item;
  });