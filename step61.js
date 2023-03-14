/*Step 60
Like radio buttons, form data for selected checkboxes are name / value attribute pairs. While the value attribute is optional, it's best practice to include it with any checkboxes or radio buttons on the page.

Add a value attribute to each checkbox. For convenience, set each checkbox's value attribute to the same value as its id attribute.*/

<fieldset>
<legend>Is your cat an indoor or outdoor cat?</legend>
<label><input value="indoor" id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
<label><input value="outdoor" id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>
<fieldset>
<legend>What's your cat's personality?</legend>
<input value="loving" id="loving" type="checkbox" name="personality"> <label for="loving">Loving</label>
<input value="lazy" id="lazy" type="checkbox" name="personality"> <label for="lazy">Lazy</label>
<input value="energetic" id="energetic" type="checkbox" name="personality"> <label for="energetic"> Energetic</label>
</fieldset>