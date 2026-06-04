/*Step 6
As you recall from prior lessons, the aria-labelledby attribute is used when there is existing text on the page that can be used as a label. In this case, you have added the id attribute to your span elements which will now be used here.

Add an aria-labelledby attribute to the input element set to volume-label volume-description.*/


<input type="range" min="0" max="100" value="50" aria-labelledby="volume-label volume-description"></input>