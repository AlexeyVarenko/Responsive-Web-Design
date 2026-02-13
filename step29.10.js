/*Step 10
Pass an empty callback function to the .forEach() method. For the first parameter of the callback, destructure the author, image, url, and bio items.

For the second parameter, pass in index. This will represent the position of each author, and will be useful for pagination later.*/



const displayAuthors = (authors) => {
  authors.forEach(({author, image, url, bio},index)=>{});
};