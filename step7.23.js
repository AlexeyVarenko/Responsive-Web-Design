/*Step 23
Arguably, D.O.B. is not descriptive enough. This is especially true for visually impaired users. One way to get around such an issue, without having to add visible text to the label, is to add text only a screen reader can read.

Append a span element with a class of sr-only to the current text content of the third label element.*/



<div class="info">
            <label for="birth-date">
             D.O.B.<span class="sr-only"></span>
               </label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>