/*Step 4
The data you get from a GET request is not usable at first. To make the data usable, you can use the .json() method on the Response object to parse it into JSON. If you expand the Prototype of the Response object in the browser console, you will see the .json() method there.

Remove console.log(res) and implicitly return res.json() instead.*/



.then((res) => res.json()))
