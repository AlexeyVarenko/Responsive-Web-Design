/*Step 17
To display the value of mean, your app has a #mean element ready to go.

Use a .querySelector to find that element, and then set its .textContent to the value of mean.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  document.querySelector("#mean").textContent=mean;

}