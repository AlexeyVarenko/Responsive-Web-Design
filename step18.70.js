/*Step 70
textContent sets the text of a node and allows you to set or retrieve the text content of an HTML element.

Example Code
<div id="example">This is some text content</div>
Example Code
const element = document.getElementById('example');
console.log(element.textContent); // Output: This is some text content
You can use a ternary operator to conditionally set the text content value. Here is an example of assigning the result of a ternary operator to a variable:

Example Code
const example = condition ? "I'm true" : "I'm false";
Use a ternary operator to check if currentTitle evaluates to a truthy value. If it does, set playingSong.textContent to currentTitle. Otherwise, set it to an empty string.

Then below that, use a ternary operator to check if currentArtist is truthy. If so, set songArtist.textContent to currentArtist. Otherwise, set it to empty string.*/



playingSong.textContent = currentTitle ? currentTitle : "";
songArtist.textContent = currentArtist ? currentArtist : "";