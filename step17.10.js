/*Step 10
Your select menu needs options for each of the food and exercise fieldset elements you created in the previous steps. Use the option element to create a new option for each fieldset. The value attribute of each option should be the id of the fieldset, and the text of each option should be the text of the legend.

Set the Breakfast option as the selected option.*/



<div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option id="fieldset" value="breakfast" selected>Breakfast</option>
                <option id="fieldset" value="lunch">Lunch</option>
                <option id="fieldset" value="dinner">Dinner</option>
                <option id="fieldset" value="snacks">Snacks</option>
                <option id="fieldset" value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>