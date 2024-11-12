/*Step 88
If the playlist is empty, you need to create a resetButton element and a text for it. This button will only show up if the playlist is empty.

createElement() is a DOM method you can use to dynamically create an element using JavaScript. To use createElement(), you call it, then pass in the tag name as a string:

Example Code
// syntax
document.createElement(tagName)

// example
document.createElement('div')
You can also assign it to a variable:

Example Code
const divElement = document.createElement('div')
Inside your if statement, declare a resetButton constant, then use createElement() to create a "button".*/



if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button")
    }