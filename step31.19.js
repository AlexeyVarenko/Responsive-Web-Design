/*Step 19
When you want a user to select multiple options from a list, you can use checkboxes.

Here is an example of how to work with checkboxes dealing with food options:

<fieldset>
  <legend>Food Options</legend>
  <input type="checkbox" id="pizza" name="food" value="pizza">
  <label for="pizza">Pizza</label>
  <input type="checkbox" id="burger" name="food" value="burger">
  <label for="burger">Burger</label>
</fieldset>
The value attribute is used to specify the value that will be sent to the server when the form is submitted.

Below your legend element, add a checkbox input with the id and value attributes set to "ads", and the name attribute set to "choice".

Below your checkbox input, add a label element with the text Social Media Ads. The for attribute should be set to "ads".*/



<input type="checkbox" id="ads" name="choice" value="ads" />
          <label for="ads">Social Media Ads</label>