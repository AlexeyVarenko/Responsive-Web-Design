/*Step 29
Follow accessibility best practices by linking the input elements and the label elements in the second fieldset.

Use personal-account, business-account, and terms-and-conditions as values for the respective id attributes.*/


<fieldset>
        <label for= "personal-account"><input type="radio" name="account-type" id="personal-account" /> Personal Account</label>
        <label for= "business-account"><input type="radio" name="account-type" id="business-account" /> Business Account</label>
        <label for="terms-and-conditions"><input type="checkbox" id="terms-and-conditions" required /> I accept the terms and conditions</label>
      </fieldset>