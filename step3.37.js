/*Step 37
The textarea element acts like an input element of type text, but comes with the added benefit of being able to receive multi-line text, and an initial number of text rows and columns.

Users will be able to register with a bio. Add a label with the text Provide a bio: at the end of the fieldset. Add a textarea element inside the label element. Note that the textarea requires a closing tag.*/


<fieldset>
<label>Upload a profile picture: <input type="file" /></label>
<label>Input your age (years): <input type="number" min="13" max="120" /></label>
<label>How did you hear about us?
  <select>
    <option value="">(select one)</option>
    <option value="1">freeCodeCamp News</option>
    <option value="2">freeCodeCamp YouTube Channel</option>
    <option value="3">freeCodeCamp Forum</option>
    <option value="4">Other</option>
  </select>
</label>
<label>Provide a bio:
  <textarea></textarea>
</label>
</fieldset>