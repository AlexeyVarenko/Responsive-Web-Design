/*Step 19
Now that you have your capture group, you can mark the entire pattern as an optional match. The ? quantifier matches zero or one occurrence of the preceding character or group. For example, the regular expression /colou?r/ matches both color and colour, because the u is optional.

Mark your capture group as optional.*/



const dollarRegex = /[0-9]+ (hundred|thousand|million|billion)? dollars/i;