/*Step 68
You will be attaching this function to the submit event of the form. The submit event is triggered when the form is submitted. The default action of the submit event is to reload the page. You need to prevent this default action using the preventDefault() method of your e parameter.

Add a line to your calculateCalories function that calls the preventDefault() method on the e parameter. Then, reset your global error flag to false.*/



function calculateCalories(e) {
    e.preventDefault();
    isError=false;
  }