/*Step 28
You only want one radio input to be selectable at a time. However, the form does not know the radio inputs are related.

To relate the radio inputs, give them the same name attribute with a value of account-type. Now, it is not possible to select both radio inputs at the same time.*/


<fieldset>
<label><input type="radio" name= "account-type"/> Personal Account</label>
<label><input type="radio" name= "account-type" /> Business Account</label>
<label><input type="checkbox"  required /> I accept the terms and conditions</label>
</fieldset>