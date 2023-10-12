/*Step 42
The calc() function is a CSS function that allows you to calculate a value based on other values. For example, you can use it to calculate the width of the viewport minus the margin of an element:

.example {
  margin: 10px;
  width: calc(100% - 20px);
}
Give #years a margin of 0 -2px, and a padding set to 0.5rem calc(1.25rem + 2px) 0.5rem 0.*/



#years {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: #0a0a23;
    color: #fff;
    margin: 0 -2px;
    padding: 0.5rem calc(1.25rem + 2px) 0.5rem 0;
    
  }