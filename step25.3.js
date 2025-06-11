/*Step 3
Now that you have the value of the input, you need to split it into an array of numbers. Use the .split() method to do this.

The .split() method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, string.split(",") would split the string at each comma and return an array of strings.

Use the /,\s g regex to split the value string by commas. You can tweak it based on the number of spaces separating your values. Store the array in an array variable.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array=value.split(/,\s*/g)
}