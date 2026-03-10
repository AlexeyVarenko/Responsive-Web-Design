/*Step 9
If there is an error from the fetch call, the catch block will handle it.

Inside the catch block, add a console.log to log the err parameter.

Also, remove your console.log(data); from your try block now that you understand what is being returned from the fetch call.*/


const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    
  } catch (err) {
    console.log(err)
  }
};

fetchData();