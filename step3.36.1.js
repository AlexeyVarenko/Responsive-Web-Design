/*Step 36
Submitting the form with an option selected would not send a useful value to the server. As such, each option needs to be given a value attribute. Without which, the text content of the option will be submitted to the server.

Give the first option a value of "", and the subsequent option elements value attributes from 1 to 4.*/


<fieldset>
<label>Upload a profile picture: <input type="file" /></label>
<label>Input your age (years): <input type="number" min="13" max="120" /></label>
<label>How did you hear about us?
  <select>
    <option value="">(select one)</option>
    <option value=1> >freeCodeCamp News</option>
    <option value=2 >freeCodeCamp YouTube Channel</option>
    <option value=3 >freeCodeCamp Forum</option>
    <option value=4 >Other</option>
  </select>
</label>
</fieldset>