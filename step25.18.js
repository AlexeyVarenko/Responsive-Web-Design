/*Step 18
If you test your form with a list of numbers, you should see the mean display on the page. However, this only works because freeCodeCamp's iframe has special settings. Normally, when a form is submitted, the event triggers a page refresh.

To resolve this, add return false; after your calculate(); call in the onsubmit attribute.*/



<form onsubmit="calculate();return false"></form>