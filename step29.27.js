/*Step 27
Some of the author bios are much longer than others. To give the cards a uniform look, you can extract the first 50 characters of each one and replace the rest with an ellipsis ("..."). Otherwise, you can show the entire bio.

Within the paragraph element, replace bio with a ternary operator. For the condition, check if the length of bio is greater than 50. If it is, use the .slice() method to extract the first 50 characters of bio and add an ellipsis at the end. Otherwise, show the full bio.*/




<p class="bio">${bio.length>50 ? bio.slice(0,50) + "...":bio}</p>