/*Step 55
If you check the "Application" tab of your browser console, you'll notice a series of [object Object]. This is because everything you save in localStorage needs to be in string format.

To resolve the issue, wrap the data you're saving in the JSON.stringify() method. Then, check local storage again to observe the results.*/



localStorage.setItem("data", JSON.stringify(myTaskArr));