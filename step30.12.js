/*Step 12
Back in your showLatestPosts() function, use destructuring to get the topic_list and users properties from the data object.*/


const showLatestPosts = (data) => {
  const {topic_list, users}=data;
  const {topics}=topic_list;

};