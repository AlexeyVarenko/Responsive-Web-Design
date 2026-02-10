/*Step 5
In order to start working with the data, you will need to use another .then() method.

Chain another .then() to the existing .then() method. This time, pass in data as the parameter for the callback function. For the callback, use curly braces because you will have more than one expression. Within your callback function, log data to the console to see what it looks like.*/



fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json()).then(data=>{
    console.log(data)
  })