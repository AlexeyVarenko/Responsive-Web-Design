/*Step 16
If you want users to select one option from a list of options, you can use a set of radio buttons.

Here is an example of two radio buttons:

Example Code
<input type="radio" id="yes" name="first-time">
<label for="yes">Yes</label>
<input type="radio" id="no" name="first-time">
<label for="no">No</label>
In this example, the radio buttons are grouped together by using the same name attribute value. This means that only one radio button can be selected at a time.

Below your legend element, add a radio button with the id set to "yes-option", the name attribute set to "hotel-stay", and a value attribute set to "yes".

Below your radio button, add a label element with the text Yes and a for attribute set to "yes-option".*/



 <input type="radio" id="yes-option" name="hotel-stay" value="yes">
<label for="yes-option">Yes</label>