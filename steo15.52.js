/*Step 52
There is a bit of a problem, here. Your test declaration is currently after your return statement. An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code. This means that any code after a return statement will not run.

Move your test initialization to the line above your return statement.*/


function padRow(name) {
  
    return character + name;
    
  }