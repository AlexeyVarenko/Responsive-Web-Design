/*Step 38
Link the applicable form elements and their label elements together.

Use profile-picture, age, referrer, and bio as values for the respective id attributes.*/


<fieldset>
<label for="profile-picture">Upload a profile picture: <input type="file"  id="profile-picture" /></label>
<label for="age">Input your age (years): <input type="number" min="13" max="120" id="age" /></label>
<label for="referrer">How did you hear about us?
  <select id="referrer">
    <option value="" >(select one)</option>
    <option value="1">freeCodeCamp News</option>
    <option value="2">freeCodeCamp YouTube Channel</option>
    <option value="3">freeCodeCamp Forum</option>
    <option value="4">Other</option>
  </select>
</label>
<label for="bio">Provide a bio:
  <textarea id="bio"></textarea>
</label>
</fieldset>