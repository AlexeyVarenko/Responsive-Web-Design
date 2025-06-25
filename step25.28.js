/*Step 28
Like you did with your getMean function, you need to add your getMedian function to your calculate logic.

Declare a variable median and assign it the value of getMedian(numbers). Then, query the DOM for the #median element and set the textContent to median.*/



  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;