/*Step 22
Create a new variable below your --building-color1 variable. Name your new variable --building-color2 and give it a value of #66cc99. Then set it as the background-color of .bb2.*/



.bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
  }
  
  .bb1a {
    width: 70%;
    height: 10%;
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
  
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2);
  }