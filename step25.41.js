/*Step 41
If multiple numbers in a series occur at the same highest frequency, they are all considered the mode. Otherwise, the mode is the number that occurs most often, that single number is the mode.

Thankfully, you can handle both of these cases at once with the .filter() method. Start by declaring a mode variable and assigning it the value of Object.keys(counts).*/


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