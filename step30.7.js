/*Step 7
You want to get the response body as a JSON object. The .json() method of your res variable returns a promise, which means you will need to await it.

Create a constant called data and assign it the value of await res.json().*/



const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data=await res.json();
  } catch (err) {

  }
};