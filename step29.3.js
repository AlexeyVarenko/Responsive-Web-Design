/*Step 3
The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful.

If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.

Here's how you can chain .then() to the fetch() method:

fetch("sample-url-goes-here")
  .then((res) => res)
Chain the .then() method to your fetch call. Inside the .then() method, add a callback function with res as a parameter, then log the res to the console so you can see the Response object. Open your browser console and expand the Response object to see what it contains.

Again, don't terminate the code with a semicolon yet.*/



const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json').then((res) => console.log(res))