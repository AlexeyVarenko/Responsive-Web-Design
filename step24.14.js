/*Step 14
Set the innerText property of outputValueNode to num.*/



const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText=num;

  })
}