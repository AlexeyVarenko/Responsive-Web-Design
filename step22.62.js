/*Step 62
To really see the call stack in action, you just need to modify the function slightly.

First, rename the countdown() function to countDownAndUp(). Remember to update your function calls, too.*/



const countDownAndUp = (number) => {
    console.log(number);
  
    if (number === 0) {
      return;
    } else {
      countDownAndUp(number - 1);
    }
  };
  
  countDownAndUp(3);