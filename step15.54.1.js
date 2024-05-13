/*Step 54
Now your call variable has the value "Testing". But your function is no longer using the name parameter.

Remove the name parameter from your function declaration, then remove your "CamperChan" string from the padRow call.*/


function padRow() {
    const test = "Testing";
    return test;
  }
  const call = padRow();
  console.log(call);