/*Step 49
For the second fieldset, you want the input and label text to appear on the same line.

Start, by giving the input elements in the second fieldset a class of inline.*/


<fieldset>
<label for="personal-account"><input id="personal-account" type="radio" name="account-type" class= "inline" /> Personal Account</label>
<label for="business-account"><input id="business-account" type="radio" name="account-type" class= "inline" /> Business Account</label>
<label for="terms-and-conditions">
  <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" class= "inline" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
</label>
</fieldset>