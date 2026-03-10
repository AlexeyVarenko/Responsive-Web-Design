/*Step 8
To view the data results, log the data variable to the console inside your try block.

Below your fetchData definition, call the function and open up the console to see the results.*/


const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    
  }
};
fetchData();
