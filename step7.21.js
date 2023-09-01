/*Step 21
Keeping in mind best-practices for form inputs, give each input an appropriate type and name attribute. Then, give the first input a placeholder attribute.*/


<section role="region" aria-labelledby="student-info">
<h2 id="student-info">Student Info</h2>
<div class="info">
  <label for="student-name">Name:</label>
  <input id="student-name" type="name" name="student-name" placeholder="name"/>
</div>
<div class="info">
  <label for="student-email">Email:</label>
  <input id="student-email" type="email" name="student-email" placeholder="email"/>
</div>
<div class="info">
  <label for="birth-date">D.O.B.:</label>
  <input id="birth-date" type="date" name="birth-date" placeholder="birth-date"/>
</div>
</section>