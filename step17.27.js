/*Step 27
Once you have finished testing your cleanInputString function, you can remove both of your console statements.*/



function cleanInputString(str) {

    const regex = /[+-\s]/g;
    return str.replace(regex, '');
  }