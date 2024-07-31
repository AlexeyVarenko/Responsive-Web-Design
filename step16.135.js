/*Step 135
The word "Arg!" should have quotes around it. Besides escaping quotes, there is another way you can include quotation marks inside a string.

Change the double quotes around the string "The monster screams Arg! as it dies. You gain experience points and find gold." to single quotes ', then add double quotes around "Arg!".*/



{
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  }