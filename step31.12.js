/*Step 12
input elements can have a size attribute. This attribute defines the number of characters that should be visible as the user types into the input. The value of size should be a non-negative integer greater than zero. If size is not specified, or is specified with an invalid value, the input will have the default width set by the browser.

Example Code
<label for="lastName">Last Name:</label>
<input id="lastName" name="lastName" type="text" size="10" />
Give the name and email inputs a size attribute with a value of "20".*/



 <input type="text" id="full-name" name="name" placeholder="e.g., John Doe" required size="20">
          <label for="email">Email address (required):</label>
          <input
            placeholder="example@email.com"
            required
            id="email"
            type="email" 
            name="email" 
            size="20" 
          />         