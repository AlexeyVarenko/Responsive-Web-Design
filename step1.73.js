/*Step 73
Focusing on the menu items and prices, there is a fairly large gap between each line.

Target all the p elements nested in elements with the class named item and set their top and bottom margin to be 5px.*/


h1, h2 {
    font-family: Impact, serif;
  }
  
  .item p {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .flavor, .dessert {
    text-align: left;
    width: 75%;
  }
  
  .price {
    text-align: right;
    width: 25%
  }