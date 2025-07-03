/*Step 42
Now chain the filter method to your latest Object.keys() call. The callback function should return whether the value of counts[el] is equal to your counts[highest].*/


const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(el=>counts[el]===counts[highest]);
}