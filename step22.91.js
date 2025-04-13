/*Step 91
Since you have the timing for each frame of animation stored in addElDelay, you can use that value with setTimeout() to set up the delay to add elements to the DOM.

Within the body of the .forEach() method's callback function, add a setTimeout() function. Pass in an empty callback function as the first argument, and obj.addElDelay as the second argument.*/



setTimeout(function(){

}, obj.addElDelay)