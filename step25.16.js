/*Step 16
Now you need to use your new getMean function. In your calculate function, declare a mean variable and assign it the value of getMean(numbers).*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  const mean = getMean(numbers);

}