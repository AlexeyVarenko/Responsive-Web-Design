/*Step 2
In this project we want data about the authors on freeCodeCamp News. If you want data from an online source, you need use an API (Application Programming Interface). An API lets people from outside of an organization retrieve its internal data.

There is a method called fetch that allows code to receive data from an API by sending a GET request.

Here is how you can make a GET request with the fetch() method:

Example Code
fetch("url-goes-here")
Make a GET request to this URL: "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json". Don't terminate your code with a semicolon yet.*/



const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")