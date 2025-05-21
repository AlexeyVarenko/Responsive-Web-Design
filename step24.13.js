/*Step 13
Create a variable named outputValueNode and set its value to the result of calling the document.getElementById() method. Use template literal syntax to pass in the `output-value-${i}` string to .getElementById().*/




const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode=document.getElementById(`output-value-${i}`)
  })
}