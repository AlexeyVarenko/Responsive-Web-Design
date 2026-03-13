/*Step 14
Now it is time to start populating the data inside the postsContainer.

Start by calling the map() method on your topics array. For the callback function, use an empty arrow function that takes item as a parameter.

Then assign the result of the map() method to postsContainer.innerHTML.*/


const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML=topics.map(item=>{})
  
};