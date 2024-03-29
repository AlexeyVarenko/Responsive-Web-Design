/*Step 22
Certain type attribute values come with built-in form validation. For example, type="email" requires that the value be a valid email address.

Add custom validation to the password input element, by adding a minlength attribute with a value of 8. Doing so prevents inputs of less than 8 characters being submitted.*/



<fieldset>
<label for="first-name">Enter Your First Name: <input id="first-name" type="text" required /></label>
<label for="last-name">Enter Your Last Name: <input id="last-name" type="text" required /></label>
<label for="email">Enter Your Email: <input id="email" type="email" required /></label>
<label for="new-password">Create a New Password: <input id="new-password" type="password" required minlength="8" /></label>
</fieldset>