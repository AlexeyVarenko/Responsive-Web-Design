/*Step 11
As you build out your showLatestPosts() function, you'll need to call it to see your changes.

Call the showLatestPosts() function at the end of your try block and pass in data for the argument.*/


const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};