/*Step 41
You want to add the same gradient to the next two sections. Instead of doing that, create a new class selector called bb1-window, and move the height and background properties and values from .bb1a to the new class selector.*/



.bb1a {
    width: 70%;
    background-color: var(--building-color1); 
    
  }
  
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
   .bb1-window{
    height: 10%;
    background: linear-gradient(
        var(--building-color1),
        var(--window-color1)
      );
   }