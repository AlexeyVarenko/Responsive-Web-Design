/*Step 44
Add your getMode() function to your calculate logic, and update the respective HTML element.*/



  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;