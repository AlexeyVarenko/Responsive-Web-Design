/*Step 32
Add another label after the first, with the text Input your age (years): . Then, nest an input with the type of number.

Next, add a min attribute to the input with a value of 13 because users under the age of 13 should not register. Also, users probably will not be over the age of 120; add a max attribute with a value of 120.

Now, if someone tries to submit the form with values outside of the range, a warning will appear, and the form will not submit. Give it a try.*/


<fieldset>
<label>Upload a profile picture: <input type="file" /></label>
 <label>Input your age (years): <input type="number" min="13" max="120" /></label>
</fieldset>