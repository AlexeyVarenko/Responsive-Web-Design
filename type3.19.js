/*Step 19
Specifying the type attribute of a form element is important for the browser to know what kind of data it should expect. If the type is not specified, the browser will default to text.

Give the first two input elements a type attribute of text, the third a type attribute of email, and the fourth a type attribute of password.

The email type only allows emails with a @ and a . in the domain. The password type obscures the input, and warns if the site does not use HTTPS.*/


<fieldset>
<label for="first-name">Enter Your First Name: <input id="first-name" type="text" /></label>
<label for="last-name">Enter Your Last Name: <input id="last-name" type="text" /></label>
<label for="email">Enter Your Email: <input id="email" type="email"  /></label>
<label for="new-password">Create a New Password: <input id="new-password" type="password" /></label>
</fieldset>