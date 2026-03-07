/*Step 6
In the previous project, you used fetch() with the .then() method to perform logic after the promise was resolved. Now you will use the await keyword to handle the asynchronous nature of the fetch() method.

The await keyword waits for a promise to resolve and returns the result.

const example = async () => {
  const data = await fetch("https://example.com/api");
  console.log(data);
}
Inside the try block, create a constant called res and assign it await fetch(). For the fetch call, pass in the forumLatest variable.*/



const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
  } catch (err) {

  }
};