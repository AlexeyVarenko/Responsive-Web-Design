/*Step 25
You need a function to convert view counts to a more readable format. For example, if the view count is 1000, it should display as 1k and if the view count is 100,000 it should display as 100k.

Create a viewCount function with a views parameter. If views is greater than or equal to 1000, return a string with the views value divided by 1000 and the letter k appended to it. Make sure to round views / 1000 down to the nearest whole number.

Otherwise, return the views value.

For example, if views is 1000 your return value should be the string "1k".*/



const viewCount=views=>{
  if(views>=1000){
    return `${Math.floor(views/1000)}k`;
  } else{
    return views
  }
}