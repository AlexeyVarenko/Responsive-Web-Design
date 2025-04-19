/*Step 103
You have set the id attribute for your paragraph elements to the obj.inputVal property.

Now, use the .getElementById() method to select the element with that attribute value, again using the obj.inputVal property. You should pass the obj.inputVal value directly to your getElementById call.

After that, set the textContent property of the selected element equal to the msg property of the current object, to update its text after the delay you specified earlier.*/



document.getElementById(obj.inputVal).textContent=obj.msg;